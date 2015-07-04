/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./VideoType.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class VideoURL extends Info {

	/**
	 * VideoURL's url.
	 *
	 * @property _url
	 * @type string
	 * @private
	 */
	private _url : string;

	/**
	 * VdeoURL's type
	 *
	 * @property _type
	 * @type VideoType
	 * @private
	 */
	private _type : VideoType;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
	            url : string = null, type : VideoType = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._url = url;
		this._type = type;
	}

	/**
	 * Returns VideoURL's url.
	 *
	 * @method getURL
	 * @returns {string} The VideoURL's url.
	 */
	getURL() : string {
		return this._url;
	}

	/**
	 * Set the VideoURL's url.
	 *
	 * @method setURL
	 * @param {string} message - The new VideoURL's url.
	 */
	setURL(url : string) {
		this._url = url;
	}

	/**
	 * Returns VideoURL's type
	 *
	 * @method getType
	 * @returns {VideoType} The type of the video
	 */
	getType() : VideoType {
		return this._type;
	}

	/**
	 * Set the VideoURL's type
	 * @param {VideoType} type  - The new VideoURL's type
	 */
	setType(type : VideoType) {
		this._type = type;
	}

	/**
	 * Return a VideoURL instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {VideoURL} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : VideoURL {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A VideoURL object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A VideoURL object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A VideoURL object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A VideoURL object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A VideoURL object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A VideoURL object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._url) == "undefined") {
			throw new InfoException("A VideoURL object should have an url.");
		}
		if(typeof(jsonObject._type) == "undefined") {
			throw new InfoException("A VideoURL object should have a type.");
		}

		var v : VideoURL = new VideoURL(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._url, jsonObject._type);

		return v;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : VideoURL) : boolean {
		return this.getType() == info.getType() &&
				this.getURL() == info.getURL();
	}
}
