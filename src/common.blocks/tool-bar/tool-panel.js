function ToolPanel(){
	let $buttonList = $('.tool-bar__button-list');

	this.init = function (){
		let $tool = $('.tool-panel');
		$tool.draggable();
		$tool.resizable({
			minHeight: 70,
			minWidth: 70
		});
	};

	this.addButton = function ($icon) {
		let $button = createButton();
		$button.append($icon);
		$buttonList.append($button);
	};

	function createButton() {
		return $(`<button type="button" class="btn btn-secondary mt-1 ml-1"/>`);
	}
}

module.exports = ToolPanel;