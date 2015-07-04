/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Discount.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class DiscountsList extends Info {

    /**
     * DiscountsList's discounts.
     *
     * @property _discounts
     * @type Array<Discount>
     * @private
     */
    private _discounts : Array<Discount>;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
                discounts : Array<Discount> = new Array<Discount>()) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
        this._discounts = discounts;
    }

    /**
     * Returns DiscountsList's discounts.
     *
     * @method getDiscounts
     * @returns {Array<Discount>} The DiscountsList's discounts.
     */
    getDiscounts() : Array<Discount> {
        return this._discounts;
    }

    /**
     * Added a Discount to DiscountsList.
     *
     * @method addDiscount
     * @param {Discount} discount - The feedNode to add.
     */
    addDiscount(discount : Discount) {
        this._discounts.push(discount);
    }

    /**
     * Return a DiscountsList instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {DiscountsList} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : DiscountsList {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A DiscountsList object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A DiscountsList object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A DiscountsList object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A DiscountsList object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A DiscountsList object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A DiscountsList object should have a durationToDisplay.");
        }
        if(typeof(jsonObject._discounts) == "undefined") {
            throw new InfoException("A DiscountsList object should have discounts.");
        }
        var dl : DiscountsList = new DiscountsList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

        for(var i = 0; i < jsonObject._discounts.length; i++) {
            var dDesc = jsonObject._discounts[i];
            var d : Discount = Discount.fromJSONObject(dDesc);
            dl.addDiscount(d);
        }

        return dl;
    }

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : DiscountsList) : boolean {
		if(this.getDiscounts().length != info.getDiscounts().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getDiscounts().forEach(function (discount : Discount) {
				var existEqual = false;

				info.getDiscounts().forEach(function(otherDiscount : Discount) {
					if(!existEqual) {
						existEqual = discount.equals(otherDiscount);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}
}