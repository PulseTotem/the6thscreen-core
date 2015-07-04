/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Counter.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class CounterList extends Info {

	/**
	 * CounterList's counters.
	 *
	 * @property _counters
	 * @type Array<Counter>
	 * @private
	 */
	private _counters : Array<Counter>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				counters : Array<Counter> = new Array<Counter>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
		this._counters = counters;
	}

	/**
	 * Returns CounterList's counters.
	 *
	 * @method getCounters
	 * @returns {Array<Counter>} The CounterList's counters.
	 */
	getCounters() : Array<Counter> {
		return this._counters;
	}

	/**
	 * Added a Counter to CounterList.
	 *
	 * @method addCounter
	 * @param {Counter} counter - The feedNode to add.
	 */
	addCounter(counter : Counter) {
		this._counters.push(counter);
	}

	/**
	 * Return a CounterList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {CounterList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : CounterList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A CounterList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A CounterList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A CounterList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A CounterList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A CounterList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A CounterList object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._counters) == "undefined") {
			throw new InfoException("A CounterList object should have counters.");
		}

		var cl : CounterList = new CounterList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._counters.length; i++) {
			var cDesc = jsonObject._counters[i];
			var c : Counter = Counter.fromJSONObject(cDesc);
			cl.addCounter(c);
		}

		return cl;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : CounterList) : boolean {
		if(this.getCounters().length != info.getCounters().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getCounters().forEach(function (counter : Counter) {
				var existEqual = false;

				info.getCounters().forEach(function(otherCounter : Counter) {
					if(!existEqual) {
						existEqual = counter.equals(otherCounter);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}
}