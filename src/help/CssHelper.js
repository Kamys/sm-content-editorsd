function CssHelper() {
	/**
	 *
	 * @return {string} CSS parameters in JSON
	 */
	this.cssConvertInJson = function (element) {
		const o = getComputedStyle(element);
		let json = $.map(o, function (key) {
			let value = o.getPropertyValue(key).replace(/"/g, '\\"');
			return `"${key}":"${value}"`;
		}).join(',');
		return `{${json}}`;
	};

	/**
	 *
	 * @param element HTML element.
	 * @returns {object} CssObject use for comfortable edit CSS.
	 */
	this.extractCSSParameters = function (element) {
		return JSON.parse(this.cssConvertInJson(element));
	}
}

module.exports = new CssHelper();