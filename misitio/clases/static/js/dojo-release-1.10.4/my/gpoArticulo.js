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

define(["dojo/_base/declare", 'dijit/Dialog', 'dijit/form/ValidationTextBox'], function(declare,Dialog){
	 
	

  return declare(null, {
    constructor: function(){
       this.nuevoArti = new Dialog({
        title: "Nuevo Articulo",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='newart'><label for='cnew'>Codigo</label><input type='text' name='cnew' value='' id='cnew'></input></div><div class='newart1'><label for='nomnew'>Nombre</label><input type='text' name='nomnew' value='' id='nomnew'></input></div><div class='newart2'><label for='tipcnew'>Tipo de codigo</label><input type='text' name='tipcnew' value='' id='tipcnew'></input></div><div class='newart3'><label for='tipcinv'>Tipo de inventario</label><input type='text' name='tipcinv' value='' id='tipcinv'></input></div><div class='newart4'><label for='codnplu'>Codigo plu</label><input type='text' name='codnplu' value='' id='codnplu'></input></div><div class='newart4'><label for='nomnplu'>Nombre plu</label><input type='text' name='nomnplu' value='' id='nomnplu'></input></div><div class='newart6'><button id='escnew' type='button'>[Esc]-Salir</button></div><div class='newart5'><button id='aceptnew' type='button'>[Ent]-Aceptar</button></div></form>",  
        style: "width: 500px;"
    });
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

	   var tipcnew = new dijit.form.TextBox({
            name: "tipcnew",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "tipcnew"); 

	   var tipcinv = new dijit.form.TextBox({
            name: "tipcinv",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
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
   }
  });
});