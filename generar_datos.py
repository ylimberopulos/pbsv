import html,json,re,time,zipfile
from pathlib import Path
from urllib.request import urlopen,Request
from urllib.parse import urlencode
import geopandas as gpd,pandas as pd
R=Path(__file__).parent; D=R/'data'; D.mkdir(exist_ok=True)
M={10:'Atemajac de Brizuela',32:'Chiquilistlán',86:'Tapalpa',113:'San Gabriel'}
C={0:'Total agrícola',6:'Agave',7:'Aguacate',32:'Arándano',149:'Frambuesa',150:'Fresa',225:'Maíz grano',283:'Papa'}
def get(u):return urlopen(u,timeout=90).read()
z=R/'limites.zip'; z.write_bytes(get('https://iieg.gob.mx/ns/wp-content/uploads/2025/03/limite_municipal_2012_iitej_iieg_gpkg.zip'))
with zipfile.ZipFile(z) as q:q.extractall(R)
g=gpd.read_file(R/'limite_municipal.gpkg');g=g[g.clave_municipio.isin(M)].copy();g['municipio']=g.clave_municipio.map(M);g['area_km2']=g.geometry.area/1e6;areas=dict(zip(g.clave_municipio,g.area_km2));g=g.to_crs(4326)[['clave_geo','clave_municipio','municipio','area_km2','geometry']];g.geometry=g.geometry.simplify(.0003);g.to_file(D/'municipios_pbsv.geojson',driver='GeoJSON')
x=R/'poblacion.xlsx';x.write_bytes(get('https://www.inegi.org.mx/contenidos/programas/ccpv/2020/tabulados/cpv2020_b_jal_01_poblacion.xlsx'));df=pd.read_excel(x,sheet_name='01',header=None);out=[]
for k,n in M.items():
 s=df[df[1].astype(str).str.strip().eq(f'{k:03d} {n}')];p=int(s[s[2].astype(str).str.strip().eq('Población')].iloc[0,3]);l=int(s[s[2].astype(str).str.strip().eq('Localidad')].iloc[0,3]);out.append({'clave':k,'municipio':n,'poblacion_2020':p,'localidades_2020':l,'area_km2':round(areas[k],2)})
(D/'inegi_municipios_2020.json').write_text(json.dumps(out,ensure_ascii=False,indent=2))
def req(args):
 d=[('xajax','reporte'),('xajaxr',str(int(time.time()*1000)))]+[('xajaxargs[]',str(a)) for a in args];return urlopen(Request('https://nube.agricultura.gob.mx/cierre_agricola/',data=urlencode(d).encode(),headers={'Content-Type':'application/x-www-form-urlencoded'}),timeout=60).read().decode('latin1')
def nums(doc):
 m=re.search(r'<tr>\s*<td>1</td>(.*?)</tr>',doc,re.S)
 if not m:return None
 a=re.findall(r'<td class="tdNum">(.*?)</td>',m.group(1),re.S);return [float(html.unescape(re.sub('<[^>]+>','',v)).replace(',','')) for v in a]
rows=[]
for y in range(2020,2025):
 for k,n in M.items():
  for c,cn in (C.items() if y==2024 else [(0,C[0])]):
   a=nums(req([1 if c==0 else 2,y,5,3,14,0,k,c,0,0,1,0,0,0,'']))
   if not a:continue
   if c==0:sem,cos,val=a[-3:]; prod=ren=None
   else:sem,cos,sin,prod,ren,pmr,val=a[-7:]
   rows.append({'anio':y,'clave':k,'municipio':n,'cultivo':cn,'superficie_sembrada_ha':sem,'superficie_cosechada_ha':cos,'produccion_t':prod,'rendimiento_t_ha':ren,'valor_produccion_miles_mxn':val})
pd.DataFrame(rows).to_csv(D/'siap_agricola_2020_2024.csv',index=False)
print('Datos oficiales generados')
