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
	 * Weather's latitude.
	 *
	 * @property _latitude
	 * @type string
	 * @private
	 */
	private _latitude : string;

	/**
	 * Weather's longitude.
	 *
	 * @property _longitude
	 * @type string
	 * @private
	 */
	private _longitude : string;

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
				latitude : string = "", longitude : string = "", time : number = null, summary : string = "", status : WeatherStatus = WeatherStatus.UNKNOWN, sunriseTime : number = null, sunsetTime : number = null,
				moon : WeatherMoon = null, precipitationIntensity : number = null, precipitationProbability : number = null, precipitationType : WeatherPrecipitationType = null,
				temperature : number = null, temperatureMin : number = null, temperatureMax : number = null, windSpeed : number = null, windDirection : WeatherWindDirection = null, humidity : number = null, pressure : number = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("Weather");

		this._latitude = latitude;
		this._longitude = longitude;
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
	 * Returns Weather's latitude.
	 *
	 * @method getLatitude
	 * @returns {string} The Weather's latitude.
	 */
	getLatitude() : string {
		return this._latitude;
	}

	/**
	 * Set the Weather's latitude.
	 *
	 * @method setLatitude
	 * @param {string} latitude - The new Weather's latitude.
	 */
	setLatitude(latitude : string) {
		this._latitude = latitude;
	}

	/**
	 * Returns Weather's longitude.
	 *
	 * @method getLongitude
	 * @returns {string} The Weather's longitude.
	 */
	getLongitude() : string {
		return this._longitude;
	}

	/**
	 * Set the Weather's longitude.
	 *
	 * @method setLongitude
	 * @param {string} longitude - The new Weather's longitude.
	 */
	setLongitude(longitude : string) {
		this._longitude = longitude;
	}

	/**
	 * Returns Weather's time.
	 *
	 * @method getTime
	 * @returns {number} The Weather's time.
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
	 * Returns Weather's summary.
	 *
	 * @method getSummary
	 * @returns {string} The Weather's summary.
	 */
	getSummary() : string {
		return this._summary;
	}

	/**
	 * Set the Weather's summary.
	 *
	 * @method setSummary
	 * @param {string} summary - The new Weather's summary.
	 */
	setSummary(summary : string) {
		this._summary = summary;
	}

	/**
	 * Returns Weather's status.
	 *
	 * @method getStatus
	 * @returns {WeatherStatus} The Weather's status.
	 */
	getStatus() : WeatherStatus {
		return this._status;
	}

	/**
	 * Set the Weather's status.
	 *
	 * @method setStatus
	 * @param {WeatherStatus} status - The new Weather's status.
	 */
	setStatus(status : WeatherStatus) {
		this._status = status;
	}

	/**
	 * Returns Weather's sunriseTime.
	 *
	 * @method getSunriseTime
	 * @returns {number} The Weather's sunriseTime.
	 */
	getSunriseTime() : number {
		return this._sunriseTime;
	}

	/**
	 * Set the Weather's sunriseTime.
	 *
	 * @method setSunriseTime
	 * @param {number} sunriseTime - The new Weather's sunriseTime.
	 */
	setSunriseTime(sunriseTime : number) {
		this._sunriseTime = sunriseTime;
	}

	/**
	 * Returns Weather's sunsetTime.
	 *
	 * @method getSunsetTime
	 * @returns {number} The Weather's sunsetTime.
	 */
	getSunsetTime() : number {
		return this._sunsetTime;
	}

	/**
	 * Set the Weather's sunsetTime.
	 *
	 * @method setSunsetTime
	 * @param {number} sunsetTime - The new Weather's sunsetTime.
	 */
	setSunsetTime(sunsetTime : number) {
		this._sunsetTime = sunsetTime;
	}

	/**
	 * Returns Weather's moon.
	 *
	 * @method getMoon
	 * @returns {WeatherMoon} The Weather's moon.
	 */
	getMoon() : WeatherMoon {
		return this._moon;
	}

	/**
	 * Set the Weather's moon.
	 *
	 * @method setMoon
	 * @param {WeatherMoon} moon - The new Weather's moon.
	 */
	setMoon(moon : WeatherMoon) {
		this._moon = moon;
	}

	/**
	 * Returns Weather's precipitationIntensity.
	 *
	 * @method getPrecipitationIntensity
	 * @returns {number} The Weather's precipitationIntensity.
	 */
	getPrecipitationIntensity() : number {
		return this._precipitationIntensity;
	}

	/**
	 * Set the Weather's precipitationIntensity.
	 *
	 * @method setPrecipitationIntensity
	 * @param {number} precipitationIntensity - The new Weather's precipitationIntensity.
	 */
	setPrecipitationIntensity(precipitationIntensity : number) {
		this._precipitationIntensity = precipitationIntensity;
	}

	/**
	 * Returns Weather's precipitationProbability.
	 *
	 * @method getPrecipitationProbability
	 * @returns {number} The Weather's precipitationProbability.
	 */
	getPrecipitationProbability() : number {
		return this._precipitationProbability;
	}

	/**
	 * Set the Weather's precipitationProbability.
	 *
	 * @method setPrecipitationProbability
	 * @param {number} precipitationProbability - The new Weather's precipitationProbability.
	 */
	setPrecipitationProbability(precipitationProbability : number) {
		this._precipitationProbability = precipitationProbability;
	}

	/**
	 * Returns Weather's precipitationType.
	 *
	 * @method getPrecipitationType
	 * @returns {WeatherPrecipitationType} The Weather's precipitationType.
	 */
	getPrecipitationType() : WeatherPrecipitationType {
		return this._precipitationType;
	}

	/**
	 * Set the Weather's precipitationType.
	 *
	 * @method setPrecipitationType
	 * @param {WeatherPrecipitationType} precipitationType - The new Weather's precipitationType.
	 */
	setPrecipitationType(precipitationType : WeatherPrecipitationType) {
		this._precipitationType = precipitationType;
	}

	/**
	 * Returns Weather's temperature.
	 *
	 * @method getTemperature
	 * @returns {number} The Weather's temperature.
	 */
	getTemperature() : number {
		return this._temperature;
	}

	/**
	 * Set the Weather's temperature.
	 *
	 * @method setTemperature
	 * @param {number} temperature - The new Weather's temperature.
	 */
	setTemperature(temperature : number) {
		this._temperature = temperature;
	}

	/**
	 * Returns Weather's temperatureMin.
	 *
	 * @method getTemperatureMin
	 * @returns {number} The Weather's temperatureMin.
	 */
	getTemperatureMin() : number {
		return this._temperatureMin;
	}

	/**
	 * Set the Weather's temperatureMin.
	 *
	 * @method setTemperatureMin
	 * @param {number} temperatureMin - The new Weather's temperatureMin.
	 */
	setTemperatureMin(temperatureMin : number) {
		this._temperatureMin = temperatureMin;
	}

	/**
	 * Returns Weather's temperatureMax.
	 *
	 * @method getTemperatureMax
	 * @returns {number} The Weather's temperatureMax.
	 */
	getTemperatureMax() : number {
		return this._temperatureMax;
	}

	/**
	 * Set the Weather's temperatureMax.
	 *
	 * @method setTemperatureMax
	 * @param {number} temperatureMax - The new Weather's temperatureMax.
	 */
	setTemperatureMax(temperatureMax : number) {
		this._temperatureMax = temperatureMax;
	}

	/**
	 * Returns Weather's windSpeed.
	 *
	 * @method getWindSpeed
	 * @returns {string} The Weather's windSpeed.
	 */
	getWindSpeed() : number {
		return this._windSpeed;
	}

	/**
	 * Set the Weather's windSpeed.
	 *
	 * @method setWindSpeed
	 * @param {number} windSpeed - The new Weather's windSpeed.
	 */
	setWindSpeed(windSpeed : number) {
		this._windSpeed = windSpeed;
	}

	/**
	 * Returns Weather's windDirection.
	 *
	 * @method getWindDirection
	 * @returns {WeatherWindDirection} The Weather's windDirection.
	 */
	getWindDirection() : WeatherWindDirection {
		return this._windDirection;
	}

	/**
	 * Set the Weather's windDirection.
	 *
	 * @method setWindDirection
	 * @param {WeatherWindDirection} windDirection - The new Weather's windDirection.
	 */
	setWindDirection(windDirection : WeatherWindDirection) {
		this._windDirection = windDirection;
	}

	/**
	 * Returns Weather's humidity.
	 *
	 * @method getHumidity
	 * @returns {number} The Weather's humidity.
	 */
	getHumidity() : number {
		return this._humidity;
	}

	/**
	 * Set the Weather's humidity.
	 *
	 * @method setHumidity
	 * @param {number} humidity - The new Weather's humidity.
	 */
	setHumidity(humidity : number) {
		this._humidity = humidity;
	}

	/**
	 * Returns Weather's pressure.
	 *
	 * @method getPressure
	 * @returns {number} The Weather's pressure.
	 */
	getPressure() : number {
		return this._pressure;
	}

	/**
	 * Set the Weather's pressure.
	 *
	 * @method setPressure
	 * @param {number} pressure - The new Weather's pressure.
	 */
	setPressure(pressure : number) {
		this._pressure = pressure;
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

		if(typeof(jsonObject._latitude) == "undefined") {
			throw new InfoException("A Weather object should have a latitude.");
		}

		if(typeof(jsonObject._longitude) == "undefined") {
			throw new InfoException("A Weather object should have a longitude.");
		}

		if(typeof(jsonObject._time) == "undefined") {
			throw new InfoException("A Weather object should have a time.");
		}

		if(typeof(jsonObject._summary) == "undefined") {
			throw new InfoException("A Weather object should have a summary.");
		}

		if(typeof(jsonObject._status) == "undefined") {
			throw new InfoException("A Weather object should have a status.");
		}

		if(typeof(jsonObject._sunriseTime) == "undefined") {
			throw new InfoException("A Weather object should have a sunriseTime.");
		}

		if(typeof(jsonObject._sunsetTime) == "undefined") {
			throw new InfoException("A Weather object should have a sunsetTime.");
		}

		if(typeof(jsonObject._moon) == "undefined") {
			throw new InfoException("A Weather object should have a moon.");
		}

		if(typeof(jsonObject._precipitationIntensity) == "undefined") {
			throw new InfoException("A Weather object should have a precipitationIntensity.");
		}

		if(typeof(jsonObject._precipitationProbability) == "undefined") {
			throw new InfoException("A Weather object should have a precipitationProbability.");
		}

		if(typeof(jsonObject._precipitationType) == "undefined") {
			throw new InfoException("A Weather object should have a precipitationType.");
		}

		if(typeof(jsonObject._temperature) == "undefined") {
			throw new InfoException("A Weather object should have a temperature.");
		}

		if(typeof(jsonObject._temperatureMin) == "undefined") {
			throw new InfoException("A Weather object should have a temperatureMin.");
		}

		if(typeof(jsonObject._temperatureMax) == "undefined") {
			throw new InfoException("A Weather object should have a temperatureMax.");
		}

		if(typeof(jsonObject._windSpeed) == "undefined") {
			throw new InfoException("A Weather object should have a windSpeed.");
		}

		if(typeof(jsonObject._windDirection) == "undefined") {
			throw new InfoException("A Weather object should have a windDirection.");
		}

		if(typeof(jsonObject._humidity) == "undefined") {
			throw new InfoException("A Weather object should have a humidity.");
		}

		if(typeof(jsonObject._pressure) == "undefined") {
			throw new InfoException("A Weather object should have a pressure.");
		}

		var w : Weather = new Weather(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._latitude, jsonObject._longitude, jsonObject._time, jsonObject._summary, jsonObject._status, jsonObject._sunriseTime, jsonObject._sunsetTime, jsonObject._moon, jsonObject._precipitationIntensity, jsonObject._precipitationProbability, jsonObject._precipitationType,
			jsonObject._temperature, jsonObject._temperatureMin, jsonObject._temperatureMax, jsonObject._windSpeed, jsonObject._windDirection, jsonObject._humidity, jsonObject._pressure);

		return w;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Weather) : boolean {
		return 	this.getLatitude() == info.getLatitude() &&
				this.getLongitude() == info.getLongitude() &&
				this.getTime() == info.getTime() &&
				this.getSummary() == info.getSummary() &&
				this.getStatus() == info.getStatus() &&
				this.getSunriseTime() == info.getSunriseTime() &&
				this.getSunsetTime() == info.getSunsetTime() &&
				this.getMoon() == info.getMoon() &&
				this.getPrecipitationIntensity() == info.getPrecipitationIntensity() &&
				this.getPrecipitationProbability() == info.getPrecipitationProbability() &&
				this.getPrecipitationType() == info.getPrecipitationType() &&
				this.getTemperature() == info.getTemperature() &&
				this.getTemperatureMin() == info.getTemperatureMin() &&
				this.getTemperatureMax() == info.getTemperatureMax() &&
				this.getWindSpeed() == info.getWindSpeed() &&
				this.getWindDirection() == info.getWindDirection() &&
				this.getHumidity() == info.getHumidity() &&
				this.getPressure() == info.getPressure();
	}
}