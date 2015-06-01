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
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
				users : Array<User> = new Array<User>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
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

		if(typeof(jsonObject._users) == "undefined") {
			throw new InfoException("A UserList object should have users.");
		}

		var tl : UserList = new UserList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._users.length; i++) {
			var tDesc = jsonObject._users[i];
			var t : User = User.fromJSONObject(tDesc);
			tl.addUser(t);
		}

		return tl;
	}
}