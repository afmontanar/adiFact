import json

from django.http import HttpResponse, Http404
from django.shortcuts import render_to_response
from django.template import RequestContext
from clases.models import Articulo
from django.db import IntegrityError

"""
class ClienteForm(ModelForm):
	class Meta:
		model = Cliente
"""		

#puede que uno este trabajando duro para obtener cualquier objetivo pero si uno no cuanta con la guia ni la bendicion de jehova para dicha 
#labor de nada serviran nuestros esfuerzos

def clientes(request):
	return render_to_response('cliente.html', {'nothing': 'nothing'}, context_instance=RequestContext(request))

def clienteu(request):
	return render_to_response('untitled.html', {'nothing': 'nothing'}, context_instance=RequestContext(request))

"""
def clientes(request, template_name='cliente.html'):
	form = ClienteForm(request.POST or None)
	if form.is_valid():
		form.save()
	else:
		form = ClienteForm()
	return render(request, template_name, {'form':form})
"""

def guardar_articulo(request):
	if request.is_ajax():
		co = request.GET['co']
		no = request.GET['no']
		tc = request.GET['tc']
		ti = request.GET['ti']
		cu = request.GET['cu']
		nu = request.GET['nu']
		
		try:
			r = Articulo.objects.create(Codigo=co, Nombre=no, TipoCodigo=tc,TipoInventario=ti,CodigoPlu=cu,NombrePlu=nu)
			
			return HttpResponse(
			json.dumps({'respuesta': 'si'}),
			content_type="application/json; charset=uft8"
			)
		except IntegrityError:
			return HttpResponse(
			json.dumps({'respuesta': 'no'}),
			content_type="application/json; charset=uft8"
			)

def guardar_articuloe(request):
	if request.is_ajax():
		co = request.GET['co']
		no = request.GET['no']
		tc = request.GET['tc']
		ti = request.GET['ti']
		cu = request.GET['cu']
		nu = request.GET['nu']
		GrupoLineai = request.GET['GrupoLinea']
		Localizacioni = request.GET['Localizacion']
		ExistenciaMaxi = request.GET['ExistenciaMax']
		Refereciai = request.GET['Referecia']
		Dependenciai = request.GET['Dependencia']
		ExistenciaMini = request.GET['ExistenciaMin']
		DescripcionApidai = request.GET['DescripcionApida']
		CtaInventarioi = request.GET['CtaInventario']
		UltimoCostoi = request.GET['UltimoCosto']
		Refereciai = request.GET['Referecia']
		Estadoi = request.GET['Estado']
		CtaIngresosi = request.GET['CtaIngresos']
		Fletesi = request.GET['Fletes']
		IvaVentasi = request.GET['IvaVentas']
		CostoVentai = request.GET['CostoVenta']
		CostoBasei = request.GET['CostoBase']
		Tipoarticuloi = request.GET['Tipoarticulo']
		InterfaceConi = request.GET['InterfaceCon']
		PrecioVent1i = request.GET['PrecioVent1']
		TipoEmpaquei = request.GET['TipoEmpaque']
		PrecioVent2i = request.GET['PrecioVent2']
		UnidadeXempaquei = request.GET['UnidadeXempaque']
		PrecioVent3i = request.GET['PrecioVent3']
		PorIvai = request.GET['PorIva']
		DtoFacturacioni = request.GET['DtoFacturacion']
		FechaEntradai = request.GET['FechaEntrada']
		Lotei = request.GET['Lote']
		print(co)
		try:
			u = Articulo.objects.get(pk='1')
			print("pasamos por aqui")
			u.Nombre=no
			print("pasamos por aqui1")
			u.TipoCodigo=tc


			u.TipoInventario=ti
			u.CodigoPlu=cu
			u.NombrePlu=nu
			u.GrupoLinea=GrupoLineai
			u.Localizacion=Localizacioni
			u.ExistenciaMax=ExistenciaMaxi
			u.Referecia=Refereciai
			u.Dependencia=Dependenciai
			u.ExistenciaMin=ExistenciaMini
			u.DescripcionApida=DescripcionApidai
			u.CtaInventario=CtaInventarioi
			u.UltimoCosto=UltimoCostoi
			u.Estado=Estadoi
			u.CtaIngresos=CtaIngresosi
			u.Fletes=Fletesi
			u.IvaVentas=IvaVentasi
			u.CostoVenta=CostoVentai
			u.CostoBase=CostoBasei
			u.Tipoarticulo=Tipoarticuloi
			u.InterfaceCon=InterfaceConi
			u.PrecioVent1=PrecioVent1i
			u.TipoEmpaque=TipoEmpaquei
			u.PrecioVent2=PrecioVent2i
			u.UnidadeXempaque=UnidadeXempaquei
			u.PrecioVent3=PrecioVent3i
			u.PorIva=PorIvai
			u.DtoFacturacion=DtoFacturacioni
			u.FechaEntrada=FechaEntradai
			u.Lote=Lotei
			u.save()
			return HttpResponse(
				json.dumps({'respuesta': 'si'}),
				content_type="application/json; charset=uft8"
				)
		except IntegrityError:
			return HttpResponse(
				json.dumps({'respuesta': 'no'}),
				content_type="application/json; charset=uft8"
				)


