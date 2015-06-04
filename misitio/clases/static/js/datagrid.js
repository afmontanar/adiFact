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
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artic1'><label for='noma'>Nombre</label><input type='text' name='nomar' value='' id='nomar'></input></div><div class='artic'><label for='codia'>Codigo</label><input type='text' name='codiar' value='' id='codiar'></input></div><div class='artic5'><label for='nomplul'>Nombre plu</label><input type='text' name='nomplu' value='' id='nomplu'></input></div><div class='artic4'><label for='codplu'>Codigo plu</label><input type='text' name='codplu' value='' id='codplu'></input></div><div class='artic3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinv' value='' id='tipinv'></input></div><div class='artic2'><label for='ticod'>Tipo de codigo</label><input type='text' name='ticodr' value='' id='ticodr'></input></div><div class='artic8'><label for='eximax'>Existencia max</label><input type='text' name='eximax' value='' id='eximax'></input></div><div class='artic7'><label for='locati'>Localizacion</label><input type='text' name='locati' value='' id='locati'></input></div><div class='artic6'><label for='grolin'>Grupo/Linea</label><input type='text' name='grolin' value='' id='grolin'></input></div><div class='artic11'><label for='eximin'>Existencia Min</label><input type='text' name='eximin' value='' id='eximin'></input></div><div class='artic10'><label for='depen'>Dependencia</label><input type='text' name='depen' value='' id='depen'></input></div><div class='artic9'><label for='refeart'>Referencia</label><input type='text' name='refeart' value='' id='refeart'></input></div><div class='artic14'><label for='ulticos'>Ultimo Costo</label><input type='text' name='ulticos' value='' id='ulticos'></input></div><div class='artic13'><label for='ctainv'>Cta Inventarios</label><input type='text' name='ctainv' value='' id='ctainv'></input></div><div class='artic12'><label for='desapi'>Descripcion Apida</label><input type='text' name='desapi' value='' id='desapi'></input></div><div class='artic16'><label for='flete'>Fletes</label><input type='text' name='flete' value='' id='flete'></input></div><div class='artic17'><label for='ctaing'>Cta ingresos</label><input type='text' name='ctaing' value='' id='ctaing'></input></div><div class='artic15'><label for='stei'>Estado</label><input type='text' name='stei' value='' id='stei'></input></div><div class='artic20'><label for='costpre'>Costo Base Pre</label><input type='text' name='costpre' value='' id='costpre'></input></div><div class='artic19'><label for='cosve'>Costo Ventas</label><input type='text' name='cosve' value='' id='cosve'></input></div><div class='artic18'><label for='ivave'>Iva ventas</label><input type='text' name='ivave' value='' id='ivave'></input></div><div class='artic23'><label for='preve1'>Precio Venta 1</label><input type='text' name='preve1' value='' id='preve1'></input></div><div class='artic22'><label for='interCont'>Interface Contable</label><input type='text' name='interCont' value='' id='interCont'></input></div><div class='artic21'><label for='tiart'>Tipo de Articulo</label><input type='text' name='tiart' value='' id='tiart'></input></div><div class='artic25'><label for='prevent'>Precio venta 2</label><input type='text' name='prevent' value='' id='prevent'></input></div><div class='artic24'><label for='tipem'>Tipo de Empaque</label><input type='text' name='tipem' value='' id='tipem'></input></div><div class='artic27'><label for='prevent3'>Precio venta 3</label><input type='text' name='prevent3' value='' id='prevent3'></input></div><div class='artic26'><label for='unixemp'>Unidades por empaque</label><input type='text' name='unixemp' value='' id='unixemp'></input></div><div class='artic28'><label for='poriva'>% iva</label><input type='text' name='poriva' value='' id='poriva'></input></div><div class='artic29'><label for='pordefa'>% Dto Facturacion</label><input type='text' name='pordefa' value='' id='pordefa'></input></div><div class='artic30'><label for='fechae'>Fecha Entrada</label><input type='text' name='fechae' value='' id='fechae'></input></div><div class='artic31'><label for='lote'>Lote</label><input type='text' name='lote' value='' id='lote'></input></div><div class='artic32'><button id='aceptaar' type='button'>[Ent]-Aceptar</button></div><div class='artic33'><button id='escapar' type='button'>[Esc]-Salir</button></div></form>",   
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

      var grolin = new dijit.form.TextBox({
            name: "grolin",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "grolin");

      var locati = new dijit.form.TextBox({
            name: "locati",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "locati"); 

      var eximax = new dijit.form.TextBox({
            name: "eximax",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "eximax"); 

      var refeart = new dijit.form.TextBox({
            name: "refeart",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "refeart");

      var depen  = new dijit.form.TextBox({
            name: "depen",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "depen");

      var eximin = new dijit.form.TextBox({
            name: "eximin",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "eximin");

      var desapi = new dijit.form.TextBox({
            name: "desapi",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "desapi");ctainv

      var ctainv  = new dijit.form.TextBox({
            name: "ctainv",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "ctainv");

      var ulticos = new dijit.form.TextBox({
            name: "ulticos",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "ulticos");

      var stei = new dijit.form.TextBox({
            name: "stei",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "stei");  

      var flete = new dijit.form.TextBox({
            name: "flete",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "flete");

      var ctaing = new dijit.form.TextBox({
            name: "ctaing",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "ctaing");

      var costpre = new dijit.form.TextBox({
            name: "costpre",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "costpre");

      var cosve = new dijit.form.TextBox({
            name: "cosve",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "cosve");

      var ivave = new dijit.form.TextBox({
            name: "ivave",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "ivave");

      var tiart = new dijit.form.TextBox({
            name: "tiart",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "tiart");

      var interCont = new dijit.form.TextBox({
            name: "interCont",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "interCont");

      var preve1 = new dijit.form.TextBox({
            name: "preve1",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "preve1");

      var prevent = new dijit.form.TextBox({
            name: "prevent",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "prevent"); 

      var tipem = new dijit.form.TextBox({
            name: "tipem",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "tipem");

       var prevent3 = new dijit.form.TextBox({
            name: "prevent3",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "prevent3"); 

      var unixemp = new dijit.form.TextBox({
            name: "unixemp",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "unixemp");

       var lote = new dijit.form.TextBox({
            name: "lote",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "lote");

       var fechae = new dijit.form.TextBox({
            name: "fechae",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "fechae");

       var pordefa = new dijit.form.TextBox({
            name: "pordefa",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "pordefa");

       var poriva = new dijit.form.TextBox({
            name: "poriva",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "poriva");
     /*
        No es facil JEHOVA uno dejar de sentirse mal, es lamentable y hasta desesperante, padre dame fortalezas para seguir adelante
     */


 
});