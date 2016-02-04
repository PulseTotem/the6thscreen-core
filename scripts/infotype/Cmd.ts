/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Cmd extends Info {

	/**
	 * Cmd's cmd.
	 *
	 * @property _cmd
	 * @type string
	 * @private
	 */
	private _cmd : string;

	/**
	 * Cmd's args.
	 *
	 * @property _args
	 * @type Array<string>
	 * @private
	 */
	private _args : Array<string>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
	            cmd : string = "", args : Array<string> = new Array<string>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("Cmd");

		this._cmd = cmd;
		this._args = args;
	}

	/**
	 * Returns Cmd's cmd.
	 *
	 * @method getCmd
	 * @returns {string} The Cmd's cmd.
	 */
	getCmd() : string {
		return this._cmd;
	}

	/**
	 * Set the Cmd's cmd.
	 *
	 * @method setCmd
	 * @param {string} cmd - The new Cmd's cmd.
	 */
	setCmd(cmd : string) {
		this._cmd = cmd;
	}

	/**
	 * Returns Cmd's arguments.
	 *
	 * @method getArgs
	 * @returns {Array<string>} The Cmd's args.
	 */
	getArgs() : Array<string> {
		return this._args;
	}

	/**
	 * Set the Cmd's args.
	 *
	 * @method setArgs
	 * @param {Array<string>} args - The new Cmd's args.
	 */
	setArgs(args : Array<string>) {
		this._args = args;
	}

	/**
	 * Return a Cmd instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Cmd} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Cmd {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Cmd object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Cmd object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Cmd object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Cmd object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Cmd object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Cmd object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A Cmd object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A Cmd object should have a serviceLogo.");
		}

		if(typeof(jsonObject._cmd) == "undefined") {
			throw new InfoException("A Cmd object should have a cmd.");
		}

		if(typeof(jsonObject._args) == "undefined") {
			throw new InfoException("A Cmd object should have args.");
		}

		var t : Cmd = new Cmd(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
			jsonObject._cmd, jsonObject._args);

		return t;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : Cmd) : boolean {
		return this.getCmd() == info.getCmd() &&
			this.getArgs() == info.getArgs();
	}
}