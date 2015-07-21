/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Event.ts" />
/// <reference path="./exceptions/InfoException.ts" />

/**
 * Represent a list of events
 *
 * @class EventList
 */
class EventList extends Info {

	/**
	 * Define the name of the EventList
	 *
	 * @property _name
	 * @type {string}
	 * @private
	 */
	private _name : string;

	/**
	 * Define the description of the EventList
	 *
	 * @property _description
	 * @type {string}
	 * @private
	 */
	private _description : string;

	/**
	 * Define the list of events
	 *
	 * @property _events
	 * @type {Array<Event>}
	 * @private
	 */
	private _events : Array<Event>;

	/**
	 * @method getName
	 * @returns {string}
	 */
	public getName() : string {
		return this._name;
	}

	/**
	 * @method setName
	 * @param name
	 */
	public setName(name : string) {
		this._name = name;
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
	 * @method getEvents
	 * @returns {Array<Event>}
	 */
	public getEvents() : Array<Event> {
		return this._events;
	}

	/**
	 * @method addEvent
	 * @param e
	 */
	public addEvent(e : Event) {
		this._events.push(e);
	}

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
	            name : string = "", description : string = "", events : Array<Event> = new Array<Event>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this.setName(name);
		this.setDescription(description);
		this._events = events;
	}

	static fromJSONObject(jsonObject : any) : EventList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A EventList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A EventList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A EventList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A EventList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A EventList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A EventList object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._name) == "undefined") {
			throw new InfoException("A EventList object should have a name.");
		}
		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("A EventList object should have a description.");
		}
		if(typeof(jsonObject._events) == "undefined") {
			throw new InfoException("A EventList object should have events.");
		}

		var el : EventList = new EventList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		el.setName(jsonObject._name);
		el.setDescription(jsonObject._description);

		for(var i = 0; i < jsonObject._events.length; i++) {
			var pDesc = jsonObject._events[i];
			var p : Event = Event.fromJSONObject(pDesc);
			el.addEvent(p);
		}

		return el;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : EventList) : boolean {

		if (this.getName() != info.getName() || this.getDescription() != info.getDescription() || this.getEvents().length != info.getEvents().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getEvents().forEach(function (event : Event) {
				var existEqual = false;

				info.getEvents().forEach(function(otherEvent : Event) {
					if(!existEqual) {
						existEqual = event.equals(otherEvent);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}
}