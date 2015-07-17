define(["dojo/_base/declare", 'dijit/Dialog', 'dijit/form/TextBox','dojo/store/Memory','dijit/form/Button','dojo/_base/xhr'], function(declare,Dialog,Memory,Button,xhr){
	
  return declare(null, {
	constructor: function(ContentPane){
	  this.estadoCuenta = new Dialog({
	    title: "Estado de cuentas",
	    content: "<form>"+
	       			"<legend style='font-weight: bold;'>Estado de cuentas</legend>"+
	       		 	"<div id='eca'></div>"+
	       		 	"<legend style='font-weight: bold;'>Existencias en bodegas</legend>"+
	       		 	"<div id='peb'></div>"+
	       		 "</form>",  
	    style: "width: 800px;"
	   });

	  var panelbus = new ContentPane({
		      //content:"<div class='bjh'><label for='estade'>Estado</label><input type='text' name='estade' value='' id='estade'></input><label for='ivani'>Ivaln</label><input type='text' name='ivani' value='' id='ivani'></input><label for='desto'>%Dto</label><input type='text' name='desto' value='' id='desto'></input><label for='ivac'>%Iva</label><input type='text' name='ivac' value='' id='ivac'></input><label for='prec1'>Precio1</label><input type='text' name='prec1' value='' id='prec1'></input><label for='prec2'>Precio2</label><input type='text' name='prec2' value='' id='prec2'></input><label for='prec3'>Precio3</label><input type='text' name='prec3' value='' id='prec3'></input></div><div class ='bjh1'><label for='bog1'>Bodega1</label><input type='text' name='bog1' value='' id='bog1'></input><label for='bog2'>Bodega2</label><input type='text' name='bog2' value='' id='bog2'></input><label for='bog3'>Bodega3</label><input type='text' name='bog3' value='' id='bog3'></input><label for='bog4'>Bodega4</label><input type='text' name='bog4' value='' id='bog4'></input><label for='bog5'>Bodega5</label><input type='text' name='bog5' value='' id='bog5'></input><div/>",
		      content:"<div class='bsc'>"+
		      			"<label for='noma'>Codigo</label>"+
		      			"<input type='text' name='codiec' value='' id='codiec'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Nombre del articulo</label>"+
		      			"<input type='text' name='nomart' value='' id='nomart'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Codigo plu</label>"+
		      			"<input type='text' name='codiecp' value='' id='codiecp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Nombre plu</label>"+
		      			"<input type='text' name='nomcp' value='' id='nomcp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Grupo/Linea</label>"+
		      			"<input type='text' name='gpcp' value='' id='gpcp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Localizacion</label>"+
		      			"<input type='text' name='locacp' value='' id='locacp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Referencia</label>"+
		      			"<input type='text' name='refecp' value='' id='refecp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Auxiliar de inventarios</label>"+
		      			"<input type='text' name='auincp' value='' id='auincp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Tipo de codigo</label>"+
		      			"<input type='text' name='tipncp' value='' id='tipncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Descripcion apida</label>"+

		      			"<input type='text' name='desncp' value='' id='desncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Costo de venta</label>"+
		      			"<input type='text' name='costvncp' value='' id='costvncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Estado</label>"+
		      			"<input type='text' name='estncp' value='' id='estncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Interface contable</label>"+
		      			"<input type='text' name='intcncp' value='' id='intcncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<label for='noma'>Iva ventas</label>"+

		      			"<input type='text' name='ivacncp' value='' id='ivacncp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Ultimo Costo</label>"+
		      			"<input type='text' name='ultcostcp' value='' id='ultcostcp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Tipo de unidad</label>"+
		      			"<input type='text' name='tipucp' value='' id='tipucp'></input>"+
		      			

		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>%Iva</label>"+
		      			"<input type='text' name='pivacp' value='' id='pivacp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Precio de venta1</label>"+
		      			"<input type='text' name='prevent1cp' value='' id='prevent1cp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>%Dto Facturacion</label>"+
		      			"<input type='text' name='pordesccp' value='' id='pordesccp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Precio de venta2</label>"+
		      			"<input type='text' name='prevent2cp' value='' id='prevent2cp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Tipo de empaque</label>"+
		      			"<input type='text' name='tipecp' value='' id='tipecp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Precio de venta 3</label>"+
		      			"<input type='text' name='prevent3cp' value='' id='prevent3cp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Unidades por empaque</label>"+
		      			"<input type='text' name='uniporecp' value='' id='uniporecp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			
		      			"<label for='noma'>Fecha de vencimiento</label>"+
		      			"<input type='text' name='fechavecp' value='' id='fechavecp'></input>"+

		      			"<div/>",
		      style:"height:50%; background-color: #efefef;border: 1px solid #b5bcc7;"
	  }, "eca").startup();
				
	var codiec = new dijit.form.TextBox({
	            name: "codiec",
	            value: "" /* no or empty value! */,
	            placeHolder: "Codigo",
	            style: "width: 10em;"
	        }, "codiec");

	var nomart = new dijit.form.TextBox({
	            name: "nomart",
	            value: "" /* no or empty value! */,
	            placeHolder: "Nombre de articulo",
	            style: "width: 24em;"
	        }, "nomart");

	var codiecp = new dijit.form.TextBox({
	            name: "codiecp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Codigo plu",
	            style: "width: 12em;"
	        }, "codiecp");

	var nomcp = new dijit.form.TextBox({
	            name: "nomcp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Nombre plu",
	            style: "width: 24em;"
	        }, "nomcp");

	var gpcp = new dijit.form.TextBox({
	            name: "gpcp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Grupo/Linea",
	            style: "width: 18em;"
	        }, "gpcp");

	var locacp = new dijit.form.TextBox({
	            name: "locacp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Localizacion",
	            style: "width: 18em;"
	        }, "locacp");

	var refecp = new dijit.form.TextBox({
	            name: "refecp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Referencia",
	            style: "width: 16em;"
	        }, "refecp");

	var auincp = new dijit.form.TextBox({
	            name: "auincp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Auxiliar de inventarios",
	            style: "width: 16em;"
	        }, "auincp");

	var tipncp = new dijit.form.TextBox({
	            name: "tipncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Tipo de codigo",
	            style: "width: 16em;"
	        }, "tipncp");

	var cuencp = new dijit.form.TextBox({
	            name: "cuencp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Cuenta de ingresos",
	            style: "width: 15em;"
	        }, "cuencp");

	var desncp = new dijit.form.TextBox({
	            name: "desncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Descripcion Apida",
	            style: "width: 16em;"
	        }, "desncp");

	var costvncp = new dijit.form.TextBox({
	            name: "costvncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Costo de venta",
	            style: "width: 18em;"
	        }, "costvncp");

	var estncp = new dijit.form.TextBox({
	            name: "estncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Estado",
	            style: "width: 18em;"
	        }, "estncp");

	var intcncp = new dijit.form.TextBox({
	            name: "intcncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Interface contable",
	            style: "width: 18em;"
	        }, "intcncp");

	var ivacncp = new dijit.form.TextBox({
	            name: "ivacncp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Iva ventas",
	            style: "width: 17em;"
	        }, "ivacncp");

	var ultcostcp = new dijit.form.TextBox({
	            name: "ultcostcp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Ultimo costo",
	            style: "width: 17em;"
	        }, "ultcostcp");

	var tipucp = new dijit.form.TextBox({
	            name: "tipucp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Tipo de unidad",
	            style: "width: 17em;"
	        }, "tipucp");

	var costprocp = new dijit.form.TextBox({
	            name: "costprocp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Costo promedio",
	            style: "width: 15em;"
	        }, "costprocp");

	var pivacp = new dijit.form.TextBox({
	            name: "pivacp",
	            value: "" /* no or empty value! */,
	            placeHolder: "%Iva",
	            style: "width: 18em;"
	        }, "pivacp");

	var prevent1cp = new dijit.form.TextBox({
	            name: "prevent1cp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio de venta 1",
	            style: "width: 18em;"
	        }, "prevent1cp");

	var pordesccp = new dijit.form.TextBox({
	            name: "pordesccp",
	            value: "" /* no or empty value! */,
	            placeHolder: "% Dto Facturacion",
	            style: "width: 16em;"
	        }, "pordesccp");

	var prevent2cp = new dijit.form.TextBox({
	            name: "prevent2cp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio de venta 2",
	            style: "width: 16em;"
	        }, "prevent2cp");

	var tipecp = new dijit.form.TextBox({
	            name: "tipecp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Tipo de empaque",
	            style: "width: 16em;"
	        }, "tipecp");

	var prevent3cp = new dijit.form.TextBox({
	            name: "prevent3cp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio de venta 3",
	            style: "width: 16em;"
	        }, "prevent3cp");

	var uniporecp = new dijit.form.TextBox({
	            name: "uniporecp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Unidades X Empaque",
	            style: "width: 14em;"
	        }, "uniporecp");

	var fechavecp = new dijit.form.TextBox({
	            name: "fechavecp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Fecha vencimiento",
	            style: "width: 14em;"
	        }, "fechavecp");

	


	var paneleb = new ContentPane({
		      //content:"<div class='bjh'><label for='estade'>Estado</label><input type='text' name='estade' value='' id='estade'></input><label for='ivani'>Ivaln</label><input type='text' name='ivani' value='' id='ivani'></input><label for='desto'>%Dto</label><input type='text' name='desto' value='' id='desto'></input><label for='ivac'>%Iva</label><input type='text' name='ivac' value='' id='ivac'></input><label for='prec1'>Precio1</label><input type='text' name='prec1' value='' id='prec1'></input><label for='prec2'>Precio2</label><input type='text' name='prec2' value='' id='prec2'></input><label for='prec3'>Precio3</label><input type='text' name='prec3' value='' id='prec3'></input></div><div class ='bjh1'><label for='bog1'>Bodega1</label><input type='text' name='bog1' value='' id='bog1'></input><label for='bog2'>Bodega2</label><input type='text' name='bog2' value='' id='bog2'></input><label for='bog3'>Bodega3</label><input type='text' name='bog3' value='' id='bog3'></input><label for='bog4'>Bodega4</label><input type='text' name='bog4' value='' id='bog4'></input><label for='bog5'>Bodega5</label><input type='text' name='bog5' value='' id='bog5'></input><div/>",
		      content:"<div class='bsb'>"+
		      			"<label for='noma'>Bodega 1</label>"+
		      			"<label for='noma'>Bodega 2</label>"+
		      			"<label for='noma'>Bodega 3</label>"+
		      			"<label for='noma'>Bodega 4</label>"+
		      			"<label for='noma'>Bodega 5</label>"+
		      			"<label for='noma'>Bodega Remsns Clte</label>"+
		      			"<input type='text' name='bode1' value='' id='bode1'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='bode2' value='' id='bode2'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='bode3' value='' id='bode3'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='bode4' value='' id='bode4'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='bodec5' value='' id='bodec5'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='boderc' value='' id='boderc'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='saldoacp' value='' id='saldoacp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='saldoacp1' value='' id='saldoacp1'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='mvtodcp' value='' id='mvtodcp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='mvtodcp1' value='' id='mvtodcp1'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='mvtoccp' value='' id='mvtoccp'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='mvtoccp1' value='' id='mvtoccp1'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='sadoact' value='' id='sadoact'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<input type='text' name='sadoact1' value='' id='sadoact1'></input>"+
		      			"<span data-dojo-type='dijit/ToolbarSeparator'></span>"+
		      			"<div/>",
		      style:"height:50%; background-color: #efefef;border: 1px solid #b5bcc7;"
	  }, "peb").startup();

	var bode1 = new dijit.form.TextBox({
	            name: "bode1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega 1",
	            style: "width: 15em;"
	        }, "bode1");

	var bode2 = new dijit.form.TextBox({
	            name: "bode2",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega 2",
	            style: "width: 15em;"
	        }, "bode2");

	var bode3 = new dijit.form.TextBox({
	            name: "bode3",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega 3",
	            style: "width: 15em;"
	        }, "bode3");

	var bode4 = new dijit.form.TextBox({
	            name: "bode4",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega 4",
	            style: "width: 15em;"
	        }, "bode4");

	var bode5 = new dijit.form.TextBox({
	            name: "bodec5",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega 5",
	            style: "width: 15em;"
	        }, "bodec5");

	var boderc = new dijit.form.TextBox({
	            name: "boderc",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega Remsns Clte",
	            style: "width: 15em;"
	        }, "boderc");

	var saldoacp = new dijit.form.TextBox({
	            name: "saldoacp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Saldo anterior",
	            style: "width: 15em;"
	        }, "saldoacp");

	var saldoacp1 = new dijit.form.TextBox({
	            name: "saldoacp1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Saldo anterior",
	            style: "width: 15em;"
	        }, "saldoacp1");

	var mvtodcp = new dijit.form.TextBox({
	            name: "mvtodcp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Movimiento Debito",
	            style: "width: 15em;"
	        }, "mvtodcp");

	var mvtodcp1 = new dijit.form.TextBox({
	            name: "mvtodcp1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Movimiento Debito",
	            style: "width: 15em;"
	        }, "mvtodcp1");

	var mvtoccp = new dijit.form.TextBox({
	            name: "mvtoccp",
	            value: "" /* no or empty value! */,
	            placeHolder: "Movimiento credito",
	            style: "width: 15em;"
	        }, "mvtoccp");

	var mvtoccp1 = new dijit.form.TextBox({
	            name: "mvtoccp1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Movimiento credito",
	            style: "width: 15em;"
	        }, "mvtoccp1");

	var sadoact = new dijit.form.TextBox({
	            name: "sadoact",
	            value: "" /* no or empty value! */,
	            placeHolder: "Saldo actual",
	            style: "width: 15em;"
	        }, "sadoact");

	var sadoact1 = new dijit.form.TextBox({
	            name: "sadoact1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Saldo actual",
	            style: "width: 15em;"
	        }, "sadoact1");



   

   }

  });
});