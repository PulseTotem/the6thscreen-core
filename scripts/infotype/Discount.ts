/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />

class Discount extends Info {

    /**
     * Discount's type.
     *
     * @property _type
     * @type number
     * @private
     */
    private _type : number;

    /**
     * Discount's value.
     *
     * @property _value
     * @type number
     * @private
     */
    private _value : number;

    /**
     * Discount's productId.
     *
     * @property _productId
     * @type string
     * @private
     */
    private _productId : string;

    /**
     * Discount's productName.
     *
     * @property _productName
     * @type string
     * @private
     */
    private _productName : string;

    /**
     * Discount's productBarCode.
     *
     * @property _productBarCode
     * @type string
     * @private
     */
    private _productBarCode : string;

    /**
     * Discount's productImage.
     *
     * @property _productImage
     * @type string
     * @private
     */
    private _productImage : string;

    /**
     * Discount's productDescription.
     *
     * @property _productDescription
     * @type string
     * @private
     */
    private _productDescription : string;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
                type : number = null, value : number = null, productId : string = null, productName : string = null, productBarCode : string = null, productImage : string = null, productDescription : string = null) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

        this._type = type;
        this._value = value;
        this._productId = productId;
        this._productName = productName;
        this._productBarCode = productBarCode;
        this._productImage = productImage;
        this._productDescription = productDescription;
    }

    /**
     * Returns Discount's type.
     *
     * @method getType
     * @returns {number} The Discount's type.
     */
    getType() : number {
        return this._type;
    }

    /**
     * Set the Discount's type.
     *
     * @method setType
     * @param {number} type - The new Discount's type.
     */
    setType(type : number) {
        this._type = type;
    }

    /**
     * Returns Discount's value.
     *
     * @method getValue
     * @returns {number} The Discount's value.
     */
    getValue() : number {
        return this._value;
    }

    /**
     * Set the Discount's value.
     *
     * @method setValue
     * @param {number} value - The new Discount's value.
     */
    setValue(value : number) {
        this._value = value;
    }

    /**
     * Returns Discount's productId.
     *
     * @method getProductId
     * @returns {string} The Discount's productId.
     */
    getProductId() : string {
        return this._productId;
    }

    /**
     * Set the Discount's productId.
     *
     * @method setProductId
     * @param {string} productId - The new Discount's productId.
     */
    setProductId(productId : string) {
        this._productId = productId;
    }

    /**
     * Returns Discount's productName.
     *
     * @method getProductName
     * @returns {string} The Discount's productName.
     */
    getProductName() : string {
        return this._productName;
    }

    /**
     * Set the Discount's productName.
     *
     * @method setProductName
     * @param {string} productName - The new Discount's productName.
     */
    setProductName(productName : string) {
        this._productName = productName;
    }

    /**
     * Returns Discount's productBarCode.
     *
     * @method getProductBarCode
     * @returns {string} The Discount's productBarCode.
     */
    getProductBarCode() : string {
        return this._productBarCode;
    }

    /**
     * Set the Discount's productBarCode.
     *
     * @method setProductBarCode
     * @param {string} productBarCode - The new Discount's productBarCode.
     */
    setProductBarCode(productBarCode : string) {
        this._productBarCode = productBarCode;
    }

    /**
     * Returns Discount's productImage.
     *
     * @method getProductImage
     * @returns {string} The Discount's productImage.
     */
    getProductImage() : string {
        return this._productImage;
    }

    /**
     * Set the Discount's productImage.
     *
     * @method setProductImage
     * @param {string} productImage - The new Discount's productImage.
     */
    setProductImage(productImage : string) {
        this._productImage = productImage;
    }

    /**
     * Returns Discount's productDescription.
     *
     * @method getProductDescription
     * @returns {string} The Discount's productDescription.
     */
    getProductDescription() : string {
        return this._productDescription;
    }

    /**
     * Set the Discount's productDescription.
     *
     * @method setProductDescription
     * @param {string} productDescription - The new Discount's productDescription.
     */
    setProductDescription(productDescription : string) {
        this._productDescription = productDescription;
    }

    /**
     * Return a Discount instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {Discount} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : Discount {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A Discount object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A Discount object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A Discount object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A Discount object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A Discount object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A Discount object should have a durationToDisplay.");
        }
        if(typeof(jsonObject._type) == "undefined") {
            throw new InfoException("A Discount object should have a type.");
        }
        if(typeof(jsonObject._value) == "undefined") {
            throw new InfoException("A Discount object should have a value.");
        }
        if(typeof(jsonObject._productId) == "undefined") {
            throw new InfoException("A Discount object should have a productId.");
        }
        if(typeof(jsonObject._productName) == "undefined") {
            throw new InfoException("A Discount object should have a productName.");
        }
        if(typeof(jsonObject._productBarCode) == "undefined") {
            throw new InfoException("A Discount object should have a productBarCode.");
        }
        if(typeof(jsonObject._productImage) == "undefined") {
            throw new InfoException("A Discount object should have a productImage.");
        }
        if(typeof(jsonObject._productDescription) == "undefined") {
            throw new InfoException("A Discount object should have a productDescription.");
        }
        var d : Discount = new Discount(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
            jsonObject._type, jsonObject._value, jsonObject._productId, jsonObject._productName, jsonObject._productBarCode, jsonObject._productImage, jsonObject._productDescription);

        return d;
    }
}