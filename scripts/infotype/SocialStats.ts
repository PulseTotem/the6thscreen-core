/**
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./exceptions/InfoException.ts" />

class SocialStats {

	/**
	 * SocialStats's viewCount.
	 *
	 * @property _viewCount
	 * @type number
	 * @private
	 */
	private _viewCount : number;

	/**
	 * SocialStats's likeCount.
	 *
	 * @property _likeCount
	 * @type number
	 * @private
	 */
	private _likeCount : number;

	/**
	 * SocialStats's dislikeCount.
	 *
	 * @property _dislikeCount
	 * @type number
	 * @private
	 */
	private _dislikeCount : number;

	/**
	 * SocialStats's favoriteCount.
	 *
	 * @property _favoriteCount
	 * @type number
	 * @private
	 */
	private _favoriteCount : number;

	/**
	 * SocialStats's commentCount.
	 *
	 * @property _commentCount
	 * @type number
	 * @private
	 */
	private _commentCount : number;

	/**
	 * SocialStats's shareCount.
	 *
	 * @property _shareCount
	 * @type number
	 * @private
	 */
	private _shareCount : number;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(viewCount : number = 0, likeCount : number = 0, dislikeCount : number = 0, favoriteCount : number = 0, commentCount : number = 0, shareCount : number = 0) {
		this.setViewCount(viewCount);
		this.setLikeCount(likeCount);
		this.setDislikeCount(dislikeCount);
		this.setFavoriteCount(favoriteCount);
		this.setCommentCount(commentCount);
		this.setShareCount(shareCount);
	}

	/**
	 * Returns SocialStats's viewCount.
	 *
	 * @method viewCount
	 * @returns {number} The SocialStats's viewCount.
	 */
	viewCount() : number {
		return this._viewCount;
	}

	/**
	 * Set the SocialStats's viewCount.
	 *
	 * @method setViewCount
	 * @param {number} viewCount - The new SocialStats's viewCount.
	 */
	setViewCount(viewCount : number) {
		this._viewCount = viewCount;
	}

	/**
	 * Returns SocialStats's likeCount.
	 *
	 * @method likeCount
	 * @returns {number} The SocialStats's likeCount.
	 */
	likeCount() : number {
		return this._likeCount;
	}

	/**
	 * Set the SocialStats's likeCount.
	 *
	 * @method setLikeCount
	 * @param {number} likeCount - The new SocialStats's likeCount.
	 */
	setLikeCount(likeCount : number) {
		this._likeCount = likeCount;
	}

	/**
	 * Returns SocialStats's dislikeCount.
	 *
	 * @method dislikeCount
	 * @returns {number} The SocialStats's dislikeCount.
	 */
	dislikeCount() : number {
		return this._dislikeCount;
	}

	/**
	 * Set the SocialStats's dislikeCount.
	 *
	 * @method setDislikeCount
	 * @param {number} dislikeCount - The new SocialStats's dislikeCount.
	 */
	setDislikeCount(dislikeCount : number) {
		this._dislikeCount = dislikeCount;
	}

	/**
	 * Returns SocialStats's favoriteCount.
	 *
	 * @method favoriteCount
	 * @returns {number} The SocialStats's favoriteCount.
	 */
	favoriteCount() : number {
		return this._favoriteCount;
	}

	/**
	 * Set the SocialStats's favoriteCount.
	 *
	 * @method setFavoriteCount
	 * @param {number} favoriteCount - The new SocialStats's favoriteCount.
	 */
	setFavoriteCount(favoriteCount : number) {
		this._favoriteCount = favoriteCount;
	}

	/**
	 * Returns SocialStats's commentCount.
	 *
	 * @method commentCount
	 * @returns {number} The SocialStats's commentCount.
	 */
	commentCount() : number {
		return this._commentCount;
	}

	/**
	 * Set the SocialStats's commentCount.
	 *
	 * @method setCommentCount
	 * @param {number} commentCount - The new SocialStats's commentCount.
	 */
	setCommentCount(commentCount : number) {
		this._commentCount = commentCount;
	}

	/**
	 * Returns SocialStats's shareCount.
	 *
	 * @method shareCount
	 * @returns {number} The SocialStats's shareCount.
	 */
	shareCount() : number {
		return this._shareCount;
	}

	/**
	 * Set the SocialStats's shareCount.
	 *
	 * @method setShareCount
	 * @param {number} shareCount - The new SocialStats's shareCount.
	 */
	setShareCount(shareCount : number) {
		this._shareCount = shareCount;
	}

	/**
	 * Return a SocialStats instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {SocialStats} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : SocialStats {
		if(typeof(jsonObject._viewCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a viewCount.");
		}

		if(typeof(jsonObject._likeCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a likeCount.");
		}

		if(typeof(jsonObject._dislikeCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a dislikeCount.");
		}

		if(typeof(jsonObject._favoriteCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a favoriteCount.");
		}

		if(typeof(jsonObject._commentCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a commentCount.");
		}

		if(typeof(jsonObject._shareCount) == "undefined") {
			throw new InfoException("A SocialStats object should have a shareCount.");
		}

		var ss : SocialStats = new SocialStats(jsonObject._viewCount, jsonObject._likeCount, jsonObject._dislikeCount, jsonObject._favoriteCount, jsonObject._commentCount, jsonObject._shareCount);

		return ss;
	}

	/**
	 * Check if 'this' is equal to SocialStats in param.
	 *
	 * @method equals
	 * @param {SocialStats} info - SocialStats to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : SocialStats) : boolean {
		return this.viewCount() == info.viewCount() &&
				this.likeCount() == info.likeCount() &&
				this.dislikeCount() == info.dislikeCount() &&
				this.favoriteCount() == info.favoriteCount() &&
				this.commentCount() == info.commentCount() &&
				this.shareCount() == info.shareCount();
	}
}