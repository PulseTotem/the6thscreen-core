/**
 * @author Simon Urli <simon@pulsetotem.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Map.ts" />

class MapList extends Info {
    /**
     * MapList's maps.
     *
     * @property _maps
     * @type Array<Map>
     * @private
     */
    private _maps : Array<Map>;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
                maps : Array<Map> = new Array<Map>()) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

        this.setClassName("MapList");

        this._maps = maps;
    }

    /**
     * Returns MapList's maps.
     *
     * @method getMaps
     * @returns {Array<Map>} The MapList's maps.
     */
    getMaps() : Array<Map> {
        return this._maps;
    }

    /**
     * Added a Map to MapList.
     *
     * @method addMap
     * @param {Map} map - The map to add.
     */
    addMap(map : Map) {
        this._maps.push(map);
    }

    /**
     * Return a MapList instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {MapList} The MapList instance.
     */
    static fromJSONObject(jsonObject : any) : MapList {
        var mapList:MapList = Info.getInfoFromJSONObject<MapList>(jsonObject, MapList);

        if (typeof(jsonObject._maps) == "undefined") {
            throw new InfoException("A MapList object should have maps.");
        }

        for (var i = 0; i < jsonObject._maps.length; i++) {
            var cMap = jsonObject._maps[i];
            var map = Map.fromJSONObject(cMap);

            mapList.addMap(map);
        }

        return mapList;
    }

    /**
     * Check if 'this' is equal to info in param.
     *
     * @method equals
     * @param {Info} info - Info to update.
     * @return {boolean} 'true' if objects are equals, 'false' otherwise
     */
    equals(info : MapList) : boolean {
        if(this.getMaps().length != info.getMaps().length) {
            return false;
        } else {
            var equalStatus = true;

            this.getMaps().forEach(function (map : Map) {
                var existEqual = false;

                info.getMaps().forEach(function(otherMap : Map) {
                    if(!existEqual) {
                        existEqual = map.equals(otherMap);
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
        Info.replaceServiceInfoInChildren(this._maps, self);
    }
}