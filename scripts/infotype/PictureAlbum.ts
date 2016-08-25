/**
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Picture.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class PictureAlbum extends Info {

	/**
	 * PictureAlbum's name.
	 *
	 * @property _name
	 * @type string
	 * @private
	 */
	private _name : string;

	/**
	 * PictureAlbum's pictures.
	 *
	 * @property _pictures
	 * @type Array<Picture>
	 * @private
	 */
	private _pictures : Array<Picture>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(name : string = "", id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				pictures : Array<Picture> = new Array<Picture>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("PictureAlbum");

		this.setName(name);

		this._pictures = pictures;
	}

	/**
	 * Returns PictureAlbum's name.
	 *
	 * @method getName
	 * @returns {string} The PictureAlbum's name.
	 */
	getName() : string {
		return this._name;
	}

	/**
	 * Set the PictureAlbum's name.
	 *
	 * @method setName
	 * @param {string} name - The new PictureAlbum's name.
	 */
	setName(name : string) {
		this._name = name;
	}

	/**
	 * Returns PictureAlbum's pictures.
	 *
	 * @method getPictures
	 * @returns {Array<Picture>} The PictureAlbum's pictures.
	 */
	getPictures() : Array<Picture> {
		return this._pictures;
	}

	/**
	 * Added a Picture to PictureAlbum.
	 *
	 * @method addPicture
	 * @param {Picture} tweet - The picture to add.
	 */
	addPicture(picture : Picture) {
		this._pictures.push(picture);
	}

	/**
	 * Return a PictureAlbum instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {PictureAlbum} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : PictureAlbum {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A PictureAlbum object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A PictureAlbum object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a serviceLogo.");
		}

		if(typeof(jsonObject._name) == "undefined") {
			throw new InfoException("A PictureAlbum object should have a name.");
		}
		if(typeof(jsonObject._pictures) == "undefined") {
			throw new InfoException("A PictureAlbum object should have pictures.");
		}

		var pa : PictureAlbum = new PictureAlbum(jsonObject._name, jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		for(var i = 0; i < jsonObject._pictures.length; i++) {
			var pDesc = jsonObject._pictures[i];
			var p : Picture = Picture.fromJSONObject(pDesc);
			pa.addPicture(p);
		}

		return pa;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : PictureAlbum) : boolean {
		if(this.getName() != info.getName() || this.getPictures().length != info.getPictures().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getPictures().forEach(function (picture : Picture) {
				var existEqual = false;

				info.getPictures().forEach(function(otherPicture : Picture) {
					if(!existEqual) {
						existEqual = picture.equals(otherPicture);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._pictures, self);
	}
}