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
	
def tener_Chofe_client(request):
	if request.is_ajax():

		chofer = Chofer.objects.filter(cliente_id=request.GET['id'])
		
		"""return HttpResponse(
				json.dumps({'nombre': cliente.TipoIdentificacion, 'descripcion': cliente.numeroId, 'url': cliente.primeroNombre,'nombres': cliente.TipoIdentificacion, 'descripcions': cliente.numeroId, 'urls': cliente.primeroNombre }),
				content_type="application/json; charset=uft8"
				)
				

				json.dumps({'identifier': 'id','items': [col1: "normal", col2: "normal", col3: "normal", col4: "normal",col5: "normal", col6: "normal"]})
		{"""
		
		myList=[]
		i=0
		for dato in chofer:
			myList.append({"named":dato.Identificacion,"named1":dato.primeroNombre,"named2":dato.primeroApellido,"named3":dato.direccion,"named4":dato.celular,"named5":dato.detalle})
			i=i+1
			
		
		return HttpResponse(
				json.dumps(myList),
				content_type="application/json; charset=uft8"
				)


