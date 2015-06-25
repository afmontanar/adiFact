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

define(["dojo/_base/declare", 'dijit/Dialog', 'dijit/form/ValidationTextBox','dijit/form/Button'], 
    function(declare,Dialog,Button){
  return declare(null, {
    constructor: function(){
       this.gpoarticulo = new Dialog({
        title: "Actualizacion de articulos",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artig1'><label for='nomag'>Nombre</label><input type='text' name='nomag' value='' id='nomag'></input></div><div class='artig'><label for='codiag'>Codigo</label><input type='text' name='codiag' value='' id='codiag'></input></div><div class='artig5'><label for='nomplulg'>Nombre plu</label><input type='text' name='nomplug' value='' id='nomplug'></input></div><div class='artig4'><label for='codplug'>Codigo plu</label><input type='text' name='codplug' value='' id='codplug'></input></div><div class='artig3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinvg' value='' id='tipinvg'></input></div><div class='artig2'><label for='ticodg'>Tipo de codigo</label><input type='text' name='ticodg' value='' id='ticodg'></input></div><div class = 'asj'><button id='nuevos' type='button'>[F2]-Nuevo</button><button id='editars' type='button'>[F3]-Editar</button></div></form>",
        style: "width: 1000px;"
    });

    

        
   }

  });
});