/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class User extends Info {

	/**
	 * User's username.
	 *
	 * @property _username
	 * @type string
	 * @private
	 */
	private _username : string;

	/**
	 * User's realname.
	 *
	 * @property _realname
	 * @type string
	 * @private
	 */
	private _realname : string;

	/**
	 * User's location.
	 *
	 * @property _location
	 * @type string
	 * @private
	 */
	private _location : string;

	/**
	 * User's profilPicture.
	 *
	 * @property _profilPicture
	 * @type string
	 * @private
	 */
	private _profilPicture : string;


	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				username : string = null, realname : string = null, location : string = null, profilPicture : string = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("User");

		this._username = username;
		this._realname = realname;
		this._location = location;
		this._profilPicture = profilPicture;
	}

	/**
	 * Returns User's username.
	 *
	 * @method getUsername
	 * @returns {string} The User's username.
	 */
	getUsername() : string {
		return this._username;
	}

	/**
	 * Set the User's username.
	 *
	 * @method setUsername
	 * @param {string} username - The new User's username.
	 */
	setUsername(username : string) {
		this._username = username;
	}

	/**
	 * Returns User's realname.
	 *
	 * @method getRealname
	 * @returns {string} The User's realname.
	 */
	getRealname() : string {
		return this._realname;
	}

	/**
	 * Set the User's realname.
	 *
	 * @method setRealname
	 * @param {string} realname - The new User's realname.
	 */
	setRealname(realname : string) {
		this._realname = realname;
	}

	/**
	 * Returns User's location.
	 *
	 * @method getLocation
	 * @returns {string} The User's location.
	 */
	getLocation() : string {
		return this._location;
	}

	/**
	 * Set the User's location.
	 *
	 * @method setLocation
	 * @param {string} location - The new User's location.
	 */
	setLocation(location : string) {
		this._location = location;
	}

	/**
	 * Returns User's profilPicture.
	 *
	 * @method getProfilPicture
	 * @returns {string} The User's profilPicture.
	 */
	getProfilPicture() : string {
		return this._profilPicture;
	}

	/**
	 * Set the User's profilPicture.
	 *
	 * @method setProfilPicture
	 * @param {string} profilPicture - The new User's profilPicture.
	 */
	setProfilPicture(profilPicture : string) {
		this._profilPicture = profilPicture;
	}

	/**
	 * Return a User instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {User} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : User {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A User object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A User object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A User object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A User object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A User object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A User object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A User object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A User object should have a serviceName.");
		}

		if(typeof(jsonObject._username) == "undefined") {
			throw new InfoException("A User object should have a username.");
		}
		if(typeof(jsonObject._realname) == "undefined") {
			throw new InfoException("A User object should have a realname.");
		}
		if(typeof(jsonObject._location) == "undefined") {
			throw new InfoException("A User object should have a location.");
		}
		if(typeof(jsonObject._profilPicture) == "undefined") {
			throw new InfoException("A User object should have a profilPicture.");
		}

		var u : User = new User(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._username, jsonObject._realname, jsonObject._location, jsonObject._profilPicture);

		return u;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : User) : boolean {
		return this.getLocation() == info.getLocation() &&
				this.getProfilPicture() == info.getProfilPicture() &&
				this.getRealname() == info.getRealname() &&
				this.getUsername() == info.getUsername();
	}
}