/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />

class FeedNode extends Info {

    /**
     * FeedNode's title.
     *
     * @property _title
     * @type string
     * @private
     */
    private _title : string;

    /**
     * FeedNode's description.
     *
     * @property _description
     * @type string
     * @private
     */
    private _description : string;

    /**
     * FeedNode's summary.
     *
     * @property _summary
     * @type string
     * @private
     */
    private _summary : string;

    /**
     * FeedNode's url.
     *
     * @property _url
     * @type string
     * @private
     */
    private _url : string;

    /**
     * FeedNode's media url.
     *
     * @property _mediaUrl
     * @type string
     * @private
     */
    private _mediaUrl : string;

    /**
     * FeedNode's author.
     *
     * @property _author
     * @type string
     * @private
     */
    private _author : string;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10, castingDate : Date = null,
                title : string = null, description : string = null, summary : string = null, url : string = null, author : string = null, mediaUrl : string = null) {
        super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
        this._title = title;
        this._description = description;
        this._summary = summary;
        this._url = url;
        this._author = author;
        this._mediaUrl = mediaUrl;
    }

    /**
     * Returns FeedNode's title.
     *
     * @method getTitle
     * @returns {string} The FeedNode's title.
     */
    getTitle() : string {
        return this._title;
    }

    /**
     * Set the FeedNode's title.
     *
     * @method setTitle
     * @param {string} title - The new FeedNode's title.
     */
    setTitle(title : string) {
        this._title = title;
    }

    /**
     * Returns FeedNode's description.
     *
     * @method getDescription
     * @returns {string} The FeedNode's description.
     */
    getDescription() : string {
        return this._description;
    }

    /**
     * Set the FeedNode's description.
     *
     * @method setDescription
     * @param {string} title - The new FeedNode's description.
     */
    setDescription(description : string) {
        this._description = description;
    }

    /**
     * Returns FeedNode's summary.
     *
     * @method getSummary
     * @returns {string} The FeedNode's summary.
     */
    getSummary() : string {
        return this._summary;
    }

    /**
     * Set the FeedNode's summary.
     *
     * @method setSummary
     * @param {string} summary - The new FeedNode's summary.
     */
    setSummary(summary : string) {
        this._summary = summary;
    }

    /**
     * Returns FeedNode's url.
     *
     * @method getUrl
     * @returns {string} The FeedNode's url.
     */
    getUrl() : string {
        return this._url;
    }

    /**
     * Set the FeedNode's url.
     *
     * @method setUrl
     * @param {string} url - The new FeedNode's url.
     */
    setUrl(url : string) {
        this._url = url;
    }

    /**
     * Returns FeedNode's media url.
     *
     * @method getMediaUrl
     * @returns {string} The FeedNode's media url.
     */
    getMediaUrl() : string {
        return this._mediaUrl;
    }

    /**
     * Set the FeedNode's media url.
     *
     * @method setMediaUrl
     * @param {string} url - The new FeedNode's media url.
     */
    setMediaUrl(url : string) {
        this._mediaUrl = url;
    }

    /**
     * Returns FeedNode's author.
     *
     * @method getAuthor
     * @returns {string} The FeedNode's author.
     */
    getAuthor() : string {
        return this._author;
    }

    /**
     * Set the FeedNode's author.
     *
     * @method setAuthor
     * @param {string} url - The new FeedNode's author.
     */
    setAuthor(author : string) {
        this._author = author;
    }

    /**
     * Return a FeedNode instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {FeedNode} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : FeedNode {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A FeedNode object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A FeedNode object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A FeedNode object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A FeedNode object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A FeedNode object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A FeedNode object should have a durationToDisplay.");
        }

        if(typeof(jsonObject._title) == "undefined") {
            throw new InfoException("A FeedNode object should have a title.");
        }
        if(typeof(jsonObject._description) == "undefined") {
            throw new InfoException("A FeedNode object should have a description.");
        }
        if(typeof(jsonObject._summary) == "undefined") {
            throw new InfoException("A FeedNode object should have a summary.");
        }
        if(typeof(jsonObject._url) == "undefined") {
            throw new InfoException("A FeedNode object should have an url.");
        }
        if(typeof(jsonObject._author) == "undefined") {
            throw new InfoException("A FeedNode object should have an author.");
        }
        var fn : FeedNode = new FeedNode(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
            jsonObject._title, jsonObject._description, jsonObject._summary, jsonObject._url, jsonObject._author, jsonObject._mediaUrl);

        return fn;
    }

	/**
	 * Check if 'this' is equal to info in param.
	 *
	 * @method equals
	 * @param {Info} info - Info to update.
	 * @return {boolean} 'true' if objects are equals, 'false' otherwise
	 */
	equals(info : FeedNode) : boolean {
		return this.getAuthor() == info.getAuthor() &&
				this.getDescription() == info.getDescription() &&
				this.getMediaUrl() == info.getMediaUrl() &&
				this.getSummary() ==  info.getSummary() &&
				this.getTitle() == info.getTitle() &&
				this.getUrl() == info.getUrl();
	}
}