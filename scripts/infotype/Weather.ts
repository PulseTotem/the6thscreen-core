/**
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

/// <reference path="./weather/WeatherStatus.ts" />
/// <reference path="./weather/WeatherMoon.ts" />
/// <reference path="./weather/WeatherPrecipitationType.ts" />
/// <reference path="./weather/WeatherWindDirection.ts" />

class Weather extends Info {

	/**
	 * Weather's time.
	 *
	 * @property _time
	 * @type number
	 * @private
	 */
	private _time : number;

	/**
	 * Weather's summary.
	 *
	 * @property _summary
	 * @type string
	 * @private
	 */
	private _summary : string;

	/**
	 * Weather's status.
	 *
	 * @property _status
	 * @type WeatherStatus
	 * @private
	 */
	private _status : WeatherStatus;

	/**
	 * Weather's sunriseTime.
	 *
	 * @property _sunriseTime
	 * @type number
	 * @private
	 */
	private _sunriseTime : number;

	/**
	 * Weather's sunsetTime.
	 *
	 * @property _sunsetTime
	 * @type number
	 * @private
	 */
	private _sunsetTime : number;

	/**
	 * Weather's moon.
	 *
	 * @property _moon
	 * @type WeatherMoon
	 * @private
	 */
	private _moon : WeatherMoon;

	/**
	 * Weather's precipitationIntensity.
	 *
	 * @property _precipitationIntensity
	 * @type number
	 * @private
	 */
	private _precipitationIntensity : number;

	/**
	 * Weather's precipitationProbability.
	 *
	 * @property _precipitationProbability
	 * @type number
	 * @private
	 */
	private _precipitationProbability : number;

	/**
	 * Weather's precipitationType.
	 *
	 * @property _precipitationType
	 * @type WeatherPrecipitationType
	 * @private
	 */
	private _precipitationType : WeatherPrecipitationType;

	/**
	 * Weather's temperature.
	 *
	 * @property _temperature
	 * @type number
	 * @private
	 */
	private _temperature : number;

	/**
	 * Weather's temperature min.
	 *
	 * @property _temperatureMin
	 * @type number
	 * @private
	 */
	private _temperatureMin : number;

	/**
	 * Weather's temperature max.
	 *
	 * @property _temperatureMax
	 * @type number
	 * @private
	 */
	private _temperatureMax : number;

	/**
	 * Weather's wind speed.
	 *
	 * @property _windSpeed
	 * @type number
	 * @private
	 */
	private _windSpeed : number;

	/**
	 * Weather's windDirection.
	 *
	 * @property _windDirection
	 * @type WeatherWindDirection
	 * @private
	 */
	private _windDirection : WeatherWindDirection;

	/**
	 * Weather's humidity.
	 *
	 * @property _humidity
	 * @type number
	 * @private
	 */
	private _humidity : number;

	/**
	 * Weather's pressure.
	 *
	 * @property _pressure
	 * @type number
	 * @private
	 */
	private _pressure : number;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				time : number = null, summary : string = "", status : WeatherStatus = WeatherStatus.UNKNOWN, sunriseTime : number = null, sunsetTime : number = null,
				moon : WeatherMoon = null, precipitationIntensity : number = null, precipitationProbability : number = null, precipitationType : WeatherPrecipitationType = null,
				temperature : number = null, temperatureMin : number = null, temperatureMax : number = null, windSpeed : number = null, windDirection : WeatherWindDirection = null, humidity : number = null, pressure : number = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("Weather");

		this._time = time;
		this._summary = summary;
		this._status = status;
		this._sunriseTime = sunriseTime;
		this._sunsetTime = sunsetTime;
		this._moon = moon;
		this._precipitationIntensity = precipitationIntensity;
		this._precipitationProbability = precipitationProbability;
		this._precipitationType = precipitationType;
		this._temperature = temperature;
		this._temperatureMin = temperatureMin;
		this._temperatureMax = temperatureMax;
		this._windSpeed = windSpeed;
		this._windDirection = windDirection;
		this._humidity = humidity;
		this._pressure = pressure;
	}

	/**
	 * Returns Weather's time.
	 *
	 * @method getTime
	 * @returns {string} The Weather's time.
	 */
	getTime() : number {
		return this._time;
	}

	/**
	 * Set the Weather's time.
	 *
	 * @method setTime
	 * @param {number} time - The new Weather's time.
	 */
	setTime(time : number) {
		this._time = time;
	}

	/**
	 * Return a Weather instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Weather} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Weather {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Weather object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Weather object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Weather object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Weather object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Weather object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Weather object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A Weather object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A Weather object should have a serviceName.");
		}

		if(typeof(jsonObject._time) == "undefined") {
			throw new InfoException("A Weather object should have a time.");
		}

		var t : Weather = new Weather(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._time);

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Weather) : boolean {
		return this.getTime() == info.getTime();
	}
}