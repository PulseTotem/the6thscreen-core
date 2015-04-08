/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./PictureURL.ts" />
/// <reference path="./Tag.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Picture extends Info {

	/**
	 * Picture's title.
	 *
	 * @property _title
	 * @type string
	 * @private
	 */
	private _title : string;

	/**
	 * Picture's description.
	 *
	 * @property _description
	 * @type string
	 * @private
	 */
	private _description : string;

	/**
	 * Picture's original size.
	 *
	 * @property _original
	 * @type PictureURL
	 * @private
	 */
	private _original : PictureURL;

	/**
	 * Picture's small size.
	 *
	 * @property _small
	 * @type PictureURL
	 * @private
	 */
	private _small : PictureURL;

	/**
	 * Picture's medium size.
	 *
	 * @property _medium
	 * @type PictureURL
	 * @private
	 */
	private _medium : PictureURL;

	/**
	 * Picture's large size.
	 *
	 * @property _large
	 * @type PictureURL
	 * @private
	 */
	private _large : PictureURL;

	/**
	 * Picture's thumb size.
	 *
	 * @property _thumb
	 * @type PictureURL
	 * @private
	 */
	private _thumb : PictureURL;

	/**
	 * Picture's orientation.
	 *
	 * @property _orientation
	 * @type string
	 * @private
	 */
	private _orientation : string;

	/**
	 * Picture's tags.
	 *
	 * @property _tags
	 * @type Array<Tag>
	 * @private
	 */
	private _tags : Array<Tag>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
				title : string = null, description : string = null, original : PictureURL = null, small : PictureURL = null, medium : PictureURL = null,
				large : PictureURL = null, thumb : PictureURL = null, orientation : string = null, tags : Array<Tag> = new Array<Tag>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._title = title;
		this._description = description;
		this._original = original;
		this._small = small;
		this._medium = medium;
		this._large = large;
		this._thumb = thumb;
		this._orientation = orientation;
		this._tags = tags;
	}

	/**
	 * Returns Picture's title.
	 *
	 * @method getTitle
	 * @returns {string} The Picture's title.
	 */
	getTitle() : string {
		return this._title;
	}

	/**
	 * Set the Picture's title.
	 *
	 * @method setTitle
	 * @param {string} title - The new Picture's title.
	 */
	setTitle(title : string) {
		this._title = title;
	}

	/**
	 * Returns Picture's description.
	 *
	 * @method getDescription
	 * @returns {string} The Picture's description.
	 */
	getDescription() : string {
		return this._description;
	}

	/**
	 * Set the Picture's description.
	 *
	 * @method setDescription
	 * @param {string} description - The new Picture's description.
	 */
	setDescription(description : string) {
		this._description = description;
	}

	/**
	 * Returns Picture's original size.
	 *
	 * @method getOriginal
	 * @returns {PictureURL} The Picture's original size.
	 */
	getOriginal() : PictureURL {
		return this._original;
	}

	/**
	 * Set the Picture's original size.
	 *
	 * @method setOriginal
	 * @param {PictureURL} original size - The new Picture's original size.
	 */
	setOriginal(original : PictureURL) {
		this._original = original;
	}

	/**
	 * Returns Picture's small size.
	 *
	 * @method getSmall
	 * @returns {PictureURL} The Picture's small size.
	 */
	getSmall() : PictureURL {
		return this._small;
	}

	/**
	 * Set the Picture's small size.
	 *
	 * @method setSmall
	 * @param {PictureURL} small size - The new Picture's small size.
	 */
	setSmall(small : PictureURL) {
		this._small = small;
	}

	/**
	 * Returns Picture's medium size.
	 *
	 * @method getMedium
	 * @returns {PictureURL} The Picture's medium size.
	 */
	getMedium() : PictureURL {
		return this._medium;
	}

	/**
	 * Set the Picture's medium size.
	 *
	 * @method setMedium
	 * @param {PictureURL} medium size - The new Picture's medium size.
	 */
	setMedium(medium : PictureURL) {
		this._medium = medium;
	}

	/**
	 * Returns Picture's large size.
	 *
	 * @method getLarge
	 * @returns {PictureURL} The Picture's large size.
	 */
	getLarge() : PictureURL {
		return this._large;
	}

	/**
	 * Set the Picture's large size.
	 *
	 * @method setLarge
	 * @param {PictureURL} large size - The new Picture's large size.
	 */
	setLarge(large : PictureURL) {
		this._large = large;
	}

	/**
	 * Returns Picture's thumb size.
	 *
	 * @method getThumb
	 * @returns {PictureURL} The Picture's thumb size.
	 */
	getThumb() : PictureURL {
		return this._thumb;
	}

	/**
	 * Set the Picture's thumb size.
	 *
	 * @method setThumb
	 * @param {PictureURL} thumb size - The new Picture's thumb size.
	 */
	setThumb(thumb : PictureURL) {
		this._thumb = thumb;
	}

	/**
	 * Returns Picture's orientation.
	 *
	 * @method getOrientation
	 * @returns {string} The Picture's orientation.
	 */
	getOrientation() : string {
		return this._orientation;
	}

	/**
	 * Set the Picture's orientation.
	 *
	 * @method setOrientation
	 * @param {string} orientation - The new Picture's orientation.
	 */
	setOrientation(orientation : string) {
		this._orientation = orientation;
	}

	/**
	 * Returns Picture's tags.
	 *
	 * @method getTags
	 * @returns {Array<Tag>} The Picture's tags.
	 */
	getTags() : Array<Tag> {
		return this._tags;
	}

	/**
	 * Set the Picture's tags.
	 *
	 * @method setTags
	 * @param {Array<Tag>} tags - The new Picture's tags.
	 */
	setTags(tags : Array<Tag>) {
		this._tags = tags;
	}

	/**
	 * Return a Picture instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Picture} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Picture {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Picture object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Picture object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Picture object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Picture object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Picture object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Picture object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._title) == "undefined") {
			throw new InfoException("A Picture object should have a title.");
		}
		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("A Picture object should have a description.");
		}
		if(typeof(jsonObject._original) == "undefined") {
			throw new InfoException("A Picture object should have an original size.");
		}
		if(typeof(jsonObject._small) == "undefined") {
			throw new InfoException("A Picture object should have a small size.");
		}
		if(typeof(jsonObject._medium) == "undefined") {
			throw new InfoException("A Picture object should have a medium size.");
		}
		if(typeof(jsonObject._large) == "undefined") {
			throw new InfoException("A Picture object should have a large size.");
		}
		if(typeof(jsonObject._thumb) == "undefined") {
			throw new InfoException("A Picture object should have a thumb size.");
		}
		if(typeof(jsonObject._orientation) == "undefined") {
			throw new InfoException("A Picture object should have an orientation.");
		}
		if(typeof(jsonObject._tags) == "undefined") {
			throw new InfoException("A Picture object should have tags.");
		}

		var p : Picture = new Picture(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._title, jsonObject._description, jsonObject._original, jsonObject._small, jsonObject._medium, jsonObject._large, jsonObject._thumb, jsonObject._orientation, jsonObject._tags);

		return p;
	}
}