/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./User.ts" />
/// <reference path="./Picture.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class Tweet extends Info {

	/**
	 * Tweet's owner.
	 *
	 * @property _owner
	 * @type User
	 * @private
	 */
	private _owner : User;

	/**
	 * Tweet's message.
	 *
	 * @property _message
	 * @type string
	 * @private
	 */
	private _message : string;

	/**
	 * Tweet's favorite count.
	 *
	 * @property _favoriteCount
	 * @type number
	 * @private
	 */
	private _favoriteCount : number;

	/**
	 * Tweet's retweet count.
	 *
	 * @property _retweetCount
	 * @type number
	 * @private
	 */
	private _retweetCount : number;

	/**
	 * Tweet's lang.
	 *
	 * @property _lang
	 * @type string
	 * @private
	 */
	private _lang : string;

	/**
	 * Tweet's sensitive content.
	 *
	 * @property _sensitive
	 * @type boolean
	 * @private
	 */
	private _sensitive : boolean;

	/**
	 * Tweet's pictures.
	 *
	 * @property _pictures
	 * @type Array<Picture>
	 * @private
	 */
	private _pictures : Array<Picture>;

	/**
	 * Tweet's hashtags.
	 *
	 * @property _hashtags
	 * @type Array<Tag>
	 * @private
	 */
	private _hashtags : Array<Tag>;

	/**
	 * Tweet's Original tweet. This property should be used if it is a retweet.
	 *
	 * @property _originalTweet
	 * @type Tweet
	 * @private
	 */
	private _originalTweet : Tweet;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				owner : User = null, message : string = null, favoriteCount : number = 0, retweetCount : number = 0, lang : string = null, sensitive : boolean = false,
				pictures : Array<Picture> = new Array<Picture>(), hashtags : Array<Tag> = new Array<Tag>(), originalTweet : Tweet = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setOwner(owner);
		this.setMessage(message);
		this.setFavoriteCount(favoriteCount);
		this.setRetweetCount(retweetCount);
		this.setLang(lang);
		this.setSensitive(sensitive);
		this.setOriginalTweet(originalTweet);
		this._pictures = pictures;
		this._hashtags = hashtags;
	}

	/**
	 * Returns Tweet's owner.
	 *
	 * @method getOwner
	 * @returns {User} The Tweet's owner.
	 */
	getOwner() : User {
		return this._owner;
	}

	/**
	 * Set the Tweet's owner.
	 *
	 * @method setOwner
	 * @param {User} owner - The new Tweet's owner.
	 */
	setOwner(owner : User) {
		this._owner = owner;
	}

	/**
	 * Returns Tweet's message.
	 *
	 * @method getMessage
	 * @returns {string} The Tweet's message.
	 */
	getMessage() : string {
		return this._message;
	}

	/**
	 * Set the Tweet's message.
	 *
	 * @method setMessage
	 * @param {string} message - The new Tweet's message.
	 */
	setMessage(message : string) {
		this._message = message;
	}

	/**
	 * Returns Tweet's favoriteCount.
	 *
	 * @method getFavoriteCount
	 * @returns {number} The Tweet's favoriteCount.
	 */
	getFavoriteCount() : number {
		return this._favoriteCount;
	}

	/**
	 * Set the Tweet's favoriteCount.
	 *
	 * @method setFavoriteCount
	 * @param {number} favoriteCount - The new Tweet's favoriteCount.
	 */
	setFavoriteCount(favoriteCount : number) {
		this._favoriteCount = favoriteCount;
	}

	/**
	 * Returns Tweet's retweetCount.
	 *
	 * @method getRetweetCount
	 * @returns {number} The Tweet's retweetCount.
	 */
	getRetweetCount() : number {
		return this._retweetCount;
	}

	/**
	 * Set the Tweet's retweetCount.
	 *
	 * @method setRetweetCount
	 * @param {number} retweetCount - The new Tweet's retweetCount.
	 */
	setRetweetCount(retweetCount : number) {
		this._retweetCount = retweetCount;
	}

	/**
	 * Returns Tweet's lang.
	 *
	 * @method getLang
	 * @returns {string} The Tweet's lang.
	 */
	getLang() : string {
		return this._lang;
	}

	/**
	 * Set the Tweet's lang.
	 *
	 * @method setLang
	 * @param {string} lang - The new Tweet's lang.
	 */
	setLang(lang : string) {
		this._lang = lang;
	}

	/**
	 * Returns Tweet's sensitive.
	 *
	 * @method getSensitive
	 * @returns {boolean} The Tweet's sensitive.
	 */
	getSensitive() : boolean {
		return this._sensitive;
	}

	/**
	 * Set the Tweet's sensitive.
	 *
	 * @method setSensitive
	 * @param {boolean} sensitive - The new Tweet's sensitive.
	 */
	setSensitive(sensitive : boolean) {
		this._sensitive = sensitive;
	}

	/**
	 * Returns Tweet's pictures.
	 *
	 * @method getPictures
	 * @returns {Array<Tweet>} The Tweet's pictures.
	 */
	getPictures() : Array<Picture> {
		return this._pictures;
	}

	/**
	 * Added a Picture to Tweet.
	 *
	 * @method addPicture
	 * @param {Tweet} tweet - The picture to add.
	 */
	addPicture(picture : Picture) {
		this._pictures.push(picture);
	}

	/**
	 * Returns Tweet's hashtags.
	 *
	 * @method getHashtags
	 * @returns {Array<Tag>} The Tweet's hashtags.
	 */
	getHashtags() : Array<Tag> {
		return this._hashtags;
	}

	/**
	 * Added a Hashtag to a Tweet.
	 *
	 * @method addHashtag
	 * @param {Tag} hashtag - The hashtag to add.
	 */
	addHashtag(hashtag : Tag) {
		this._hashtags.push(hashtag);
	}

	/**
	 * Returns Tweet's original tweet.
	 *
	 * @method getOriginalTweet
	 * @returns {Tweet} The Tweet's original tweet.
	 */
	getOriginalTweet() : Tweet {
		return this._originalTweet;
	}

	/**
	 * Set the Tweet's original tweet.
	 *
	 * @method setOriginalTweet
	 * @param {Tweet} originalTweet - The new Tweet's originalTweet.
	 */
	setOriginalTweet(originalTweet : Tweet) {
		this._originalTweet = originalTweet;
	}

	/**
	 * Return a Tweet instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {Tweet} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : Tweet {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A Tweet object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A Tweet object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A Tweet object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A Tweet object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A Tweet object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A Tweet object should have a durationToDisplay.");
		}
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A Tweet object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A Tweet object should have a serviceName.");
		}

		if(typeof(jsonObject._owner) == "undefined") {
			throw new InfoException("A Tweet object should have an owner.");
		}
		if(typeof(jsonObject._message) == "undefined") {
			throw new InfoException("A Tweet object should have a message.");
		}
		if(typeof(jsonObject._favoriteCount) == "undefined") {
			throw new InfoException("A Tweet object should have a favorite count.");
		}
		if(typeof(jsonObject._retweetCount) == "undefined") {
			throw new InfoException("A Tweet object should have a retweet count.");
		}
		if(typeof(jsonObject._lang) == "undefined") {
			throw new InfoException("A Tweet object should have a lang.");
		}
		if(typeof(jsonObject._originalTweet) == "undefined") {
			throw new InfoException("A Tweet object should have a original tweet value.");
		}
		if(typeof(jsonObject._sensitive) == "undefined") {
			throw new InfoException("A Tweet object should have a sensitive.");
		}
		if(typeof(jsonObject._pictures) == "undefined") {
			throw new InfoException("A Tweet object should have pictures.");
		}
		if(typeof(jsonObject._hashtags) == "undefined") {
			throw new InfoException("A Tweet object should have hashtags.");
		}

		var t : Tweet = new Tweet(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName);

		t.setOwner(User.fromJSONObject(jsonObject._owner));
		t.setMessage(jsonObject._message);
		t.setFavoriteCount(jsonObject._favoriteCount);
		t.setRetweetCount(jsonObject._retweetCount);
		t.setLang(jsonObject._lang);
		t.setSensitive(jsonObject._sensitive);
		t.setOriginalTweet(jsonObject._originalTweet);

		for(var i = 0; i < jsonObject._pictures.length; i++) {
			var pDesc = jsonObject._pictures[i];
			var p : Picture = Picture.fromJSONObject(pDesc);
			t.addPicture(p);
		}

		for(var j = 0; j < jsonObject._hashtags.length; j++) {
			var htDesc = jsonObject._hashtags[j];
			var ht : Tag = Tag.fromJSONObject(htDesc);
			t.addHashtag(ht);
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
	equals(info : Tweet) : boolean {
		var firstCheck = this.getFavoriteCount() == info.getFavoriteCount() &&
				this.getLang() == info.getLang() &&
				this.getMessage() == info.getMessage() &&
				this.getRetweetCount() == info.getRetweetCount() &&
				this.getSensitive() == info.getSensitive();

		if(firstCheck) {
			var equalStatus = true;

			if(this.getOwner() != null && info.getOwner() != null) {
				equalStatus = equalStatus && this.getOwner().equals(info.getOwner());
			} else {
				if(this.getOwner() != null || info.getOwner() != null) {
					return false;
				}
			}

			if(this.getOriginalTweet() != null && info.getOriginalTweet() != null) {
				equalStatus = equalStatus && this.getOriginalTweet().equals(info.getOriginalTweet());
			} else {
				if(this.getOriginalTweet() != null || info.getOriginalTweet() != null) {
					return false;
				}
			}

			if(this.getHashtags().length != info.getHashtags().length) {
				return false;
			} else {
				this.getHashtags().forEach(function (tag:Tag) {
					var existEqual = false;

					info.getHashtags().forEach(function (otherTag:Tag) {
						if (!existEqual) {
							existEqual = tag.equals(otherTag);
						}
					});

					equalStatus = equalStatus && existEqual;
				});
			}

			if(this.getPictures().length != info.getPictures().length) {
				return false;
			} else {
				this.getPictures().forEach(function (picture:Picture) {
					var existEqual = false;

					info.getPictures().forEach(function (otherPicture:Picture) {
						if (!existEqual) {
							existEqual = picture.equals(otherPicture);
						}
					});

					equalStatus = equalStatus && existEqual;
				});
			}

			return equalStatus;
		} else {
			return false;
		}
	}
}