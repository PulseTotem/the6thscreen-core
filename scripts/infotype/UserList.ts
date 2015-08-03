/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./User.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class UserList extends Info {

	/**
	 * UserList's users.
	 *
	 * @property _users
	 * @type Array<User>
	 * @private
	 */
	private _users : Array<User>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				users : Array<User> = new Array<User>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);
		this._users = users;
	}

	/**
	 * Returns UserList's users.
	 *
	 * @method getUsers
	 * @returns {Array<User>} The UserList's users.
	 */
	getUsers() : Array<User> {
		return this._users;
	}

	/**
	 * Added a User to UserList.
	 *
	 * @method addUser
	 * @param {User} user - The feedNode to add.
	 */
	addUser(user : User) {
		this._users.push(user);
	}

	/**
	 * Return a UserList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {UserList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : UserList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A UserList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A UserList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A UserList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A UserList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A UserList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A UserList object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A UserList object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A UserList object should have a serviceName.");
		}

		if(typeof(jsonObject._users) == "undefined") {
			throw new InfoException("A UserList object should have users.");
		}

		var tl : UserList = new UserList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		for(var i = 0; i < jsonObject._users.length; i++) {
			var tDesc = jsonObject._users[i];
			var t : User = User.fromJSONObject(tDesc);
			tl.addUser(t);
		}

		return tl;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : UserList) : boolean {
		if(this.getUsers().length != info.getUsers().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getUsers().forEach(function (user : User) {
				var existEqual = false;

				info.getUsers().forEach(function(otherUser : User) {
					if(!existEqual) {
						existEqual = user.equals(otherUser);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._users, self);
	}
}