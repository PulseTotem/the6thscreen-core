/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./CityEvent.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class EventList extends Info {

	private _events : Array<CityEvent>;

	public getEvents() : Array<CityEvent> {
		return this._events;
	}

	public addEvent(e : CityEvent) {
		this._events.push(e);
	}

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
	            events : Array<CityEvent> = new Array<CityEvent>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
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

		if(typeof(jsonObject._events) == "undefined") {
			throw new InfoException("A EventList object should have events.");
		}

		var el : EventList = new EventList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._events.length; i++) {
			var pDesc = jsonObject._events[i];
			var p : CityEvent = CityEvent.fromJSONObject(pDesc);
			el.addEvent(p);
		}

		return el;
	}
}