/**
 * @author Simon Urli <simon@pulsetotem.fr>
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Picture.ts" />
/// <reference path="./VideoType.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class VideoURL extends Info {

	/**
	 * VideoURL's title.
	 *
	 * @property _title
	 * @type string
	 * @private
	 */
	private _title : string;

	/**
	 * VideoURL's description.
	 *
	 * @property _description
	 * @type string
	 * @private
	 */
	private _description : string;

	/**
	 * VideoURL's thumbnail.
	 *
	 * @property _thumbnail
	 * @type Picture
	 * @private
	 */
	private _thumbnail : Picture;
	
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
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				title : string = "", description : string = "", url : string = null, videoType : VideoType = null, thumbnail : Picture = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("VideoURL");

		this.setTitle(title);
		this.setDescription(description);
		this.setURL(url);
		this.setType(videoType);

		this.setThumbnail(thumbnail);
	}

	/**
	 * Returns VideoURL's title.
	 *
	 * @method getTitle
	 * @returns {string} The VideoURL's title.
	 */
	getTitle() : string {
		return this._title;
	}

	/**
	 * Set the VideoURL's title.
	 *
	 * @method setTitle
	 * @param {string} title - The new VideoURL's title.
	 */
	setTitle(title : string) {
		this._title = title;
	}

	/**
	 * Returns VideoURL's description.
	 *
	 * @method getDescription
	 * @returns {string} The VideoURL's description.
	 */
	getDescription() : string {
		return this._description;
	}

	/**
	 * Set the VideoURL's description.
	 *
	 * @method setDescription
	 * @param {string} title - The new VideoURL's description.
	 */
	setDescription(description : string) {
		this._description = description;
	}

	/**
	 * Returns VideoURL's thumbnail.
	 *
	 * @method getThumbnail
	 * @returns {Picture} The VideoURL's thumbnail.
	 */
	getThumbnail() : Picture {
		return this._thumbnail;
	}

	/**
	 * Set the VideoURL's thumbnail.
	 *
	 * @method setThumbnail
	 * @param {Picture} thumbnail - The new VideoURL's thumbnail.
	 */
	setThumbnail(thumbnail : Picture) {
		this._thumbnail = thumbnail;
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
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A VideoURL object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A VideoURL object should have a serviceName.");
		}

		if(typeof(jsonObject._title) == "undefined") {
			throw new InfoException("A VideoURL object should have a title.");
		}
		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("A VideoURL object should have a description.");
		}
		if(typeof(jsonObject._thumbnail) == "undefined") {
			throw new InfoException("A VideoURL object should have a thumbnail.");
		}
		if(typeof(jsonObject._url) == "undefined") {
			throw new InfoException("A VideoURL object should have an url.");
		}
		if(typeof(jsonObject._type) == "undefined") {
			throw new InfoException("A VideoURL object should have a type.");
		}

		var v : VideoURL = new VideoURL(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._title, jsonObject._description, jsonObject._url, jsonObject._type);

		if(jsonObject._thumbnail != null) {
			v.setThumbnail(Picture.fromJSONObject(jsonObject._thumbnail));
		}

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
		return this.getTitle() == info.getTitle() &&
			this.getDescription() == info.getDescription() &&
			this.getType() == info.getType() &&
			this.getURL() == info.getURL() &&
			this.getThumbnail().equals(info.getThumbnail());
	}
}
