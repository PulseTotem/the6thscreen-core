/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Tag.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class TagList extends Info {

	/**
	 * TagList's tags.
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
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				tags : Array<Tag> = new Array<Tag>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
		this._tags = tags;
	}

	/**
	 * Returns TagList's tags.
	 *
	 * @method getTags
	 * @returns {Array<Tag>} The TagList's tags.
	 */
	getTags() : Array<Tag> {
		return this._tags;
	}

	/**
	 * Added a Tag to TagList.
	 *
	 * @method addTag
	 * @param {Tag} tag - The feedNode to add.
	 */
	addTag(tag : Tag) {
		this._tags.push(tag);
	}

	/**
	 * Return a TagList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {TagList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : TagList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A TagList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A TagList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A TagList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A TagList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A TagList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A TagList object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._tags) == "undefined") {
			throw new InfoException("A TagList object should have tags.");
		}

		var cl : TagList = new TagList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._tags.length; i++) {
			var cDesc = jsonObject._tags[i];
			var c : Tag = Tag.fromJSONObject(cDesc);
			cl.addTag(c);
		}

		return cl;
	}
}