/**
 * @author Simon Urli <simon@pulsetotem.fr>
 * @author Christian Brel <christian@pulsetotem.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./VideoURL.ts" />
/// <reference path="./Picture.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class VideoPlaylist extends Info {

	/**
	 * VideoPlaylist's title.
	 *
	 * @property _title
	 * @type string
	 * @private
	 */
	private _title : string;

	/**
	 * VideoPlaylist's description.
	 *
	 * @property _description
	 * @type string
	 * @private
	 */
	private _description : string;

	/**
	 * VideoPlaylist's thumbnail.
	 *
	 * @property _thumbnail
	 * @type Picture
	 * @private
	 */
	private _thumbnail : Picture;

	/**
	 * VideoPlaylist's Videos list.
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
	constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null, serviceLogo : string = "", serviceName : string = "",
				title : string = "", description : string = "", thumbnail : Picture = null, videos : Array<VideoURL> = new Array<VideoURL>()) {
		super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

		this.setClassName("VideoPlaylist");

		this.setTitle(title);
		this.setDescription(description);
		this.setThumbnail(thumbnail);

		this._videos = videos;
	}

	/**
	 * Returns VideoPlaylist's title.
	 *
	 * @method getTitle
	 * @returns {string} The VideoPlaylist's title.
	 */
	getTitle() : string {
		return this._title;
	}

	/**
	 * Set the VideoPlaylist's title.
	 *
	 * @method setTitle
	 * @param {string} title - The new VideoPlaylist's title.
	 */
	setTitle(title : string) {
		this._title = title;
	}

	/**
	 * Returns VideoPlaylist's description.
	 *
	 * @method getDescription
	 * @returns {string} The VideoPlaylist's description.
	 */
	getDescription() : string {
		return this._description;
	}

	/**
	 * Set the VideoPlaylist's description.
	 *
	 * @method setDescription
	 * @param {string} title - The new VideoPlaylist's description.
	 */
	setDescription(description : string) {
		this._description = description;
	}

	/**
	 * Returns VideoPlaylist's thumbnail.
	 *
	 * @method getThumbnail
	 * @returns {Picture} The VideoPlaylist's thumbnail.
	 */
	getThumbnail() : Picture {
		return this._thumbnail;
	}

	/**
	 * Set the VideoPlaylist's thumbnail.
	 *
	 * @method setThumbnail
	 * @param {Picture} thumbnail - The new VideoPlaylist's thumbnail.
	 */
	setThumbnail(thumbnail : Picture) {
		this._thumbnail = thumbnail;
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

	/**
	 * Add VideoURL into VideoPlaylist.
	 *
	 * @method addVideo
	 * @param {VideoURL} video - Video to add.
	 */
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
		if(typeof(jsonObject._serviceLogo) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have a serviceLogo.");
		}
		if(typeof(jsonObject._serviceName) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have a serviceName.");
		}

		if(typeof(jsonObject._title) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have a title.");
		}
		if(typeof(jsonObject._description) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have a description.");
		}
		if(typeof(jsonObject._thumbnail) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have a thumbnail.");
		}
		if(typeof(jsonObject._videos) == "undefined") {
			throw new InfoException("A VideoPlaylist object should have videos.");
		}

		var v : VideoPlaylist = new VideoPlaylist(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate, jsonObject._serviceLogo, jsonObject._serviceName,
											jsonObject._title, jsonObject._description);

		if(jsonObject._thumbnail != null) {
			v.setThumbnail(Picture.fromJSONObject(jsonObject._thumbnail));
		}

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
		var firstCheck = this.getTitle() == info.getTitle() &&
			this.getDescription() == info.getDescription();

		if(firstCheck) {

			if(this.getThumbnail().equals(info.getThumbnail())) {

				if (this.getVideos().length != info.getVideos().length) {
					return false;
				} else {
					var equalStatus = true;

					this.getVideos().forEach(function (video:VideoURL) {
						var existEqual = false;

						info.getVideos().forEach(function (otherVideo:VideoURL) {
							if (!existEqual) {
								existEqual = video.equals(otherVideo);
							}
						});

						equalStatus = equalStatus && existEqual;
					});

					return equalStatus;
				}

			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	propagateServiceInfo() {
		var self = this;
		Info.replaceServiceInfoInChildren(this._videos, self);
	}
}
