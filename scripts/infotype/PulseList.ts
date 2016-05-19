/**
 * @author Simon Urli <simon@pulsetotem.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./PulseInfo.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class PulseList extends Info {

    /**
     * PulseList's pulseInfos.
     *
     * @property _pulseInfos
     * @type Array<PulseInfo>
     * @private
     */
    private _pulseInfos : Array<PulseInfo>;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
                pulseInfos : Array<PulseInfo> = new Array<PulseInfo>()) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

        this.setClassName("PulseList");

        this._pulseInfos = pulseInfos;
    }

    /**
     * Returns PulseList's pulseInfos.
     *
     * @method getPulses
     * @returns {Array<PulseInfo>} The PulseList's pulseInfos.
     */
    getPulses() : Array<PulseInfo> {
        return this._pulseInfos;
    }

    /**
     * Added a Pulse to PulseList.
     *
     * @method addPulse
     * @param {PulseInfo} pulseInfo - The feedNode to add.
     */
    addPulse(pulseInfo : PulseInfo) {
        this._pulseInfos.push(pulseInfo);
    }

    /**
     * Return a PulseList instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {PulseList} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : PulseList {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A PulseList object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A PulseList object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A PulseList object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A PulseList object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A PulseList object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A PulseList object should have a durationToDisplay.");
        }
        if(typeof(jsonObject._serviceLogo) == "undefined") {
            throw new InfoException("A PulseList object should have a serviceLogo.");
        }
        if(typeof(jsonObject._serviceName) == "undefined") {
            throw new InfoException("A PulseList object should have a serviceName.");
        }

        if(typeof(jsonObject._pulseInfos) == "undefined") {
            throw new InfoException("A PulseList object should have pulseInfos.");
        }

        var cl : PulseList = new PulseList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

        for(var i = 0; i < jsonObject._pulseInfos.length; i++) {
            var cDesc = jsonObject._pulseInfos[i];
            var c : PulseInfo = PulseInfo.fromJSONObject(cDesc);
            cl.addPulse(c);
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
    equals(info : PulseList) : boolean {
        if(this.getPulses().length != info.getPulses().length) {
            return false;
        } else {
            var equalStatus = true;

            this.getPulses().forEach(function (pulseInfo : PulseInfo) {
                var existEqual = false;

                info.getPulses().forEach(function(otherPulse : PulseInfo) {
                    if(!existEqual) {
                        existEqual = pulseInfo.equals(otherPulse);
                    }
                });

                equalStatus = equalStatus && existEqual;
            });

            return equalStatus;
        }
    }

    /**
     * Propagate service info to all children infos.
     *
     * @method propagateServiceInfo
     */
    propagateServiceInfo() {
        var self = this;
        Info.replaceServiceInfoInChildren(this._pulseInfos, self);
    }
}