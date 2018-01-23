'use strict';

window.$ = window.jQuery = require("jquery");
require("jquery-ui-bundle/jquery-ui.min");
require("bootstrap/dist/js/bootstrap.bundle.min");
let ToolPanel = require("./src/common.blocks/tool-bar/tool-bar");
let CssHelper = require("./src/help/CssHelper");


/* Style */
require("bootstrap/dist/css/bootstrap.min.css");
require("jquery-ui-bundle/jquery-ui.css");
require("./src/common.blocks/tool-bar/tool-bar.css");
require("./node_modules/font-awesome/css/font-awesome.min.css");
require("./node_modules/font-awesome/fonts/fontawesome-webfont.svg");

let toolBar = new ToolPanel();
toolBar.init();
let $blobe = $(`<i class="fa fa-bold fa-fw"></i>`);
toolBar.addButton($blobe);
toolBar.addButton($(`<i class="fa fa-align-center fa-fw"></i>`));
toolBar.addButton($(`<i class="fa fa-align-left fa-fw"></i>`));
toolBar.addButton($(`<i class="fa fa-align-right fa-fw"></i>`));

//CssHelper.extractCSSParameters();