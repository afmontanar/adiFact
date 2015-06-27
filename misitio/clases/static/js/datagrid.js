require(['dojo/_base/declare','my/nuevoArticulo','my/gpoArticulo','my/carticulo','my/editArticulo','dijit/form/DateTextBox', 'dojo/date/locale','dojo/_base/array','dojo/_base/json','dijit/DropDownMenu','dijit/MenuItem','dijit/Menu','dijit/PopupMenuBarItem','dijit/MenuBar','dijit/Dialog','dojo/store/JsonRest','dojo/data/ObjectStore','dojo/_base/lang', 'dojox/grid/DataGrid', 'dojo/data/ItemFileWriteStore', 'dijit/form/Button',"dojo/_base/xhr", "dojo/store/Memory", "dijit/form/ComboBox",'dojo/dom', 'dojo/domReady!','dijit/form/ValidationTextBox'],
function(declare, nuevoArticulo, gpoArticulo, carticulo, editArticulo, DateTextBox, locale, array,json,DropDownMenu,MenuItem,Menu,PopupMenuBarItem,MenuBar,Dialog,JsonRest,ObjectStore,lang, DataGrid, ItemFileWriteStore, Button, xhr,Memory, ComboBox, dom, domReady, ValidationTextBox) {

    var nuevoArtic = new nuevoArticulo();
    var gpoArticuloc = new gpoArticulo(); 
    var articlev = new editArticulo();
    var carticulow = new carticulo(nuevoArtic,articlev,array);
    
    /*
    
    */

    nuevoArtic.llenarTablac(carticulow);



    var pMenuBar = new MenuBar({});
    var pSubMenu = new DropDownMenu({});

    pSubMenu.addChild(new MenuItem({
        label: "Catalogo de articulos",
        onClick:function(){carticulow.llenarTabla();carticulow.catart.show();}
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