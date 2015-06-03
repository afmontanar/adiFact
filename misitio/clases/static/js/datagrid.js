require(['dojo/_base/declare', 'dijit/form/DateTextBox', 'dojo/date/locale','dojo/_base/array','dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function(declare, DateTextBox, locale, array,json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {
/*set up data store*/

/*
var storei = new JsonRest({
   target: "/guardar_chofer/"
});
*/

var pMenuBar = new MenuBar({});

    var pSubMenu = new DropDownMenu({});
    pSubMenu.addChild(new MenuItem({
        label: "Catalogo de articulos",
        onClick:function(){myDialog.show();}
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Actualizacion de articulos",
        onClick:function(){Articulos.show();}
    }));

    pSubMenu.addChild(new MenuItem({
        label: "Busqueda historial de vehiculos"
    }));
    
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "Inicio",
        popup: pSubMenu
    }));    

    pMenuBar.placeAt("wrapper");

    myDialog = new Dialog({
        title: "Catalogo de articulos",
        //content: "<form><div id='flotante'><div class='izquierdad'><legend  style='font-weight: bold;'>Datos del cliente (Dueño del vehiculo)</legend><div class='izquierda'><div><label for='tipi'>Tipo de identificacion: </label><input id='stateSelect'></div><div><label for='pnom'>Primer nombre: </label><input type='text' name='pnom' value='' id='pnom'></input></div><div><label for='snom'>Segundo nombre: </label><input type='text' name='snom' value='' id='snom'></input></div><div><label for='papellido'>Primer apellido: </label><input type='text' name='pape' value='' id='pape'></input></div><div><label for='sapellido'>Segundo apellido: </label><input type='text' name='sape' value='' id='sape'></input></div></div><div class='derecha'><div><label for='nide'>Numero Id </label><input type='text' name='numid' value='' id='numid'></input></div><div><label for='dir'>Direccion: </label><input type='text' name='dir' value='' id='dir'></input></div><div><label for='detail'>Detalle: </label><input type='text' name='deta' value='' id='deta'></input></div><div><label for='cel'>Celular: </label><input type='text' name='cel' value='' id='cel'></input></div></div></div><div class='espacio'></div><div class='grilla'><div class='bajar' ><button id='addRow' type='button' >Agregar Fila</button><button id='deleteRow' type='button' >Eliminar Fila</button><button id='guardar' type='button'>Guardar</button></div><div class='bajarq'><div id='gridDiv'></div></div></div></div></form>",
        content: "<form><div class='busq'><div><label for='cnomp'>Buscar</label><input type='text' name='busa' value='' id='busa'></input></div></div><div class='grida'><div id='gridDiva'></div></div></form>",
         
        style: "width: 800px;"
    });

    var busa = new dijit.form.TextBox({
            name: "busa",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 46em;"
        }, "busa");

    var datax = {
      items: []
    }

    var storex = new ItemFileWriteStore({data: datax});


    var grida = new DataGrid({
        id: 'grida',
        store: storex,
        structure: [{name:"Codigo", field:"nameh", width: "200px",editable:false},{name:"Nombre", field:"nameh1", width: "200px",editable:true},{name:"Codigo pos", field:"Referencia", width: "200px",editable:true},{name:"Tipo/Linea", field:"nameh3", width: "200px",editable:true},{name:"Precio A", field:"nameh4", width: "200px",editable:true},{name:"Precio B", field:"nameh5", width: "200px",editable:false},{name:"Precio C", field:"nameh6", width: "200px",editable:false},{name:"Iva", field:"nameh7", width: "200px",editable:false},{name:"Descuento", field:"nameh8", width: "200px",editable:false},{name:"Costo", field:"nameh9", width: "200px",editable:false},{name:"Cuenta", field:"nameh9", width: "200px",editable:false}]
    }); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};---,type: dojox.grid.cells.TextBox, onKeyUp: function (evt) {totar.setValue(canti.get("value")*this.get("value")); updateAllh();}

    grida.placeAt("gridDiva");


    Articulos = new Dialog({
        title: "Articulos",
        //content: "<form><div id='flotante'><div class='izquierdad'><legend  style='font-weight: bold;'>Datos del cliente (Dueño del vehiculo)</legend><div class='izquierda'><div><label for='tipi'>Tipo de identificacion: </label><input id='stateSelect'></div><div><label for='pnom'>Primer nombre: </label><input type='text' name='pnom' value='' id='pnom'></input></div><div><label for='snom'>Segundo nombre: </label><input type='text' name='snom' value='' id='snom'></input></div><div><label for='papellido'>Primer apellido: </label><input type='text' name='pape' value='' id='pape'></input></div><div><label for='sapellido'>Segundo apellido: </label><input type='text' name='sape' value='' id='sape'></input></div></div><div class='derecha'><div><label for='nide'>Numero Id </label><input type='text' name='numid' value='' id='numid'></input></div><div><label for='dir'>Direccion: </label><input type='text' name='dir' value='' id='dir'></input></div><div><label for='detail'>Detalle: </label><input type='text' name='deta' value='' id='deta'></input></div><div><label for='cel'>Celular: </label><input type='text' name='cel' value='' id='cel'></input></div></div></div><div class='espacio'></div><div class='grilla'><div class='bajar' ><button id='addRow' type='button' >Agregar Fila</button><button id='deleteRow' type='button' >Eliminar Fila</button><button id='guardar' type='button'>Guardar</button></div><div class='bajarq'><div id='gridDiv'></div></div></div></div></form>",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artic1'><label for='noma'>Nombre</label><input type='text' name='nomar' value='' id='nomar'></input></div><div class='artic'><label for='codia'>Codigo</label><input type='text' name='codiar' value='' id='codiar'></input></div><div class='artic5'><label for='nomplul'>Nombre plu</label><input type='text' name='nomplu' value='' id='nomplu'></input></div><div class='artic4'><label for='codplu'>Codigo plu</label><input type='text' name='codplu' value='' id='codplu'></input></div><div class='artic3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinv' value='' id='tipinv'></input></div><div class='artic2'><label for='ticod'>Tipo de codigo</label><input type='text' name='ticodr' value='' id='ticodr'></input></div></form>",
         
        style: "width: 1000px;"
    });

     var nomar = new dijit.form.TextBox({
            name: "nomar",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 30em;"
        }, "nomar");

     var codiar = new dijit.form.TextBox({
            name: "codiar",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "codiar");

      var codplu = new dijit.form.TextBox({
            name: "codplu",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 2em;"
        }, "codplu");
     
      var tipinv = new dijit.form.TextBox({
            name: "tipinv",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 2em;"
        }, "tipinv");

      var ticodr = new dijit.form.TextBox({
            name: "ticodr",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 2em;"
        }, "ticodr");

      var nomplu = new dijit.form.TextBox({
            name: "nomplu",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 20em;"
        }, "nomplu");

     /*
        No es facil JEHOVA uno dejar de sentirse mal, es lamentable y hasta desesperante, padre dame fortalezas para seguir adelante
     */


 
});