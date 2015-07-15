/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Cmd.ts" />
/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class CmdList extends Info {

	/**
	 * CmdList's cmds.
	 *
	 * @property _cmds
	 * @type Array<Cmd>
	 * @private
	 */
	private _cmds : Array<Cmd>;


	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
	            cmds : Array<Cmd> = new Array<Cmd>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._cmds = cmds;
	}

	/**
	 * Returns CmdList's cmds.
	 *
	 * @method getCmds
	 * @returns {Array<Cmd>} The CmdList's cmds.
	 */
	getCmds() : Array<Cmd> {
		return this._cmds;
	}

	/**
	 * Add a new cmd to the list
	 *
	 * @method addCmd
	 * @param cmd The cmd to add.
	 */
	addCmd(cmd : Cmd) {
		this._cmds.push(cmd);
	}

	/**
	 * Return a CmdList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {CmdList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : CmdList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A CmdList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A CmdList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A CmdList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A CmdList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A CmdList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A CmdList object should have a durationToDisplay.");
		}

		if(typeof(jsonObject._cmds) == "undefined") {
			throw new InfoException("A CmdList object should have cmds.");
		}

		var t : CmdList = new CmdList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._cmds.length; i++) {
			var pDesc = jsonObject._cmds[i];
			var p : Cmd = Cmd.fromJSONObject(pDesc);
			t.addCmd(p);
		}

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : CmdList) : boolean {
		return this.getCmds() == info.getCmds();
	}
}