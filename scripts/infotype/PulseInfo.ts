/**
 * @author Simon Urli <simon@pulsetotem.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class PulseInfo extends Info {

    /**
     * PulseInfo's value.
     *
     * @property _value
     * @type string
     * @private
     */
    private _value : number;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
                value : number = null) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

        this.setClassName("PulseInfo");

        this._value = value;
    }

    /**
     * Returns PulseInfo's value.
     *
     * @method getValue
     * @returns {string} The PulseInfo's value.
     */
    getValue() : number {
        return this._value;
    }

    /**
     * Set the PulseInfo's value.
     *
     * @method setValue
     * @param {string} value - The new PulseInfo's value.
     */
    setValue(value : number) {
        this._value = value;
    }

    /**
     * Return a PulseInfo instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {PulseInfo} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : PulseInfo {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A PulseInfo object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A PulseInfo object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A PulseInfo object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A PulseInfo object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A PulseInfo object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A PulseInfo object should have a durationToDisplay.");
        }
        if(typeof(jsonObject._serviceLogo) == "undefined") {
            throw new InfoException("A PulseInfo object should have a serviceLogo.");
        }
        if(typeof(jsonObject._serviceName) == "undefined") {
            throw new InfoException("A PulseInfo object should have a serviceName.");
        }

        if(typeof(jsonObject._value) == "undefined") {
            throw new InfoException("A PulseInfo object should have a value.");
        }

        var t : PulseInfo = new PulseInfo(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
            jsonObject._value);

        return t;
    }

    /**
     * Check if 'this' is equal to info in param.
     *
     * @method equals
     * @param {Info} info - Info to update.
     * @return {boolean} 'true' if objects are equals, 'false' otherwise
     */
    equals(info : PulseInfo) : boolean {
        return this.getValue() == info.getValue();
    }
}