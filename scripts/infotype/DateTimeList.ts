/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./DateTime.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class DateTimeList extends Info {

	/**
	 * DateTimeList's datetimes.
	 *
	 * @property _datetimes
	 * @type Array<DateTime>
	 * @private
	 */
	private _datetimes : Array<DateTime>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				datetimes : Array<DateTime> = new Array<DateTime>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);
		this._datetimes = datetimes;
	}

	/**
	 * Returns DateTimeList's datetimes.
	 *
	 * @method getDateTimes
	 * @returns {Array<DateTime>} The DateTimeList's datetimes.
	 */
	getDateTimes() : Array<DateTime> {
		return this._datetimes;
	}

	/**
	 * Added a DateTime to DateTimeList.
	 *
	 * @method addDateTime
	 * @param {DateTime} datetime - The feedNode to add.
	 */
	addDateTime(datetime : DateTime) {
		this._datetimes.push(datetime);
	}

	/**
	 * Return a DateTimeList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {DateTimeList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : DateTimeList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A DateTimeList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A DateTimeList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A DateTimeList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A DateTimeList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A DateTimeList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A DateTimeList object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A DateTimeList object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A DateTimeList object should have a serviceLogo.");
		}

		if(typeof(jsonObject._datetimes) == "undefined") {
			throw new InfoException("A DateTimeList object should have datetimes.");
		}

		var dtl : DateTimeList = new DateTimeList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		for(var i = 0; i < jsonObject._datetimes.length; i++) {
			var dtDesc = jsonObject._datetimes[i];
			var dt : DateTime = DateTime.fromJSONObject(dtDesc);
			dtl.addDateTime(dt);
		}

		return dtl;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : DateTimeList) : boolean {
		if(this.getDateTimes().length != info.getDateTimes().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getDateTimes().forEach(function (datetime : DateTime) {
				var existEqual = false;

				info.getDateTimes().forEach(function(otherDateTime : DateTime) {
					if(!existEqual) {
						existEqual = datetime.equals(otherDateTime);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._datetimes, self);
	}
}