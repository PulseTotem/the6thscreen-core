/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class PictureURL extends Info {

	/**
	 * PictureURL's url.
	 *
	 * @property _url
	 * @type string
	 * @private
	 */
	private _url : string;

	/**
	 * PictureURL's width.
	 *
	 * @property _width
	 * @type number
	 * @private
	 */
	private _width : number;

	/**
	 * PictureURL's height.
	 *
	 * @property _height
	 * @type number
	 * @private
	 */
	private _height : number;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				url : string = null, width : number = 0, height : number = 0) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._url = url;
		this._width = width;
		this._height = height;
	}

	/**
	 * Returns PictureURL's url.
	 *
	 * @method getURL
	 * @returns {string} The PictureURL's url.
	 */
	getURL() : string {
		return this._url;
	}

	/**
	 * Set the PictureURL's url.
	 *
	 * @method setURL
	 * @param {string} message - The new PictureURL's url.
	 */
	setURL(url : string) {
		this._url = url;
	}

	/**
	 * Returns PictureURL's width.
	 *
	 * @method getWidth
	 * @returns {number} The PictureURL's width.
	 */
	getWidth() : number {
		return this._width;
	}

	/**
	 * Set the PictureURL's width.
	 *
	 * @method setWidth
	 * @param {number} width - The new PictureURL's width.
	 */
	setWidth(width : number) {
		this._width = width;
	}

	/**
	 * Returns PictureURL's height.
	 *
	 * @method getHeight
	 * @returns {number} The PictureURL's height.
	 */
	getHeight() : number {
		return this._height;
	}

	/**
	 * Set the PictureURL's height.
	 *
	 * @method setHeight
	 * @param {number} height - The new PictureURL's height.
	 */
	setHeight(height : number) {
		this._height = height;
	}

	/**
	 * Return a PictureURL instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {PictureURL} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : PictureURL {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A PictureURL object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A PictureURL object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A PictureURL object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A PictureURL object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A PictureURL object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A PictureURL object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._url) == "undefined") {
			throw new InfoException("A PictureURL object should have an url.");
		}

		if(typeof(jsonObject._width) == "undefined") {
			throw new InfoException("A PictureURL object should have a width.");
		}

		if(typeof(jsonObject._height) == "undefined") {
			throw new InfoException("A PictureURL object should have a height.");
		}

		var p : PictureURL = new PictureURL(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._url, jsonObject._width, jsonObject._height);

		return p;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : PictureURL) : boolean {
		return this.getHeight() == info.getHeight() &&
				this.getURL() == info.getURL() &&
				this.getWidth() == info.getWidth();
	}
}