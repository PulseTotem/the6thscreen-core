/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 * @author Simon Urli <simon@the6thscreen.fr, simon.urli@gmail.com>
 */

class Info {
	private _id : string;
	private _priority : number;
	private _creationDate : Date;
	private _castingDate : Date;
	private _obsoleteDate : Date;
	private _durationToDisplay : number;

	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null) {
		this._id = id;
        this._priority = priority;
        this._creationDate = creationDate;
        this._obsoleteDate = obsoleteDate;
        this._durationToDisplay = durationToDisplay;
        this._castingDate = castingDate;
	}

    getId() {
        return this._id;
    }

    setId(id : string) {
        this._id = id;
    }

    getPriority() {
        return this._priority;
    }

    setPriority(priority : number) {
        this._priority = priority;
    }

    getCreationDate() {
        return this._creationDate;
    }

    setCreationDate(creationDate : Date) {
        this._creationDate = creationDate;
    }

    getCastingDate() {
        return this._castingDate;
    }

    setCastingDate(castingDate : Date) {
        this._castingDate = castingDate;
    }

	getObsoleteDate() {
		return this._obsoleteDate;
	}

    setObsoleteDate(obsoleteDate : Date) {
        this._obsoleteDate = obsoleteDate;
    }

    getDurationToDisplay() {
        return this._durationToDisplay;
    }

    setDurationToDisplay(durationToDisplay : number) {
        this._durationToDisplay = durationToDisplay;
    }
}