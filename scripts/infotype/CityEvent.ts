/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class CityEvent extends Info {

	private _start : Date;
	private _end : Date;
	private _name : string;


	public start():Date {
		return this._start;
	}

	public setStart(value:Date) {
		this._start = value;
	}

	public name():string {
		return this._name;
	}

	public setName(value:string) {
		this._name = value;
	}

	public end():Date {
		return this._end;
	}

	public setEnd(value:Date) {
		this._end = value;
	}

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
	            start : Date = null, end : Date = null, name : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._start = start;
		this._end = end;
		this._name = name;
	}

	static fromJSONObject(jsonObject : any) : CityEvent {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Picture object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Picture object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Picture object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Picture object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Picture object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Picture object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._name) == "undefined") {
			throw new InfoException("A Picture object should have a name.");
		}
		if(typeof(jsonObject._start) == "undefined") {
			throw new InfoException("A Picture object should have a start.");
		}
		if(typeof(jsonObject._end) == "undefined") {
			throw new InfoException("A Picture object should have an end.");
		}

		var e : CityEvent = new CityEvent(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);
		e.setName(jsonObject._name);
		e.setStart(jsonObject._start);
		e.setEnd(jsonObject._end);

		return e;
	}
}