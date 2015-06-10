/*
require(['dijit/Dialog','dojo/domReady!'],
function(Dialog) {
    nuevoArti = new Dialog({
        title: "Nuevo Articulo",
        content: "<form><label for='cnomp'>Buscar</label></form>",  
        style: "width: 800px;"
    }, "nuevoArti");
    nuevoArti.startup();
});
*/

define(["dojo/_base/declare", 'dijit/Dialog', 'dijit/form/ValidationTextBox','dojo/store/Memory','dijit/form/Button','dojo/_base/xhr'], function(declare,Dialog,Memory,Button,xhr){
	
  return declare(null, {
    constructor: function(){
       this.nuevoArti = new Dialog({
        title: "Nuevo Articulo",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='newart'><label for='cnew'>Codigo</label><input type='text' name='cnew' value='' id='cnew'></input></div><div class='newart1'><label for='nomnew'>Nombre</label><input type='text' name='nomnew' value='' id='nomnew'></input></div><div class='newart2'><label for='tipcnew'>Tipo de codigo</label><input type='text' name='tipcnew' value='' id='tipcnew'></input></div><div class='newart3'><label for='tipcinv'>Tipo de inventario</label><input type='text' name='tipcinv' value='' id='tipcinv'></input></div><div class='newart4'><label for='codnplu'>Codigo plu</label><input type='text' name='codnplu' value='' id='codnplu'></input></div><div class='newart4'><label for='nomnplu'>Nombre plu</label><input type='text' name='nomnplu' value='' id='nomnplu'></input></div><div class='newart6'><button id='nuevox' type='button'>[Esc]-Salir</button></div><div class='newart5'><button id='nuevoa' type='button'>[Ent]-Aceptar</button></div></form>",  
        style: "width: 500px;"
    });

	   var conecdialog = this.nuevoArti;

       var cnew = new dijit.form.TextBox({
            name: "cnew",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "cnew");

	   var nomnew = new dijit.form.TextBox({
            name: "nomnew",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 25em;"
        }, "nomnew"); 

	   var statew = new dojo.store.Memory({
            data: [
                {name:"Detalle", id:"1"},
                {name:"General", id:"2"},
            ]
      	});

	   var tipcnew = new dijit.form.ComboBox({
            name: "tipcnew",
            value: "",
            store: statew,
            searchAttr: "name",
            style: "width: 3em;"
       }, "tipcnew");

	  var statev = new dojo.store.Memory({
            data: [
                {name:"Productos terminados", id:"1"},
                {name:"Productos en procesos", id:"2"},
                {name:"Materia prima", id:"3"},
                {name:"Productos en transito", id:"4"},
                {name:"Otros productos", id:"5"}
            ]
      });


      var tipcinv = new dijit.form.ComboBox({
            name: "tipcinv",
            value: "",
            store: statev,
            searchAttr: "name",
            style: "width: 3em;"
       }, "tipcinv");

	   var codnplu = new dijit.form.TextBox({
            name: "codnplu",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "codnplu"); 

	   var nomnplu = new dijit.form.TextBox({
            name: "nomnplu",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "nomnplu");

	    var nuevoa = new dijit.form.Button({
            onClick: function () {
            if(cnew.value!=""){
		      if(nomnew.value!=""){
		        if(tipcnew.value!=""){
		            if(tipcinv.value!=""){
		              if(codnplu.value!=""){
		                if(nomnplu.value!=""){
		                     dojo.xhr.get({
		                        // The URL of the request
		                        //data:{'id':id},
		                        url: '/guardar_articulo/',
		                        //type: 'get',

		                        content: {
		                            co: cnew.value,
		                            no: nomnew.value,
		                            tc: tipcnew.value,
		                            ti: tipcinv.value,
		                            cu: codnplu.value,
		                            nu: nomnplu.value
		                        },
		                        // The success callback with result from server
		                        load: function(newContent) {

		                             if(newContent=='{"respuesta": "si"}'){
		                                alert("Guardado correctamente");
		                                 cnew.reset();
		                                 nomnew.reset();
		                                 tipcnew.reset();
		                                 tipcinv.reset();
		                                 codnplu.reset();
		                                 nomnplu.reset();
		                                 
		                             }else{
		                                alert("Este articulo ya existe");
		                                 cnew.reset();
		                                 nomnew.reset();
		                                 tipcnew.reset();
		                                 tipcinv.reset();
		                                 codnplu.reset();
		                                 nomnplu.reset();
		                             }
		                            //dom.byId("contentNode").innerHTML = newContent;
		                        },
		                        // The error handler
		                        error: function() {
		                            // Do nothing -- keep old content there
		                        }
		        });
		         }else{
		        alert("Digite el nombre plu")
		    }   
		         }else{
		        alert("Digite el codigo plu")
		    }   
		         }else{
		        alert("Escoja el tipo de inventario")
		    }   
		         }else{
		        alert("Escoja un tipo de codigo")
		    }   
		    }else{
		        alert("Digite el nombre")
		    }
		    }else{
		        alert("Digite el codigo")
		    }
            },
            style: "width: 6em;"
        },"nuevoa").startup();

        var nuevox = new dijit.form.Button({
            onClick: function () {conecdialog.hide();},
            style: "width: 6em;"
        },"nuevox").startup();
   }
  });
});