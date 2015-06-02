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
        label: "Historia de vehiculo",
        onClick:function(){historiaVehiculo.show();}
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

 
});