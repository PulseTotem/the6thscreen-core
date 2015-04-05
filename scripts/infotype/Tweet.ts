/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />

class Tweet extends Info {

	/**
	 * Tweet's message.
	 *
	 * @property _message
	 * @type string
	 * @private
	 */
	private _message : string;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
				message : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._message = message;
	}

	/**
	 * Returns Tweet's message.
	 *
	 * @method getMessage
	 * @returns {string} The Tweet's message.
	 */
	getMessage() : string {
		return this._message;
	}

	/**
	 * Set the Tweet's message.
	 *
	 * @method setMessage
	 * @param {string} message - The new Tweet's message.
	 */
	setMessage(message : string) {
		this._message = message;
	}

	/**
	 * Return a Tweet instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Tweet} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Tweet {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Tweet object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Tweet object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Tweet object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Tweet object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Tweet object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Tweet object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._message) == "undefined") {
			throw new InfoException("A Tweet object should have a message.");
		}

		var t : Tweet = new Tweet(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
			jsonObject._message);

		return t;
	}
}