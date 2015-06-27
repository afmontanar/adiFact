define(["dojo/store/Memory","dojo/_base/declare",'dijit/Dialog', 'dijit/form/TextBox','dijit/form/Button','dojox/grid/DataGrid','dojo/_base/xhr'], function(Memory,declare,Dialog,Button,DataGrid,xhr){
    return declare(null,{ 
    constructor: function(){
	    this.catart = new Dialog({
	        title: "Articulos",
	        content: "<form><legend style='font-weight: bold;'>Datos del articulo</legend><div class='artic1'><label for='noma'>Nombre</label><input type='text' name='nomar' value='' id='nomar'></input></div><div class='artic'><label for='codiar'>Codigo</label><input  name='codiar' value='' id='codiar'></input></div><div class='artic5'><label for='nomplul'>Nombre plu</label><input type='text' name='nomplu' value='' id='nomplu'></input></div><div class='artic4'><label for='codplu'>Codigo plu</label><input type='text' name='codplu' value='' id='codplu'></input></div><div class='artic3'><label for='ticoinv'>Tipo de inventario</label><input type='text' name='tipinv' value='' id='tipinv'></input></div><div class='artic2'><label for='ticod'>Tipo de codigo</label><input type='text' name='ticodr' value='' id='ticodr'></input></div><div class='artic8'><label for='eximax'>Existencia max</label><input type='text' name='eximax' value='' id='eximax'></input></div><div class='artic7'><label for='locati'>Localizacion</label><input type='text' name='locati' value='' id='locati'></input></div><div class='artic6'><label for='grolin'>Grupo/Linea</label><input type='text' name='grolin' value='' id='grolin'></input></div><div class='artic11'><label for='eximin'>Existencia Min</label><input type='text' name='eximin' value='' id='eximin'></input></div><div class='artic10'><label for='depen'>Dependencia</label><input type='text' name='depen' value='' id='depen'></input></div><div class='artic9'><label for='refeart'>Referencia</label><input type='text' name='refeart' value='' id='refeart'></input></div><div class='artic14'><label for='ulticos'>Ultimo Costo</label><input type='text' name='ulticos' value='' id='ulticos'></input></div><div class='artic13'><label for='ctainv'>Cta Inventarios</label><input type='text' name='ctainv' value='' id='ctainv'></input></div><div class='artic12'><label for='desapi'>Descripcion Apida</label><input type='text' name='desapi' value='' id='desapi'></input></div><div class='artic16'><label for='flete'>Fletes</label><input type='text' name='flete' value='' id='flete'></input></div><div class='artic17'><label for='ctaing'>Cta ingresos</label><input type='text' name='ctaing' value='' id='ctaing'></input></div><div class='artic15'><label for='stei'>Estado</label><input type='text' name='stei' value='' id='stei'></input></div><div class='artic20'><label for='costpre'>Costo Base Pre</label><input type='text' name='costpre' value='' id='costpre'></input></div><div class='artic19'><label for='cosve'>Costo Ventas</label><input type='text' name='cosve' value='' id='cosve'></input></div><div class='artic18'><label for='ivave'>Iva ventas</label><input type='text' name='ivave' value='' id='ivave'></input></div><div class='artic23'><label for='preve1'>Precio Venta 1</label><input type='text' name='preve1' value='' id='preve1'></input></div><div class='artic22'><label for='interCont'>Interface Contable</label><input type='text' name='interCont' value='' id='interCont'></input></div><div class='artic21'><label for='tiart'>Tipo de Articulo</label><input type='text' name='tiart' value='' id='tiart'></input></div><div class='artic25'><label for='prevent'>Precio venta 2</label><input type='text' name='prevent' value='' id='prevent'></input></div><div class='artic24'><label for='tipem'>Tipo de Empaque</label><input type='text' name='tipem' value='' id='tipem'></input></div><div class='artic27'><label for='prevent3'>Precio venta 3</label><input type='text' name='prevent3' value='' id='prevent3'></input></div><div class='artic26'><label for='unixemp'>Unidades por empaque</label><input type='text' name='unixemp' value='' id='unixemp'></input></div><div class='artic28'><label for='poriva'>% iva</label><input type='text' name='poriva' value='' id='poriva'></input></div><div class='artic29'><label for='pordefa'>% Dto Facturacion</label><input type='text' name='pordefa' value='' id='pordefa'></input></div><div class='artic30'><label for='fechae'>Fecha Entrada</label><input type='text' name='fechae' value='' id='fechae'></input></div><div class='artic31'><label for='lote'>Lote</label><input type='text' name='lote' value='' id='lote'></input></div><div class='artic32'><button id='aceptaare' type='button'>[Ent]-Aceptar</button></div><div class='artic33'><button id='escapar' type='button'>[Esc]-Salir</button></div></form>",   
	        style: "width: 1000px; background-color:white;"
    	});

	 var codiar = new dijit.form.TextBox({
            name: "codiar",
            editable: false,
            value: "" /* no or empty value! */,
            placeHolder: "",
            style: "width: 10em;"
       }, "codiar");

    var escapar = new dijit.form.Button({
            onClick: function () {Articulos.hide();},
            style: "width: 6em;"
        },"escapar");

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


		       this.consultarEditar = function(valuec){
                dojo.xhr.get({
                   url: '/tener_Articulo/',
                        //type: 'get',

                        content: {
                            co: valuec    
                        },
                        // The success callback with result from server
                        load: function(newContent) {
                            var obj = JSON.parse(newContent);   
        
                            codiar.setValue(obj[0].Codigo);
                            nomar.setValue(obj[0].Nombre);
                            nomplu.setValue(obj[0].NombrePlu);
                            codplu.setValue(obj[0].CodigoPlu);
                            tipinv.setValue(obj[0].TipoInventario);
                            ticodr.setValue(obj[0].TipoCodigo);
                            eximax.setValue(obj[0].ExistenciaMax);
                            locati.setValue(obj[0].Localizacion);
                            grolin.setValue(obj[0].GrupoLinea);
                            eximin.setValue(obj[0].ExistenciaMin);
                            depen.setValue(obj[0].Dependencia);
                            refeart.setValue(obj[0].Referecia);
                            ulticos.setValue(obj[0].UltimoCosto);
                            ctainv.setValue(obj[0].CtaInventario);
                            desapi.setValue(obj[0].DescripcionApida);
                            flete.setValue(obj[0].Fletes);
                            ctaing.setValue(obj[0].CtaIngresos);
                            estadex.setValue(obj[0].Estado);
                            costpre.setValue(obj[0].CostoBase);
                            cosve.setValue(obj[0].CostoVenta);
                            ivave.setValue(obj[0].IvaVentas);
                            preve1.setValue(obj[0].PrecioVent1);
                            interCont.setValue(obj[0].InterfaceCon);
                            tiart.setValue(obj[0].Tipoarticulo);
                            prevent.setValue(obj[0].PrecioVent1);
                            tipem.setValue(obj[0].TipoEmpaque);
                            prevent3.setValue(obj[0].PrecioVent3);
                            unixemp.setValue(obj[0].UnidadeXempaque);
                            poriva.setValue(obj[0].PorIva);
                            pordefa.setValue(obj[0].DtoFacturacion);
                            fechae.setValue(obj[0].FechaEntrada);
                            lote.setValue(obj[0].Lote);
                        },
                        // The error handler
                        error: function() {
                            // Do nothing -- keep old content there
                        }
                });
            };

            var aceptaare = new dijit.form.Button({
            onClick: function () {
            if(codiar.value!=""){
              if(nomar.value!=""){
                if(ticodr.value!=""){
                    if(tipinv.value!=""){
                      if(codplu.value!=""){
                        if(nomplu.value!=""){
                             dojo.xhr.get({
                                // The URL of the request
                                //data:{'id':id},
                                url: '/guardar_articuloe/',
                                //type: 'get',

                                        
                                content: {
                                    co: codiar.value,
                                    no: nomar.value,
                                    tc: ticodr.value,
                                    ti: tipinv.value,
                                    cu: codplu.value,
                                    nu: nomplu.value,
                                    GrupoLinea: grolin.value,
                                    Localizacion : locati.value,
                                    ExistenciaMax : eximax.value,
                                    Referecia : refeart.value,
                                    Dependencia : depen.value,
                                    ExistenciaMin : eximin.value,
                                    DescripcionApida : desapi.value,
                                    CtaInventario : ctainv.value,
                                    UltimoCosto : ulticos.value,
                                    Estado : estadex.value,
                                    CtaIngresos : ctaing.value,
                                    Fletes : flete.value,
                                    IvaVentas : ivave.value,
                                    CostoVenta : cosve.value,
                                    CostoBase : costpre.value,
                                    Tipoarticulo : tiart.value,
                                    InterfaceCon : interCont.value,
                                    PrecioVent1 : preve1.value,
                                    TipoEmpaque : tipem.value,
                                    PrecioVent2 : prevent.value,
                                    UnidadeXempaque : unixemp.value,
                                    PrecioVent3 : prevent3.value,
                                    PorIva : poriva.value,
                                    DtoFacturacion : desto.value,
                                    FechaEntrada : fechae.value,
                                    Lote : lote.value
                                },
                                // The success callback with result from server
                                load: function(newContent) {

                                     if(newContent=='{"respuesta": "si"}'){
                                        alert("Actualizado correctamente");
                                           codiar.reset(),
                                           nomar.reset(),
                                           ticodr.reset(),
                                           tipinv.reset(),
                                           codplu.reset(),
                                           nomplu.reset(),
                                           grolin.reset(),
                                           locati.reset(),
                                           eximax.reset(),
                                           refeart.reset(),
                                           depen.reset(),
                                           eximin.reset(),
                                           desapi.reset(),
                                           ctainv.reset(),
                                           ulticos.reset(),
                                           estadex.reset(),
                                           ctaing.reset(),
                                           flete.reset(),
                                           ivave.reset(),
                                           cosve.reset(),
                                           costpre.reset(),
                                           tiart.reset(),
                                           interCont.reset(),
                                           preve1.reset(),
                                           tipem.reset(),
                                           prevent.reset(),
                                           unixemp.reset(),
                                           prevent3.reset(),
                                           poriva.reset(),
                                           desto.reset(),
                                           fechae.reset(),
                                           lote.reset()
                                         
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
            style: "width: 2em;"
        },"aceptaare");

	}});

});