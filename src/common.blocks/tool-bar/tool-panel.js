function ToolPanel() {
    let $buttonList = $('.tool-bar__button-list');

    this.init = function () {
        let $tool = $('.tool-bar');
        $tool.draggable();
        $tool.resizable({
            minHeight: 70,
            minWidth: 70
        });
    };

	this.addButton = function ($icon, onClick) {
		let $button = createButton();
		$button.append($icon);
		$button.on('click', onClick);
		$buttonList.append($button);
		return $button;
	};

	function createButton() {
		return $(`<button type="button" class="btn tool-bar__btn_shadow btn-secondary btn-sm mt-1 ml-1"/>`);
	}
}

module.exports = ToolPanel;