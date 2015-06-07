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
       this.gpoarticulo = new Dialog({
        title: "Actualizacion de articulos",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artig1'><label for='noma'>Nombre</label><input type='text' name='nomar' value='' id='nomar'></input></div><div class='artig'><label for='codia'>Codigo</label><input type='text' name='codiar' value='' id='codiar'></input></div><div class='artig5'><label for='nomplul'>Nombre plu</label><input type='text' name='nomplu' value='' id='nomplu'></input></div><div class='artig4'><label for='codplu'>Codigo plu</label><input type='text' name='codplu' value='' id='codplu'></input></div><div class='artig3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinv' value='' id='tipinv'></input></div><div class='artig2'><label for='ticod'>Tipo de codigo</label><input type='text' name='ticodr' value='' id='ticodr'></input></div></form>",
        style: "width: 1000px;"
    });
      
   }
  });
});