require(['dojo/_base/declare','my/nuevoArticulo','my/gpoArticulo','my/carticulo','my/editArticulo','my/Ecuentas','dijit/form/DateTextBox', 'dojo/date/locale','dojo/_base/array','dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dojox/data/AndOrWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom','dojo/on','dijit/form/ValidationTextBox',"dojo/keys",'dijit/layout/ContentPane','dojo/domReady!'],
function(declare, nuevoArticulo, gpoArticulo, carticulo, editArticulo, Ecuentas,DateTextBox, locale, array,json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, AndOrWriteStore, Button, xhr,Memory, ComboBox, dom, on, ValidationTextBox,keys,ContentPane,domReady) {

    var nuevoArtic = new nuevoArticulo();
    var gpoArticuloc = new gpoArticulo(); 
    var articlev = new editArticulo();
    var ecuentas = new Ecuentas(ContentPane);
    var carticulow = new carticulo(nuevoArtic,articlev,ecuentas,array,AndOrWriteStore,keys,ContentPane,on,dom);
        
    /*   
    */

    articlev.llenarTablac(carticulow);
    nuevoArtic.llenarTablac(carticulow);
    nuevoArtic.llenardetalle(articlev);


    var pMenuBar = new MenuBar({});
    var pSubMenu = new DropDownMenu({});

    pSubMenu.addChild(new MenuItem({
        label: "Catalogo de articulos",
        onClick:function(){ carticulow.llenarTabla();carticulow.catart.show();}
    }));

    pSubMenu.addChild(new MenuItem({
        label: "Actualizacion de articulos",
        onClick:function(){articlev.catart.show();}
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

     /*
        No es facil JEHOVA uno dejar de sentirse mal, es lamentable y hasta desesperante, padre dame fortalezas para seguir adelante
     */

});