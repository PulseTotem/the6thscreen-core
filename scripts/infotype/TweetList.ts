/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./Tweet.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class TweetList extends Info {

	/**
	 * TweetList's tweets.
	 *
	 * @property _tweets
	 * @type Array<Tweet>
	 * @private
	 */
	private _tweets : Array<Tweet>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
				tweets : Array<Tweet> = new Array<Tweet>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
		this._tweets = tweets;
	}

	/**
	 * Returns TweetList's tweets.
	 *
	 * @method getTweets
	 * @returns {Array<Tweet>} The TweetList's tweets.
	 */
	getTweets() : Array<Tweet> {
		return this._tweets;
	}

	/**
	 * Added a Tweet to TweetList.
	 *
	 * @method addTweet
	 * @param {Tweet} tweet - The feedNode to add.
	 */
	addTweet(tweet : Tweet) {
		this._tweets.push(tweet);
	}

	/**
	 * Return a TweetList instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {TweetList} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : TweetList {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A TweetList object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A TweetList object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A TweetList object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A TweetList object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A TweetList object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A TweetList object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._tweets) == "undefined") {
			throw new InfoException("A TweetList object should have tweets.");
		}
		var tl : TweetList = new TweetList(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._tweets.length; i++) {
			var tDesc = jsonObject._tweets[i];
			var t : Tweet = Tweet.fromJSONObject(tDesc);
			tl.addTweet(t);
		}

		return tl;
	}
}