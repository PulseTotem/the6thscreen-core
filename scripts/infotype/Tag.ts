/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Tag extends Info {

	/**
	 * Tag's name.
	 *
	 * @property _name
	 * @type string
	 * @private
	 */
	private _name : string;

	/**
	 * Tag's popularity.
	 *
	 * @property _popularity
	 * @type number
	 * @private
	 */
	private _popularity : number;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				name : string = null, popularity : number = 0) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._name = name;
		this._popularity = popularity;
	}

	/**
	 * Returns Tag's name.
	 *
	 * @method getName
	 * @returns {string} The Tag's name.
	 */
	getName() : string {
		return this._name;
	}

	/**
	 * Set the Tag's name.
	 *
	 * @method setName
	 * @param {string} name - The new Tag's name.
	 */
	setName(name : string) {
		this._name = name;
	}

	/**
	 * Returns Tag's popularity.
	 *
	 * @method getPopularity
	 * @returns {number} The Tag's popularity.
	 */
	getPopularity() : number {
		return this._popularity;
	}

	/**
	 * Set the Tag's popularity.
	 *
	 * @method setPopularity
	 * @param {number} popularity - The new Tag's popularity.
	 */
	setPopularity(popularity : number) {
		this._popularity = popularity;
	}

	/**
	 * Return a Tag instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Tag} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Tag {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Tag object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Tag object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Tag object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Tag object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Tag object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Tag object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._name) == "undefined") {
			throw new InfoException("A Tag object should have a name.");
		}

		if(typeof(jsonObject._popularity) == "undefined") {
			throw new InfoException("A Tag object should have a popularity.");
		}

		var t : Tag = new Tag(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._name, jsonObject._popularity);

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Tag) : boolean {
		return this.getName() == info.getName() &&
				this.getPopularity() == info.getPopularity();
	}
}