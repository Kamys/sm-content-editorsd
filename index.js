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
require("material-design-icons/iconfont/material-icons.css");

let listButton = [
    {
        name: 'bold',
        click: () => execCommand('bold'),
        iconHTML: '<i class="fas fa-bold fa-fw"></i>'
    },
    {
        name: 'left',
        click: () => execCommand('JustifyLeft'),
        iconHTML: '<i class="fas fa-align-left fa-fw"></i>'
    },
    {
        name: 'center',
        click: () => execCommand('JustifyCenter'),
        iconHTML: '<i class="fas fa-align-center fa-fw"></i>'
    },
    {
        name: 'right',
        click: () => execCommand('JustifyRight'),
        iconHTML: '<i class="fas fa-align-right fa-fw"></i>'
    },
    {
        name: 'list-ul',
        click: () => execCommand('InsertUnorderedList'),
        iconHTML: '<i class="fas fa-list-ul fa-fw"></i>'
    },
    {
        name: 'list-ol',
        click: () => execCommand('insertOrderedList'),
        iconHTML: '<i class="fas fa-list-ol fa-fw"></i>'
    },
    {
        name: 'italic',
        click: () => execCommand('Italic'),
        iconHTML: '<i class="fas fa-italic fa-fw"></i>'
    },
    {
        name: 'format_clear',
        click: () => execCommand('RemoveFormat'),
        iconHTML: '<i class="fas fa-trash-alt fa-fw"></i>'
    },
    {
        name: 'format_underlined',
        click: () => execCommand('Underline'),
        iconHTML: '<i class="fas fa-underline fa-fw"></i>'
    },
    {
        name: 'unlink',
        click: () => execCommand('Unlink'),
        iconHTML: '<i class="fas fa-unlink fa-fw"></i>'
    }
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
