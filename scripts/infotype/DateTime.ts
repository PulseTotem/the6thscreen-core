/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class DateTime extends Info {

	/**
	 * DateTime's date.
	 *
	 * @property _date
	 * @type Date
	 * @private
	 */
	private _date : Date;

	/**
	 * DateTime's description.
	 *
	 * @property _description
	 * @type string
	 * @private
	 */
	private _description : string;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
	            date : Date = null, description : string = "") {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("DateTime");

		this._date = date;
		this._description = description;
	}

	/**
	 * Returns DateTime's date.
	 *
	 * @method getDate
	 * @returns {Date} The DateTime's date.
	 */
	getDate() : Date {
		return this._date;
	}

	/**
	 * Set the DateTime's date.
	 *
	 * @method setDate
	 * @param {Date} date - The new DateTime's date.
	 */
	setDate(date : Date) {
		this._date = date;
	}

	/**
	 * Returns DateTime's popularity.
	 *
	 * @method getPopularity
	 * @returns {number} The DateTime's popularity.
	 */
	getDescription() : string {
		return this._description;
	}

	/**
	 * Set the DateTime's description.
	 *
	 * @method setDescription
	 * @param {string} description - The new DateTime's description.
	 */
	setDescription(description : string) {
		this._description = description;
	}

	/**
	 * Return a DateTime instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {DateTime} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : DateTime {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A DateTime object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A DateTime object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A DateTime object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A DateTime object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A DateTime object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A DateTime object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A DateTime object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A DateTime object should have a serviceLogo.");
		}

		if(typeof(jsonObject._date) == "undefined") {
			throw new InfoException("A DateTime object should have a date.");
		}

		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("A DateTime object should have a description.");
		}

		var t : DateTime = new DateTime(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._date, jsonObject._description);

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : DateTime) : boolean {
		return this.getDate() == info.getDate() &&
			this.getDescription() == info.getDescription();
	}
}