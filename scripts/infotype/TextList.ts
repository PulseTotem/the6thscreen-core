/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./TextInfo.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class TextList extends Info {

	/**
	 * TextList's texts.
	 *
	 * @property _texts
	 * @type Array<TextInfo>
	 * @private
	 */
	private _texts : Array<TextInfo>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				texts : Array<TextInfo> = new Array<TextInfo>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("TextList");

		this._texts = texts;
	}

	/**
	 * Returns TextList's texts.
	 *
	 * @method getTexts
	 * @returns {Array<TextInfo>} The TextList's texts.
	 */
	getTexts() : Array<TextInfo> {
		return this._texts;
	}

	/**
	 * Added a Text to TextList.
	 *
	 * @method addText
	 * @param {TextInfo} text - The feedNode to add.
	 */
	addText(text : TextInfo) {
		this._texts.push(text);
	}

	/**
	 * Return a TextList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {TextList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : TextList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A TextList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A TextList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A TextList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A TextList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A TextList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A TextList object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A TextList object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A TextList object should have a serviceName.");
		}

		if(typeof(jsonObject._texts) == "undefined") {
			throw new InfoException("A TextList object should have texts.");
		}

		var cl : TextList = new TextList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		for(var i = 0; i < jsonObject._texts.length; i++) {
			var cDesc = jsonObject._texts[i];
			var c : TextInfo = TextInfo.fromJSONObject(cDesc);
			cl.addText(c);
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
	equals(info : TextList) : boolean {
		if(this.getTexts().length != info.getTexts().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getTexts().forEach(function (text : TextInfo) {
				var existEqual = false;

				info.getTexts().forEach(function(otherText : TextInfo) {
					if(!existEqual) {
						existEqual = text.equals(otherText);
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
		Info.replaceServiceInfoInChildren(this._texts, self);
	}
}