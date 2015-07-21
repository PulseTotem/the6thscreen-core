/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

/**
 * Represent an event (e.g. from a Calendar)
 *
 * @class EventCal
 */
class EventCal extends Info {

	/**
	 * Define when the event starts
	 *
	 * @property _start
	 * @type {Date}
	 * @private
	 */
	private _start : Date;

	/**
	 * Define when the event ends
	 *
	 * @property _end
	 * @type {Date}
	 * @private
	 */
	private _end : Date;

	/**
	 * Define the name of the event
	 *
	 * @property _name
	 * @type {string}
	 * @private
	 */
	private _name : string;

	/**
	 * Define the description of the event
	 *
	 * @property _description
	 * @type {string}
	 * @private
	 */
	private _description : string;

	/**
	 * Define the location of the event
	 *
	 * @property _location
	 * @type {string}
	 * @private
	 */
	private _location : string;

	/**
	 * @method getStart
	 * @returns {Date}
	 */
	public getStart() : Date {
		return this._start;
	}

	/**
	 * @method setStart
	 * @param value
	 */
	public setStart(value:Date) {
		this._start = value;
	}

	/**
	 * @method getName
	 * @returns {string}
	 */
	public getName():string {
		return this._name;
	}

	/**
	 * @method setName
	 * @param value
	 */
	public setName(value:string) {
		this._name = value;
	}

	/**
	 * @method getEnd
	 * @returns {Date}
	 */
	public getEnd():Date {
		return this._end;
	}

	/**
	 * @method setEnd
	 * @param value
	 */
	public setEnd(value:Date) {
		this._end = value;
	}

	/**
	 * @method getDescription
	 * @returns {string}
	 */
	public getDescription() : string {
		return this._description;
	}

	/**
	 * @method setDescription
	 * @param description
	 */
	public setDescription(description : string) {
		this._description = description;
	}

	/**
	 * @method getLocation
	 * @returns {string}
	 */
	public getLocation() : string {
		return this._location;
	}

	/**
	 * @method setLocation
	 * @param location
	 */
	public setLocation(location : string) {
		this._location = location;
	}

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
	            start : Date = null, end : Date = null, name : string = null, description : string = null, location : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this.setStart(start);
		this.setEnd(end);
		this.setName(name);
		this.setDescription(description);
		this.setLocation(location);
	}

	static fromJSONObject(jsonObject : any) : EventCal {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("An Event object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("An Event object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("An Event object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("An Event object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("An Event object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("An Event object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._name) == "undefined") {
			throw new InfoException("An Event object should have a name.");
		}
		if(typeof(jsonObject._start) == "undefined") {
			throw new InfoException("An Event object should have a start.");
		}
		if(typeof(jsonObject._end) == "undefined") {
			throw new InfoException("An Event object should have an end.");
		}
		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("An Event object should have a description.");
		}
		if(typeof(jsonObject._location) == "undefined") {
			throw new InfoException("An Event object should have a location.");
		}

		var e : EventCal = new EventCal(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);
		e.setName(jsonObject._name);
		e.setStart(jsonObject._start);
		e.setEnd(jsonObject._end);
		e.setDescription(jsonObject._description);
		e.setLocation(jsonObject._location);

		return e;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : EventCal) : boolean {
		return (this.getName() == info.getName() && this.getStart() == info.getStart() && this.getEnd() == info.getEnd() && this.getDescription() == info.getDescription() && this.getLocation() == info.getLocation());
	}
}