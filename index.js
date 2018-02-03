'use strict';

window.$ = window.jQuery = require("jquery");
require("jquery-ui-bundle/jquery-ui.min");
require("bootstrap/dist/js/bootstrap.bundle.min");
let ToolPanel = require("./src/common.blocks/tool-bar/tool-panel");
let CssHelper = require("./src/help/CssHelper");


/* Style */
require("bootstrap/dist/css/bootstrap.min.css");
require("jquery-ui-bundle/jquery-ui.css");
require("./src/common.blocks/tool-bar/tool-panel.css");
require("./node_modules/font-awesome/css/font-awesome.min.css");
require("./node_modules/font-awesome/fonts/fontawesome-webfont.svg");

let listButton = [
    {
        name: 'bold',
        click: () => execCommand('bold'),
        iconHTML: '<i class="fa fa-bold fa-fw"></i>'
    },
    {
        name: 'left',
        click: () => execCommand('JustifyLeft'),
        iconHTML: '<i class="fa fa-align-left fa-fw"></i>'
    },
    {
        name: 'center',
        click: () => execCommand('JustifyCenter'),
        iconHTML: '<i class="fa fa-align-center fa-fw"></i>'
    },
    {
        name: 'right',
        click: () => execCommand('JustifyRight'),
        iconHTML: '<i class="fa fa-align-right fa-fw"></i>'
    },
];

function execCommand(command) {
    iframe.contentWindow.document.execCommand(command, false, null)
}

let iframe = $('#draggable').get(0);
iframe.contentWindow.document.designMode = 'On';

let toolBar = new ToolPanel();
toolBar.init();
listButton.forEach(btnInfo => {
    toolBar.addButton($(btnInfo.iconHTML), btnInfo.click)
});
