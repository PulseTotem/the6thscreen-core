/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="./Info.ts" />
/// <reference path="./VideoURL.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class VideoPlaylist extends Info {

	/**
	 * Videos' list.
	 *
	 * @property _videos
	 * @type Array<VideoURL>
	 * @private
	 */
	private _videos : Array<VideoURL>;

	/**
	 * Constructor.
	 *
	 * @constructor
	 */
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);

		this._videos = new Array<VideoURL>();
	}

	/**
	 * Returns VideoURL's url.
	 *
	 * @method getURL
	 * @returns {string} The VideoURL's url.
	 */
	getVideos() : Array<VideoURL> {
		return this._videos;
	}

	addVideo(video : VideoURL) {
		this._videos.push(video);
	}

	/**
	 * Return a VideoURL instance from a JSON Object.
	 *
	 * @method fromJSONObject
	 * @static
	 * @param {JSONObject} json - The JSON Object
	 * @return {VideoURL} The InfoType instance.
	 */
	static fromJSONObject(jsonObject : any) : VideoPlaylist {
		if (typeof(jsonObject._id) == "undefined") {
			throw new InfoException("A VideoURL object should have an ID.");
		}
		if(typeof(jsonObject._priority) == "undefined") {
			throw new InfoException("A VideoURL object should have a priority.");
		}
		if(typeof(jsonObject._creationDate) == "undefined") {
			throw new InfoException("A VideoURL object should have a creationDate.");
		}
		if(typeof(jsonObject._castingDate) == "undefined") {
			throw new InfoException("A VideoURL object should have a castingDate.");
		}
		if(typeof(jsonObject._obsoleteDate) == "undefined") {
			throw new InfoException("A VideoURL object should have an obsoleteDate.");
		}
		if(typeof(jsonObject._durationToDisplay) == "undefined") {
			throw new InfoException("A VideoURL object should have a durationToDisplay.");
		}

		var v : VideoPlaylist = new VideoPlaylist(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate);

		for(var i = 0; i < jsonObject._videos.length; i++) {
			var videoDesc = jsonObject._videos[i];
			var video : VideoURL = VideoURL.fromJSONObject(videoDesc);
			v.addVideo(video);
		}

		return v;
	}

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : VideoPlaylist) : boolean {
		if(this.getVideos().length != info.getVideos().length) {
			return false;
		} else {
			var equalStatus = true;

			this.getVideos().forEach(function (video : VideoURL) {
				var existEqual = false;

				info.getVideos().forEach(function(otherVideo : VideoURL) {
					if(!existEqual) {
						existEqual = video.equals(otherVideo);
					}
				});

				equalStatus = equalStatus && existEqual;
			});

			return equalStatus;
		}
	}
}
