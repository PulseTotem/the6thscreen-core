/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Counter extends Info {

	/**
	 * Counter's value.
	 *
	 * @property _counterValue
	 * @type number
	 * @private
	 */
	private _counterValue : number;

	/**
	 * Counter's query
	 *
	 * @property _query
	 * @type string
	 * @private
	 */
	private _query : string;

	/**
	 * Counter's Since value
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
				counterValue : number = 0, query : string = "", since : Date = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("Counter");

		this.setValue(counterValue);
		this.setQuery(query);
		this.setSince(since);
	}

	/**
	 * Returns Counter's value.
	 *
	 * @method getValue
	 * @returns {number} The Counter's value.
	 */
	getValue() : number {
		return this._counterValue;
	}

	/**
	 * Set the Counter's value.
	 *
	 * @method setValue
	 * @param {number} counterValue - The new Counter's value.
	 */
	setValue(counterValue : number) {
		this._counterValue = counterValue;
	}

	/**
	 * Returns Counter's query
	 *
	 * @method getQuery
	 * @returns {string} The counter's query
     */
	getQuery() : string {
		return this._query;
	}

	/**
	 * Set the Counter's query
	 *
	 * @method setQuery
	 * @param query
     */
	setQuery(query : string) {
		this._query = query;
	}

	/**
	 * Returns Counter's since date
	 *
	 * @method getSince
	 * @returns {Date} The counter's since
     */
	getSince() : Date {
		return this._since;
	}

	/**
	 * Set the Counter's since date
	 * @param since
     */
	setSince(since : Date) {
		this._since = since;
	}

	/**
	 * Return a Counter instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Counter} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Counter {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Counter object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Counter object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Counter object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Counter object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Counter object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Counter object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A Counter object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A Counter object should have a serviceLogo.");
		}

		if(typeof(jsonObject._counterValue) == "undefined") {
			throw new InfoException("A Counter object should have a value.");
		}
		if(typeof(jsonObject._since) == "undefined") {
			throw new InfoException("A Counter object should have a since date.");
		}

		if(typeof(jsonObject._query) == "undefined") {
			throw new InfoException("A Counter object should have a query.");
		}

		var c : Counter = new Counter(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		c.setValue(jsonObject._counterValue);
		c.setQuery(jsonObject._query);
		c.setSince(jsonObject._since);

		return c;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Counter) : boolean {
		return this.getValue() == info.getValue() && this.getQuery() == info.getQuery() && this.getSince() == info.getSince();
	}
}