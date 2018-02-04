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
        iconHTML: '<i class="material-icons mt-1">format_bold</i>'
    },
    {
        name: 'left',
        click: () => execCommand('JustifyLeft'),
        iconHTML: '<i class="material-icons">format_align_left</i>'
    },
    {
        name: 'center',
        click: () => execCommand('JustifyCenter'),
        iconHTML: '<i class="material-icons">format_align_center</i>'
    },
    {
        name: 'right',
        click: () => execCommand('JustifyRight'),
        iconHTML: '<i class="material-icons">format_align_right</i>'
    },
    {
        name: 'list-ul',
        click: () => execCommand('InsertUnorderedList'),
        iconHTML: '<i class="material-icons">format_list_bulleted</i>'
    },
    {
        name: 'list-ol',
        click: () => execCommand('insertOrderedList'),
        iconHTML: '<i class="material-icons">format_list_numbered</i>'
    },
    {
        name: 'italic',
        click: () => execCommand('Italic'),
        iconHTML: '<i class="material-icons">format_italic</i>'
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
