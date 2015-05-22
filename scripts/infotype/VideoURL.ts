/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
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
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
	            url : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._url = url;
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

		var v : VideoURL = new VideoURL(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._url);

		return v;
	}
}
