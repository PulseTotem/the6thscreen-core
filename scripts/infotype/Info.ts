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

	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, castingDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000) {
		this._id = id;
        this._priority = priority;
        this._creationDate = creationDate;
        this._castingDate = castingDate;
        this._obsoleteDate = obsoleteDate;
        this._durationToDisplay = durationToDisplay;
	}

    getId() {
        return this._id;
    }

    getPriority() {
        return this._priority;
    }

    getCreationDate() {
        return this._creationDate;
    }

    getCastingDate() {
        return this._castingDate;
    }

	getObsoleteDate() {
		return this._obsoleteDate;
	}

    getDurationToDisplay() {
        return this._durationToDisplay;
    }
}