/**
 * @author Simon Urli <simon@pulsetotem.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./MapType.ts" />

class Map extends Info {

    /**
     * Adress of the center point of the map
     *
     * @property _address
     * @private
     */
    private _address : string;

    /**
     * Longitude of the center point of the map
     *
     * @property _longitude
     * @private
     */
    private _longitude : number;

    /**
     * Latitude of the center point of the map
     *
     * @property _latitude
     * @private
     */
    private _latitude : number;

    /**
     * Zoom on the center point of the map
     * For Google Map this value is comprised between 0 (the entire earth) to 20 (a specific building)
     *
     * @property _zoom
     * @private
     */
    private _zoom : number;

    /**
     * Type of the Map
     *
     * @property _type
     * @private
     */
    private _type : MapType;

    /**
     * Determine if the map should display a layer with traffic information
     *
     * @property _withTraffic
     * @private
     */
    private _withTraffic : boolean;

    /**
     * Determine if the map should display a layer with transit information
     *
     * @property _withTransit
     * @private
     */
    private _withTransit : boolean;

    /**
     * The api key needed for example for Google Maps
     *
     * @property _apiKey
     * @private
     */
    private _apiKey : string;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
                address : string = null, long : number = null, lat : number = null, zoom : number = null, type : MapType = null, withTraffic : boolean = null, withTransit : boolean = null, apiKey : string = null) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

        this.setClassName("Map");
        this.setAddress(address);
        this.setLatitude(lat);
        this.setLongitude(long);
        this.setZoom(zoom);
        this.setType(type);
        this.setWithTraffic(withTraffic);
        this.setWithTransit(withTransit);
        this.setApiKey(apiKey);
    }

    /**
     * Get with transit value
     *
     * @method getWithTransit
     * @returns {boolean}
     */
    public getWithTransit():boolean {
        return this._withTransit;
    }


    /**
     * Get Address value
     * @method getAddress
     * @returns {string}
     */
    public getAddress():string {
        return this._address;
    }

    /**
     * Get longitude value
     *
     * @method getLongitude
     * @returns {number}
     */
    public getLongitude():number {
        return this._longitude;
    }

    /**
     * Get Latitude value
     *
     * @method getLatitude
     * @returns {number}
     */
    public getLatitude():number {
        return this._latitude;
    }

    /**
     * Get zoom value
     *
     * @method getZoom
     * @returns {number}
     */
    public getZoom():number {
        return this._zoom;
    }

    /**
     * Get type value
     *
     * @method getType
     * @returns {MapType}
     */
    public getType():MapType {
        return this._type;
    }

    /**
     * Get withTraffic value
     *
     * @method getWithTraffic
     * @returns {boolean}
     */
    public getWithTraffic():boolean {
        return this._withTraffic;
    }

    /**
     * Get apiKey value
     *
     * @method getApiKey
     * @returns {string}
     */
    public getApiKey():string {
        return this._apiKey;
    }

    /**
     * Set Address value
     *
     * @method setAddress
     * @param value
     */
    public setAddress(value:string) {
        this._address = value;
    }

    /**
     * Set Longitude value
     *
     * @method setLongitude
     * @param value
     */
    public setLongitude(value:number) {
        this._longitude = value;
    }

    /**
     * Set latitude value
     *
     * @method setLatitude
     * @param value
     */
    public setLatitude(value:number) {
        this._latitude = value;
    }

    /**
     * Set zoom value
     *
     * @method setZoom
     * @param value
     */
    public setZoom(value:number) {
        this._zoom = value;
    }

    /**
     * Set type value
     *
     * @method setType
     * @param value
     */
    public setType(value:MapType) {
        this._type = value;
    }

    /**
     * Set withTraffic value
     *
     * @method setWithTraffic
     * @param value
     */
    public setWithTraffic(value:boolean) {
        this._withTraffic = value;
    }

    /**
     * Set with transit value
     *
     * @method setWithTransit
     * @param value
     */
    public setWithTransit(value:boolean) {
        this._withTransit = value;
    }

    /**
     * Set apiKey value
     *
     * @method setApiKey
     * @param value
     */
    public setApiKey(value:string) {
        this._apiKey = value;
    }

    /**
     * Return a Map instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {Map} The map instance.
     */
    static fromJSONObject(jsonObject : any) : Map {
        var map : Map = Info.getInfoFromJSONObject<Map>(jsonObject, Map);

        if(typeof(jsonObject._address) == "undefined") {
            throw new InfoException("A Map object should have an address.");
        }
        if(typeof(jsonObject._longitude) == "undefined") {
            throw new InfoException("A Map object should have a longitude.");
        }
        if(typeof(jsonObject._latitude) == "undefined") {
            throw new InfoException("A Map object should have a latitude.");
        }
        if(typeof(jsonObject._zoom) == "undefined") {
            throw new InfoException("A Map object should have a zoom value.");
        }
        if(typeof(jsonObject._type) == "undefined") {
            throw new InfoException("A Map object should have a type.");
        }
        if(typeof(jsonObject._withTraffic) == "undefined") {
            throw new InfoException("A Map object should have a withTraffic value.");
        }
        if(typeof(jsonObject._withTransit) == "undefined") {
            throw new InfoException("A Map object should have a withTransit value.");
        }
        if (typeof(jsonObject._apiKey) == "undefined") {
            throw new InfoException("A Map object should have an apiKey value.");
        }

        map.setAddress(jsonObject._address);
        map.setLatitude(jsonObject._latitude);
        map.setLongitude(jsonObject._longitude);
        map.setZoom(jsonObject._zoom);
        map.setType(jsonObject._type);
        map.setWithTraffic(jsonObject._withTraffic);
        map.setWithTransit(jsonObject._withTransit);
        map.setApiKey(jsonObject._apiKey);

        return map;
    }

    /**
     * Check if 'this' is equal to info in param.
     *
     * @method equals
     * @param {Info} info - Info to update.
     * @return {boolean} 'true' if objects are equals, 'false' otherwise
     */
    equals(info : Map) : boolean {
        return ( this.getAddress() == info.getAddress() &&
                    this.getLatitude() == info.getLatitude() &&
                    this.getLongitude() == info.getLongitude() &&
                    this.getType() == info.getType() &&
                    this.getWithTraffic() == info.getWithTraffic() &&
                    this.getWithTransit() == info.getWithTransit() &&
                    this.getApiKey() == info.getApiKey());
    }

}