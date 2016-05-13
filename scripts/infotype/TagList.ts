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
	 * TagList's query.
	 *
	 * @property _query
	 * @type string
	 * @private
	 */
	private _query : string;

	/**
	 * TagList's since
	 *
	 * @property _since
	 * @type Date
	 * @private
	 */
	private _since : Date;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				tags : Array<Tag> = new Array<Tag>(), query : string = "", since : Date = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("TagList");

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
	 * Returns TagList's query
	 *
	 * @method getQuery
	 * @returns {string} The query
     */
	getQuery() : string {
		return this._query;
	}

	/**
	 * Set the query value
	 *
	 * @method setQuery
	 * @param query
     */
	setQuery(query : string) {
		this._query = query;
	}

	/**
	 * Returns the TagList's since date
	 *
	 * @method getSince
	 * @returns {Date}
     */
	getSince() : Date {
		return this._since;
	}

	/**
	 * Set the since date
	 *
	 * @method setSince
	 * @param since
     */
	setSince(since : Date) {
		this._since = since;
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
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A TagList object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A TagList object should have a serviceName.");
		}

		if(typeof(jsonObject._tags) == "undefined") {
			throw new InfoException("A TagList object should have tags.");
		}
		if(typeof(jsonObject._since) == "undefined") {
			throw new InfoException("A TagList object should have since date.");
		}
		if(typeof(jsonObject._query) == "undefined") {
			throw new InfoException("A TagList object should have query.");
		}

		var cl : TagList = new TagList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		for(var i = 0; i < jsonObject._tags.length; i++) {
			var cDesc = jsonObject._tags[i];
			var c : Tag = Tag.fromJSONObject(cDesc);
			cl.addTag(c);
		}

		cl.setQuery(jsonObject._query);
		cl.setSince(jsonObject._since);

		return cl;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : TagList) : boolean {
		if(this.getTags().length != info.getTags().length && this.getQuery() != info.getQuery() && this.getSince() != info.getSince()) {
			return false;
		} else {
			var equalStatus = true;

			this.getTags().forEach(function (tag : Tag) {
				var existEqual = false;

				info.getTags().forEach(function(otherTag : Tag) {
					if(!existEqual) {
						existEqual = tag.equals(otherTag);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._tags, self);
	}
}