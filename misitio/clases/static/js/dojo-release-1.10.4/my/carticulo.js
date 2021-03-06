define(["dojo/store/Memory","dojo/_base/declare",'dijit/Dialog', 'dijit/form/TextBox','dijit/form/Button','dojox/grid/DataGrid','dojo/_base/xhr'], function(Memory,declare,Dialog,Button,DataGrid,xhr){
    
    return declare(null,{ 
    constructor: function(nuevoArtic,articlev,ecuentas,array,AndOrWriteStore,keys,ContentPane,on,dom){
	    		
	    this.catart = new Dialog({//<div id='toolbar1' data-dojo-type='dijit/Toolbar' ><div data-dojo-type='dijit/form/Button' id='toolbar1.cut' data-dojo-props=\" showLabel:true\">[F2-Nuevo]</div ><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.copy' data-dojo-props=\" showLabel:true\">[F3-Editar]</div ><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.paste' data-dojo-props=\" showLabel:true\">[F5-Partes]</div ><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.bold'  data-dojo-props=\" showLabel:true\">[F6-NomTxt]</div><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.borrar'  data-dojo-props=\" showLabel:true\">[F7]-Borrar</div><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.stock'  data-dojo-props=\" showLabel:true\">[F9]-Stock</div><span data-dojo-type='dijit/ToolbarSeparator'></span><div data-dojo-type='dijit/form/Button' id='toolbar1.precio'  data-dojo-props=\" showLabel:true\">[F8]-Precios</div><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.imprimi'  data-dojo-props=\" showLabel:true\">[F10]-Imprimir</div><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.selec'  data-dojo-props=\" showLabel:true\">[Ent]-Seleccion</div><span data-dojo-type='dijit/ToolbarSeparator'></span ><div data-dojo-type='dijit/form/Button' id='toolbar1.salic'  data-dojo-props=\" showLabel:true\">[Esc]-Salir</div></div><div id='toolbar'></div>
	        title: "Catalogo de articulos",//<div class='seleccion'><button id='nuevo' type='button'>[F2]-Nuevo</button><button id='editar' type='button'>[F3]-Editar</button><button id='partes' type='button'>[F5]-Partes</button><button id='NomTxt' type='button'>[F6]-NomTxt</button><button id='borrar' type='button'>[F7]-Borrar</button><button id='stock' type='button'>[F9]-Stock</button><button id='precios' type='button'>[F8]-Precios</button><button id='imprimir' type='button'>[F10]-imprimir</button><div/><div class='seleccion1'><button id='selection' type='button'>[Ent]-Seleccion</button><button id='salirc' type='button'>[Esc]-Salir</button><div/> 
	        content: "<form id='traverseForm'><div><legend style='font-weight: bold;'>Seleccion</legend><div id='targetIE'></div><div id='targetID'></div><div/><div/><div><legend style='font-weight: bold;'>Catalogo de articulos</legend><div class='busq'><div><label for='cnomp'>Buscar</label><input type='text' name='busa' value='' id='busa'></input></div></div><div class='grida'><div id='gridDiva'></div></div></div></form>",      
	        style: "width: 1000px;"
    	});
		
		var panelbus = new ContentPane({
		      //content:"<div class='bjh'><label for='estade'>Estado</label><input type='text' name='estade' value='' id='estade'></input><label for='ivani'>Ivaln</label><input type='text' name='ivani' value='' id='ivani'></input><label for='desto'>%Dto</label><input type='text' name='desto' value='' id='desto'></input><label for='ivac'>%Iva</label><input type='text' name='ivac' value='' id='ivac'></input><label for='prec1'>Precio1</label><input type='text' name='prec1' value='' id='prec1'></input><label for='prec2'>Precio2</label><input type='text' name='prec2' value='' id='prec2'></input><label for='prec3'>Precio3</label><input type='text' name='prec3' value='' id='prec3'></input></div><div class ='bjh1'><label for='bog1'>Bodega1</label><input type='text' name='bog1' value='' id='bog1'></input><label for='bog2'>Bodega2</label><input type='text' name='bog2' value='' id='bog2'></input><label for='bog3'>Bodega3</label><input type='text' name='bog3' value='' id='bog3'></input><label for='bog4'>Bodega4</label><input type='text' name='bog4' value='' id='bog4'></input><label for='bog5'>Bodega5</label><input type='text' name='bog5' value='' id='bog5'></input><div/>",
		      content:"<div class='bjh'><input type='text' name='estade' value='' id='estade'></input><input type='text' name='ivani' value='' id='ivani'></input><input type='text' name='desto' value='' id='desto'></input><input type='text' name='ivac' value='' id='ivac'></input><input type='text' name='prec1' value='' id='prec1'></input><input type='text' name='prec2' value='' id='prec2'></input><input type='text' name='prec3' value='' id='prec3'></input><input type='text' name='bog1' value='' id='bog1'></input><input type='text' name='bog2' value='' id='bog2'></input><input type='text' name='bog3' value='' id='bog3'></input><input type='text' name='bog4' value='' id='bog4'></input><input type='text' name='bog5' value='' id='bog5'></input></div><div class ='bjh1'><div/>",
		      style:"width: 950px;height:60px; background-color: #d0e9fc;"
	    }, "targetID").startup();

		var panelbotton = new ContentPane({
		      content:"<div class='seleccion'><button id='nuevo' type='button'>[F2]-Nuevo</button><button id='editar' type='button'>[F3]-Editar</button><button id='partes' type='button'>[F5]-Partes</button><button id='NomTxt' type='button'>[F6]-NomTxt</button><button id='borrar' type='button'>[F7]-Borrar</button><button id='stock' type='button'>[F9]-Stock</button><button id='precios' type='button'>[F8]-Precios</button><button id='imprimir' type='button'>[F10]-imprimir</button><div/><div class='seleccion1'><button id='selection' type='button'>[Ent]-Seleccion</button><button id='salirc' type='button'>[Esc]-Salir</button><div/>",
		      style:"width: 950px;height:70px; background-color: #efefef;border: 1px solid #b5bcc7;"
	    }, "targetIE").startup();

		on(dom.byId("traverseForm"), "keypress", function(evt){
		    if(evt.charCode==112){
		    	nuevoArtic.nuevoArti.show();
		    }
  		});

		var storecx = null;

	    var grida = new dojox.grid.DataGrid({
	        id: 'grida',
	        store: storecx,
	        structure: [{name:"Codigo", field:"nameh", width: "200px",editable:false},{name:"Nombre", field:"nameh1", width: "200px",editable:true},{name:"Codigo pos", field:"nameh2", width: "200px",editable:true},{name:"Tipo/Linea", field:"nameh3", width: "200px",editable:true},{name:"Precio A", field:"nameh4", width: "200px",editable:true},{name:"Precio B", field:"nameh5", width: "200px",editable:false},{name:"Precio C", field:"nameh6", width: "200px",editable:false},{name:"Iva", field:"nameh7", width: "200px",editable:false},{name:"Descuento", field:"nameh8", width: "200px",editable:false},{name:"Costo", field:"nameh9", width: "200px",editable:false},{name:"Cuenta", field:"nameh10", width: "200px",editable:false}],
	    	queryOptions: {ignoreCase: true}
	    }); // {"Cantidad", "Marca", "Referencia", "Detalle", "Rueda", "Valor unitario", "Valor total", "Valor con descuento"};---,type: dojox.grid.cells.TextBox, onKeyUp: function (evt) {totar.setValue(canti.get("value")*this.get("value")); updateAllh();}

	    grida.placeAt("gridDiva");

	    this.llenarTabla = function(){
                dojo.xhr.get({
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
                            
                            storecx = new AndOrWriteStore({data: dataxc}); 
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

        var llenaInt = this.llenarTabla ;

        //</label><input type='text' name='bog4' value='' id='bog4'></input><label for='bog5'>Bodega5</label><input type='text' name='bog5' value='' id='bog5'></input><div/>",
		     
		var estade = new dijit.form.TextBox({
	            name: "estade",
	            value: "" /* no or empty value! */,
	            placeHolder: "Estado",
	            style: "width: 6em;"
	        }, "estade");

	    var ivani = new dijit.form.TextBox({
	            name: "ivani",
	            value: "" /* no or empty value! */,
	            placeHolder: "Ivaln",
	            style: "width: 6em;"
	        }, "ivani");

	    var desto = new dijit.form.TextBox({
	            name: "desto",
	            value: "" /* no or empty value! */,
	            placeHolder: "%Dto",
	            style: "width: 6em;"
	        }, "desto");

	    var ivac = new dijit.form.TextBox({
	            name: "ivac",
	            value: "" /* no or empty value! */,
	            placeHolder: "%Iva",
	            style: "width: 6em;"
	        }, "ivac");

	    var prec1 = new dijit.form.TextBox({
	            name: "prec1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio1",
	            style: "width: 6em;"
	        }, "prec1");

	    var prec2 = new dijit.form.TextBox({
	            name: "Precio2",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio2",
	            style: "width: 6em;"
	        }, "prec2");

	    var prec3 = new dijit.form.TextBox({
	            name: "Precio3",
	            value: "" /* no or empty value! */,
	            placeHolder: "Precio3",
	            style: "width: 6em;"
	        }, "prec3");

	    var bog1 = new dijit.form.TextBox({
	            name: "bog1",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega1",
	            style: "width: 6em;"
	        }, "bog1");

	    var bog2 = new dijit.form.TextBox({
	            name: "bog2",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega2",
	            style: "width: 6em;"
	        }, "bog2");

	    var bog3 = new dijit.form.TextBox({
	            name: "bog3",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega3",
	            style: "width: 6em;"
	        }, "bog3");

	    var bog4 = new dijit.form.TextBox({
	            name: "bog4",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega4",
	            style: "width: 6em;"
	        }, "bog4");

	    var bog5 = new dijit.form.TextBox({
	            name: "bog5",
	            value: "" /* no or empty value! */,
	            placeHolder: "Bodega5",
	            style: "width: 6em;"
	        }, "bog5");

			var buttos = new dijit.form.Button({
		        onClick: function () {},
		        style: "width: 6em;"
		    },"salirc").startup();

			var buttse = new dijit.form.Button({
				onClick: function () {},
				style: "width: 8em;"
			},"selection");

			var buttmi = new dijit.form.Button({
				onClick: function () {},
				style: "width: 7em;"
			},"imprimir").startup();

			var buttpre = new dijit.form.Button({
				onClick: function () {},
				style: "width: 6em;"
			},"precios").startup();

			var button = new dijit.form.Button({
				onClick: function () {nuevoArtic.nuevoArti.show();},
				style: "width: 6em;"
			},"nuevo").startup();


	var button = new dijit.form.Button({
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
                                        articlev.consultarEditar(value);
                                        articlev.catart.show();
                                    }
                                    
                                }); /* end forEach */
                            } /* end if */
                        }); /* end forEach */
                    } /* end if */
            
        },
		style: "width: 6em;"
	},"editar");

	var button = new dijit.form.Button({
		onClick: function () {ecuentas.estadoCuenta.show();},
		style: "width: 6em;"
	},"partes").startup();

	var button = new dijit.form.Button({
		onClick: function () {},
		style: "width: 7em;"
	},"NomTxt").startup();

	var button = new dijit.form.Button({
		onClick: function () {},
		style: "width: 6em;"
	},"borrar").startup();

	var button = new dijit.form.Button({
		onClick: function () {},
		style: "width: 6em;"
	},"stock").startup();

    var busa = new dijit.form.TextBox({
            name: "busa",
            value: "" /* no or empty value! */,
            placeHolder: "",
            onKeyUp: function (evt) {
            	//{complexQuery: "Column_A: '*test*' OR Column_B: '*'"}     
                //grida.filter({nameh: "*"+this.get("value")+"*" , nameh1: "*"+this.get("value")+"*"},true); 
                grida.filter({complexQuery: ( "nameh: '*"+this.get('value')+"*' OR nameh1: '*"+this.get('value')+"*'")},true); 

                if(this.get("value")==""){
                    llenaInt();
                }   
                 /*{nameh: "*"+this.get("value")+"*"}|| 
                    totar.setValue(canti.get("value")*this.get("value"));
                    updateAllh();
                    int parseInt = Integer.parseInt(text);
                    int parseInt1 = Integer.parseInt(jTable1.getValueAt(jTable1.getSelectedRow(), 0).toString());
                    int resultado = parseInt * parseInt1;
                    jTable1.setValueAt(resultado + "", jTable1.getSelectedRow(), 6);
                 */
            },
            style: "width: 50em;"
        }, "busa");




	    }});

});