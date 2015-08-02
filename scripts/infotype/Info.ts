/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./priorities/InfoPriority.ts" />
/// <reference path="../logger/Logger.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Info {
    public static DEFAULT_DURATION = 10;

	private _id : string;
	private _priority : number;
	private _creationDate : Date;
	private _castingDate : Date;
	private _obsoleteDate : Date;
	private _durationToDisplay : number;
    private _serviceLogo : string;
    private _serviceName : string;

	constructor(id : string = "noId", priority : number = InfoPriority.LOW, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = Info.DEFAULT_DURATION, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "") {

        this.setId(id);
        this.setPriority(priority);
        this.setCreationDate(creationDate);
        this.setObsoleteDate(obsoleteDate);
        this.setDurationToDisplay(durationToDisplay);
        this.setCastingDate(castingDate);
        this.setServiceLogo(serviceLogo);
        this.setServiceName(serviceName);
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

    getServiceLogo() {
        return this._serviceLogo;
    }

    setServiceLogo(serviceLogo : string) {
        this._serviceLogo = serviceLogo;
    }

    getServiceName() {
        return this._serviceName;
    }

    setServiceName(serviceName : string) {
        this._serviceName = serviceName;
    }

    static getInfoFromJSONObject<T extends Info>(jsonObject : any, type: any ) : T {
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
        if(typeof(jsonObject._serviceLogo) == "undefined") {
            throw new InfoException("A Picture object should have a serviceLogo.");
        }
        if(typeof(jsonObject._serviceName) == "undefined") {
            throw new InfoException("A Picture object should have a serviceName.");
        }

        var result = new type();
        result.setId(jsonObject._id);
        result.setPriority(jsonObject._priority);
        result.setCreationDate(jsonObject._creationDate);
        result.setCastingDate(jsonObject._castingDate);
        result.setObsoleteDate(jsonObject._obsoleteDate);
        result.setDurationToDisplay(jsonObject._durationToDisplay);
        result.setServiceLogo(jsonObject._serviceLogo);
        result.setServiceName(jsonObject._serviceName);
        return result;
    }

	/**
	 * Return an array of Info instance from a JSON Array.
	 *
	 * @method fromJSONArray
	 * @static
	 * @param {JSONArray} json - The JSON Array
	 * @param {Info Class} infoClass - The Info Class contained in JSON Array
	 */
	static fromJSONArray(jsonArray : any, infoClass : any) {
		var newListInfos = new Array();

		for(var iInfo in jsonArray) {
			try {
				var infoDesc = jsonArray[iInfo];
				var infoInstance = infoClass.fromJSONObject(infoDesc);
				newListInfos.push(infoInstance);
			} catch(e) {
				Logger.error(e);
			}
		}

		return newListInfos;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Info) : boolean {
		Logger.error("Info - equals : Method need to be implemented.");
		return false;
	}

    propagateServiceInfo() {}

    replaceServiceInfoInChildren(children : Array<Info>, parent : Info) {
        children.forEach(function (info: Info) {
            info.setServiceLogo(parent.getServiceLogo());
            info.setServiceName(parent.getServiceName());
        });
    }
}