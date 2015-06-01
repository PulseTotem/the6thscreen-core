/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Picture.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class PictureAlbum extends Info {

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
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				pictures : Array<Picture> = new Array<Picture>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
		this._pictures = pictures;
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

		if(typeof(jsonObject._pictures) == "undefined") {
			throw new InfoException("A PictureAlbum object should have pictures.");
		}

		var pa : PictureAlbum = new PictureAlbum(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._pictures.length; i++) {
			var pDesc = jsonObject._pictures[i];
			var p : Picture = Picture.fromJSONObject(pDesc);
			pa.addPicture(p);
		}

		return pa;
	}
}