def guardar_chofer(request):
	chofer = Cliente.objects.all()
	
	"""return HttpResponse(
			json.dumps({'nombre': cliente.TipoIdentificacion, 'descripcion': cliente.numeroId, 'url': cliente.primeroNombre,'nombres': cliente.TipoIdentificacion, 'descripcions': cliente.numeroId, 'urls': cliente.primeroNombre }),
			content_type="application/json; charset=uft8"
			)
			

			json.dumps({'identifier': 'id','items': [col1: "normal", col2: "normal", col3: "normal", col4: "normal",col5: "normal", col6: "normal"]})
	{"""

	myList=[]
	i=0
	for dato in chofer:
		myList.append({"id":i,"namec1":dato.numeroId,"namec2":dato.primeroNombre,"namec3":dato.primeroApellido,"namec4":dato.celular,"namec5":dato.detalles})
		i=i+1
	
	return HttpResponse(
			json.dumps(myList),
			content_type="application/json; charset=uft8"
			)

def busqueda_filtreada(request):
	if request.is_ajax():
		chofer = Articulo.objects.all()
		
		"""return HttpResponse(
				json.dumps({'nombre': cliente.TipoIdentificacion, 'descripcion': cliente.numeroId, 'url': cliente.primeroNombre,'nombres': cliente.TipoIdentificacion, 'descripcions': cliente.numeroId, 'urls': cliente.primeroNombre }),
				content_type="application/json; charset=uft8"
				)
				

				json.dumps({'identifier': 'id','items': [col1: "normal", col2: "normal", col3: "normal", col4: "normal",col5: "normal", col6: "normal"]})
		{"""


		myList=[]
		i=0
		for dato in chofer:
			myList.append({"nameh":dato.Codigo,"nameh1":dato.Nombre,"nameh2":dato.CodigoPlu,"nameh3":dato.Tipoarticulo,"nameh4":dato.PrecioVent1,"nameh5":dato.PrecioVent2,"Codigo":dato.PrecioVent3,"nameh6":dato.IvaVentas,"nameh7":dato.DtoFacturacion,"nameh8":dato.CostoVenta,"nameh9":dato.CostoBase,"nameh10":dato.CtaInventario})
			i=i+1
		
		return HttpResponse(
				json.dumps(myList),
				content_type="application/json; charset=uft8"
				)
	
def tener_Articulo(request):
	if request.is_ajax():

		articulo = Articulo.objects.filter(Codigo=request.GET['co'])
		
		myList=[]
		i=0
		for dato in articulo:
			myList.append({"Codigo":dato.Codigo,"Nombre":dato.Nombre,"TipoCodigo":dato.TipoCodigo,"TipoInventario":dato.TipoInventario,"CodigoPlu":dato.CodigoPlu,"NombrePlu":dato.NombrePlu,"GrupoLinea":dato.GrupoLinea,"Localizacion":dato.Localizacion,"ExistenciaMax":dato.ExistenciaMax,"Referecia":dato.Referecia,"Dependencia":dato.Dependencia,"ExistenciaMin":dato.ExistenciaMin,"DescripcionApida":dato.DescripcionApida,"CtaInventario":dato.CtaInventario,"UltimoCosto":dato.UltimoCosto,"Estado":dato.Estado,"CtaIngresos":dato.CtaIngresos,"Fletes":dato.Fletes,"IvaVentas":dato.IvaVentas,"CostoVenta":dato.CostoVenta,"CostoBase":dato.CostoBase,"Tipoarticulo":dato.Tipoarticulo,"InterfaceCon":dato.InterfaceCon,"PrecioVent1":dato.PrecioVent1,"TipoEmpaque":dato.TipoEmpaque,"PrecioVent2":dato.PrecioVent2,"UnidadeXempaque":dato.UnidadeXempaque,"PrecioVent3":dato.PrecioVent3,"PorIva":dato.PorIva,"DtoFacturacion":dato.DtoFacturacion,"FechaEntrada":dato.FechaEntrada,"Lote":dato.Lote})
			i=i+1
		return HttpResponse(
				json.dumps(myList),
				content_type="application/json; charset=uft8"
				)


