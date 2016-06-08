/**
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Weather.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Forecast extends Info {

	/**
	 * Forecast's current weather.
	 *
	 * @property _current
	 * @type Weather
	 * @private
	 */
	private _current : Weather;

	/**
	 * Forecast's next hours weathers.
	 *
	 * @property _nextHours
	 * @type Array<Weather>
	 * @private
	 */
	private _nextHours : Array<Weather>;

	/**
	 * Forecast's next days weathers.
	 *
	 * @property _nextDays
	 * @type Array<Weather>
	 * @private
	 */
	private _nextDays : Array<Weather>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				current : Weather = null, nextHours : Array<Weather> = new Array<Weather>(), nextDays : Array<Weather> = new Array<Weather>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("Forecast");

		this._current = current;
		this._nextHours = nextHours;
		this._nextDays = nextDays;
	}

	/**
	 * Returns current Weather.
	 *
	 * @method getCurrent
	 * @returns {Weather} The current Weather.
	 */
	getCurrent() : Weather {
		return this._current;
	}

	/**
	 * Set the current Weather.
	 *
	 * @method setCurrent
	 * @param {Weather} weather - The new current Weather.
	 */
	setCurrent(weather : Weather) {
		this._current = weather;
	}

	/**
	 * Returns Forecast's next hours weathers.
	 *
	 * @method getNextHours
	 * @returns {Array<Weather>} The Forecast's next hours weathers.
	 */
	getNextHours() : Array<Weather> {
		return this._nextHours;
	}

	/**
	 * Added a next hour Weather to Forecast.
	 *
	 * @method addNextHour
	 * @param {Weather} weather - The weather to add.
	 */
	addNextHour(weather : Weather) {
		this._nextHours.push(weather);
	}

	/**
	 * Returns Forecast's next days weathers.
	 *
	 * @method getNextDays
	 * @returns {Array<Weather>} The Forecast's next days weathers.
	 */
	getNextDays() : Array<Weather> {
		return this._nextDays;
	}

	/**
	 * Added a next day Weather to Forecast.
	 *
	 * @method addNextDay
	 * @param {Weather} weather - The weather to add.
	 */
	addNextDay(weather : Weather) {
		this._nextDays.push(weather);
	}

	/**
	 * Return a Forecast instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Forecast} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Forecast {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Forecast object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Forecast object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Forecast object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Forecast object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Forecast object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Forecast object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A Forecast object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A Forecast object should have a serviceName.");
		}

		if(typeof(jsonObject._current) == "undefined") {
			throw new InfoException("A Forecast object should have a current weather.");
		}

		if(typeof(jsonObject._nextHours) == "undefined") {
			throw new InfoException("A Forecast object should have next hours weathers.");
		}

		if(typeof(jsonObject._nextDays) == "undefined") {
			throw new InfoException("A Forecast object should have next days weathers.");
		}

		var f : Forecast = new Forecast(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		var current = Weather.fromJSONObject(jsonObject._current);
		f.setCurrent(current);

		for(var i = 0; i < jsonObject._nextHours.length; i++) {
			var wDesc = jsonObject._nextHours[i];
			var w : Weather = Weather.fromJSONObject(wDesc);
			f.addNextHour(w);
		}

		for(var j = 0; j < jsonObject._nextDays.length; j++) {
			var wDesc = jsonObject._nextDays[j];
			var w : Weather = Weather.fromJSONObject(wDesc);
			f.addNextDay(w);
		}

		return f;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Forecast) : boolean {
		var firstCheck = this.getCurrent().equals(info.getCurrent());

		if(firstCheck) {
			if (this.getNextHours().length != info.getNextHours().length) {
				return false;
			} else {
				var equalStatus = true;

				this.getNextHours().forEach(function (w : Weather) {
					var existEqual = false;

					info.getNextHours().forEach(function (otherW : Weather) {
						if (!existEqual) {
							existEqual = w.equals(otherW);
						}
					});

					equalStatus = equalStatus && existEqual;
				});

				if(equalStatus) {
					var equalStatusForDays = true;

					this.getNextDays().forEach(function (w : Weather) {
						var existEqual = false;

						info.getNextDays().forEach(function (otherW : Weather) {
							if (!existEqual) {
								existEqual = w.equals(otherW);
							}
						});

						equalStatusForDays = equalStatusForDays && existEqual;
					});

					return equalStatusForDays;
				} else {
					return false;
				}
			}
		} else {
			return false;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._nextHours, self);
		Info.replaceServiceInfoInChildren(this._nextDays, self);
	}
}