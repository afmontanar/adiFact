require(['dojo/_base/declare',"my/nuevoArticulo","my/gpoArticulo", 'dijit/form/DateTextBox', 'dojo/date/locale','dojo/_base/array','dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function(declare,nuevoArticulo,gpoArticulo, DateTextBox, locale, array,json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {
/*set up data store*/

/*
var storei = new JsonRest({
   target: "/guardar_chofer/"
});
*/

   function llenarTabla(){
                xhr.get({
                   url: '/busqueda_filtreada/',
                        //type: 'get',

                        content: {
                                 
                        },
                        // The success callback with result from server
                        load: function(newContent) {
                            var obj = JSON.parse(newContent);
                            var dataxc = {
                                      items: obj
                                 }
                            
                            storecx = new ItemFileWriteStore({data: dataxc}); 
                            grida.setStore(storecx); 
                            
                            //dom.byId("contentNode").innerHTML = newContent;
                            //storec = new dojo.store.JsonRest(data:newContent)
                            //dataStore = new dojo.data.ObjectStore({objectStore: storec});
                        },
                        // The error handler
                        error: function() {
                            // Do nothing -- keep old content there
                        }
                });
            };

var pMenuBar = new MenuBar({});

    var pSubMenu = new DropDownMenu({});
    pSubMenu.addChild(new MenuItem({
        label: "Catalogo de articulos",
        onClick:function(){llenarTabla();myDialog.show();}
    }));
    pSubMenu.addChild(new MenuItem({
        label: "Actualizacion de articulos",
        onClick:function(){Articulos.show();}
    }));

    pSubMenu.addChild(new MenuItem({
        label: "Nuevo articulo",
        onClick:function(){nuevoArtic.nuevoArti.show();}
    }));

     pSubMenu.addChild(new MenuItem({
        label: "Editar grupo articulo",
        onClick:function(){gpoArticuloc.gpoarticulo.show();}
    }));
    
    pMenuBar.addChild(new PopupMenuBarItem({
        label: "Inicio",
        popup: pSubMenu
    }));    

    pMenuBar.placeAt("wrapper");

    myDialog = new Dialog({
        title: "Catalogo de articulos", 
        content: "<form><div><legend style='font-weight: bold;'>Seleccion</legend><div class='seleccion'><button id='nuevo' type='button'>[F2]-Nuevo</button><button id='editar' type='button'>[F3]-Editar</button><button id='partes' type='button'>[F5]-Partes</button><button id='NomTxt' type='button'>[F6]-NomTxt</button><button id='borrar' type='button'>[F7]-Borrar</button><button id='stock' type='button'>[F9]-Stock</button><button id='precios' type='button'>[F8]-Precios</button><button id='imprimir' type='button'>[F10]-imprimir</button><div/><div class='seleccion1'><button id='selection' type='button'>[Ent]-Seleccion</button><button id='salir' type='button'>[Esc]-Salir</button><div/><div class='bjh'><label for='estade'>Estado</label><input type='text' name='estade' value='' id='estade'></input><label for='ivani'>Ivaln</label><input type='text' name='ivani' value='' id='ivani'></input><label for='desto'>%Dto</label><input type='text' name='desto' value='' id='desto'></input><label for='ivac'>%Iva</label><input type='text' name='ivac' value='' id='ivac'></input><label for='prec1'>Precio1</label><input type='text' name='prec1' value='' id='prec1'></input><label for='prec2'>Precio2</label><input type='text' name='prec2' value='' id='prec2'></input><label for='prec3'>Precio3</label><input type='text' name='prec3' value='' id='prec3'></input></div><div class ='bjh1'><label for='bog1'>Bodega1</label><input type='text' name='bog1' value='' id='bog1'></input><label for='bog2'>Bodega2</label><input type='text' name='bog2' value='' id='bog2'></input><label for='bog3'>Bodega3</label><input type='text' name='bog3' value='' id='bog3'></input><label for='bog4'>Bodega4</label><input type='text' name='bog4' value='' id='bog4'></input><label for='bog5'>Bodega5</label><input type='text' name='bog5' value='' id='bog5'></input><div/><div/><div/><div><legend style='font-weight: bold;'>Catalogo de articulos</legend><div class='busq'><div><label for='cnomp'>Buscar</label><input type='text' name='busa' value='' id='busa'></input></div></div><div class='grida'><div id='gridDiva'></div></div></div></form>",      
        style: "width: 1000px;"
    });

    var estade = new dijit.form.TextBox({
            name: "estade",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "estade");

    var ivani = new dijit.form.TextBox({
            name: "ivani",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "ivani");

    var desto = new dijit.form.TextBox({
            name: "desto",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "desto");

    var ivac = new dijit.form.TextBox({
            name: "ivac",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "ivac");

    var prec1 = new dijit.form.TextBox({
            name: "prec1",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "prec1");

    var prec2 = new dijit.form.TextBox({
            name: "prec2",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "prec2");

    var prec3 = new dijit.form.TextBox({
            name: "prec3",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "prec3");

    var bog1 = new dijit.form.TextBox({
            name: "bog1",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "bog1");

    var bog2 = new dijit.form.TextBox({
            name: "bog2",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "bog2");

    var bog3 = new dijit.form.TextBox({
            name: "bog3",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "bog3");

    var bog4 = new dijit.form.TextBox({
            name: "bog4",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "bog4");

    var bog5 = new dijit.form.TextBox({
            name: "bog5",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 4em;"
        }, "bog5");

    var button = new Button({
        onClick: function () {},
        style: "width: 6em;"
    },"salir").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 8em;"
	},"selection").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 7em;"
	},"imprimir").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 6em;"
	},"precios").startup();

	var button = new Button({
		onClick: function () {nuevoArtic.nuevoArti.show();},
		style: "width: 6em;"
	},"nuevo").startup();

	var button = new Button({
		onClick: function () {
             var items = grida.selection.getSelected();
                    if(items.length) {
                        /* Iterate through the list of selected items.
                        The current item is available in the variable
                        'selectedItem' within the following function: */
                        array.forEach(items, function(selectedItem){
                            if(selectedItem !== null){
                                /* Iterate through the list of attributes of each item.
                                The current attribute is available in the variable
                                'attribute' within the following function: */
                                array.forEach(storecx.getAttributes(selectedItem), function(attribute){
                                    /* Get the value of the current attribute:*/
                                    var value = storecx.getValues(selectedItem, attribute);
                                    /* Now, you can do something with this attribute/value pair.
                                    Our short example shows the attribute together
                                    with the value in an alert box, but we are sure, that
                                    you'll find a more ambitious usage in your own code:*/
                                    if(attribute=='nameh'){
                                        codiar.setValue(value);
                                        Articulos.show();
                                    }
                                    
                                }); /* end forEach */
                            } /* end if */
                        }); /* end forEach */
                    } /* end if */
            
        },
		style: "width: 6em;"
	},"editar").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 6em;"
	},"partes").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 7em;"
	},"NomTxt").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 6em;"
	},"borrar").startup();

	var button = new Button({
		onClick: function () {},
		style: "width: 6em;"
	},"stock").startup();

    var busa = new dijit.form.TextBox({
            name: "busa",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 50em;"
        }, "busa");

    var datax = {
      items: []
    }

    var storecx = null;


    var grida = new DataGrid({
        id: 'grida',
        store: storecx,
        structure: [{name:"Codigo", field:"nameh", width: "200px",editable:false},{name:"Nombre", field:"nameh1", width: "200px",editable:true},{name:"Codigo pos", field:"Nameh2", width: "200px",editable:true},{name:"Tipo/Linea", field:"nameh3", width: "200px",editable:true},{name:"Precio A", field:"nameh4", width: "200px",editable:true},{name:"Precio B", field:"nameh5", width: "200px",editable:false},{name:"Precio C", field:"nameh6", width: "200px",editable:false},{name:"Iva", field:"nameh7", width: "200px",editable:false},{name:"Descuento", field:"nameh8", width: "200px",editable:false},{name:"Costo", field:"nameh9", width: "200px",editable:false},{name:"Cuenta", field:"nameh10", width: "200px",editable:false}]
    }); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};---,type: dojox.grid.cells.TextBox, onKeyUp: function (evt) {totar.setValue(canti.get("value")*this.get("value")); updateAllh();}

    grida.placeAt("gridDiva");


    Articulos = new Dialog({
        title: "Articulos",
        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artic1'><label for='noma'>Nombre</label><input type='text' name='nomar' value='' id='nomar'></input></div><div class='artic'><label for='codia'>Codigo</label><input type='text' name='codiar' value='' id='codiar'></input></div><div class='artic5'><label for='nomplul'>Nombre plu</label><input type='text' name='nomplu' value='' id='nomplu'></input></div><div class='artic4'><label for='codplu'>Codigo plu</label><input type='text' name='codplu' value='' id='codplu'></input></div><div class='artic3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinv' value='' id='tipinv'></input></div><div class='artic2'><label for='ticod'>Tipo de codigo</label><input type='text' name='ticodr' value='' id='ticodr'></input></div><div class='artic8'><label for='eximax'>Existencia max</label><input type='text' name='eximax' value='' id='eximax'></input></div><div class='artic7'><label for='locati'>Localizacion</label><input type='text' name='locati' value='' id='locati'></input></div><div class='artic6'><label for='grolin'>Grupo/Linea</label><input type='text' name='grolin' value='' id='grolin'></input></div><div class='artic11'><label for='eximin'>Existencia Min</label><input type='text' name='eximin' value='' id='eximin'></input></div><div class='artic10'><label for='depen'>Dependencia</label><input type='text' name='depen' value='' id='depen'></input></div><div class='artic9'><label for='refeart'>Referencia</label><input type='text' name='refeart' value='' id='refeart'></input></div><div class='artic14'><label for='ulticos'>Ultimo Costo</label><input type='text' name='ulticos' value='' id='ulticos'></input></div><div class='artic13'><label for='ctainv'>Cta Inventarios</label><input type='text' name='ctainv' value='' id='ctainv'></input></div><div class='artic12'><label for='desapi'>Descripcion Apida</label><input type='text' name='desapi' value='' id='desapi'></input></div><div class='artic16'><label for='flete'>Fletes</label><input type='text' name='flete' value='' id='flete'></input></div><div class='artic17'><label for='ctaing'>Cta ingresos</label><input type='text' name='ctaing' value='' id='ctaing'></input></div><div class='artic15'><label for='stei'>Estado</label><input type='text' name='stei' value='' id='stei'></input></div><div class='artic20'><label for='costpre'>Costo Base Pre</label><input type='text' name='costpre' value='' id='costpre'></input></div><div class='artic19'><label for='cosve'>Costo Ventas</label><input type='text' name='cosve' value='' id='cosve'></input></div><div class='artic18'><label for='ivave'>Iva ventas</label><input type='text' name='ivave' value='' id='ivave'></input></div><div class='artic23'><label for='preve1'>Precio Venta 1</label><input type='text' name='preve1' value='' id='preve1'></input></div><div class='artic22'><label for='interCont'>Interface Contable</label><input type='text' name='interCont' value='' id='interCont'></input></div><div class='artic21'><label for='tiart'>Tipo de Articulo</label><input type='text' name='tiart' value='' id='tiart'></input></div><div class='artic25'><label for='prevent'>Precio venta 2</label><input type='text' name='prevent' value='' id='prevent'></input></div><div class='artic24'><label for='tipem'>Tipo de Empaque</label><input type='text' name='tipem' value='' id='tipem'></input></div><div class='artic27'><label for='prevent3'>Precio venta 3</label><input type='text' name='prevent3' value='' id='prevent3'></input></div><div class='artic26'><label for='unixemp'>Unidades por empaque</label><input type='text' name='unixemp' value='' id='unixemp'></input></div><div class='artic28'><label for='poriva'>% iva</label><input type='text' name='poriva' value='' id='poriva'></input></div><div class='artic29'><label for='pordefa'>% Dto Facturacion</label><input type='text' name='pordefa' value='' id='pordefa'></input></div><div class='artic30'><label for='fechae'>Fecha Entrada</label><input type='text' name='fechae' value='' id='fechae'></input></div><div class='artic31'><label for='lote'>Lote</label><input type='text' name='lote' value='' id='lote'></input></div><div class='artic32'><button id='aceptaar' type='button'>[Ent]-Aceptar</button></div><div class='artic33'><button id='escapar' type='button'>[Esc]-Salir</button></div></form>",   
        style: "width: 1000px;"
    });

    var statee = new Memory({
           data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
       });
    
    var estadex = new dijit.form.ComboBox({
            name: "stei",
            value: "",
            store: statee,
            searchAttr: "name",
            style: "width: 2em;"
        }, "stei");
    

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
     
        var stateStore = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
        });

      var tipinv = new dijit.form.ComboBox({
            name: "tipinv",
            value: "",
            store: stateStore,
            searchAttr: "name",
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

       var state1 = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
        });

      var desapi = new dijit.form.ComboBox({
            name: "desapi",
            value: "",
            store: state1,
            searchAttr: "name",
            style: "width: 10em;"
        }, "desapi");

      var statev = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var ctainv = new dijit.form.ComboBox({
            name: "ctainv",
            value: "",
            store: statev,
            searchAttr: "name",
            style: "width: 8em;"
        }, "ctainv");

      var ulticos = new dijit.form.TextBox({
            name: "ulticos",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "ulticos"); 

      var flete = new dijit.form.TextBox({
            name: "flete",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "flete");

      var stateg = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var ctaing = new dijit.form.ComboBox({
            name: "ctaing",
            value: "",
            store: statev,
            searchAttr: "name",
            style: "width: 8em;"
        }, "ctaing");

      var costpre = new dijit.form.TextBox({
            name: "costpre",
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
        }, "costpre");

       var statee = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var cosve = new dijit.form.ComboBox({
            name: "cosve",
            value: "",
            store: statee,
            searchAttr: "name",
            style: "width: 8em;"
        }, "cosve");

      var statev = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var ivave = new dijit.form.ComboBox({
            name: "ivave",
            value: "",
            store: statev,
            searchAttr: "name",
            style: "width: 2em;"
        }, "ivave");

      var stater = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var tiart = new dijit.form.ComboBox({
            name: "tiart",
            value: "",
            store: stater,
            searchAttr: "name",
            style: "width: 2em;"
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

      var statem = new Memory({
            data: [
                {name:"1", id:"1"},
                {name:"2", id:"2"},
                {name:"3", id:"3"}
            ]
      });

      var tipem = new dijit.form.ComboBox({
            name: "tipem",
            value: "",
            store: statem,
            searchAttr: "name",
            style: "width: 4em;"
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

       var nuevoArtic = new nuevoArticulo();
       var gpoArticuloc = new gpoArticulo();
     /*
        No es facil JEHOVA uno dejar de sentirse mal, es lamentable y hasta desesperante, padre dame fortalezas para seguir adelante
     */


 
});