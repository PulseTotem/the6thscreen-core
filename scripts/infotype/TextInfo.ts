/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class TextInfo extends Info {

	/**
	 * TextInfo's value.
	 *
	 * @property _value
	 * @type string
	 * @private
	 */
	private _value : string;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				value : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this._value = value;
	}

	/**
	 * Returns TextInfo's value.
	 *
	 * @method getValue
	 * @returns {string} The TextInfo's value.
	 */
	getValue() : string {
		return this._value;
	}

	/**
	 * Set the TextInfo's value.
	 *
	 * @method setValue
	 * @param {string} value - The new TextInfo's value.
	 */
	setValue(value : string) {
		this._value = value;
	}

	/**
	 * Return a TextInfo instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {TextInfo} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : TextInfo {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A TextInfo object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A TextInfo object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A TextInfo object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A TextInfo object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A TextInfo object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A TextInfo object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A TextInfo object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A TextInfo object should have a serviceName.");
		}

		if(typeof(jsonObject._value) == "undefined") {
			throw new InfoException("A TextInfo object should have a value.");
		}

		var t : TextInfo = new TextInfo(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._value);

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : TextInfo) : boolean {
		return this.getValue() == info.getValue();
	}
}