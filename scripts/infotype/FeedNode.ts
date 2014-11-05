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
     * FeedNode's publication date.
     *
     * @property _pubDate
     * @type string
     * @private
     */
    private _pubDate : string;

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
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, castingDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000,
                title : string = null, description : string = null, summary : string = null, url : string = null, pubDate : string = null, author : string = null) {
        super(id, priority, creationDate, castingDate, obsoleteDate, durationToDisplay);
        this._title = title;
        this._description = description;
        this._summary = summary;
        this._url = url;
        this._pubDate = pubDate;
        this._author = author;
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
     * Returns FeedNode's pubDate.
     *
     * @method getPubDate
     * @returns {string} The FeedNode's pubDate.
     */
    getPubDate() : string {
        return this._pubDate;
    }

    /**
     * Set the FeedNode's pubDate.
     *
     * @method setPubDate
     * @param {string} pubDate - The new FeedNode's pubDate.
     */
    setPubDate(pubDate : string) {
        this._pubDate = pubDate;
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
        if (!jsonObject._id) {
            throw new InfoException("A FeedNode object should have an ID.");
        }
        if(!jsonObject._priority) {
            throw new InfoException("A FeedNode object should have a priority.");
        }
        if(!jsonObject._creationDate) {
            throw new InfoException("A FeedNode object should have a creationDate.");
        }
        if(!jsonObject._castingDate) {
            throw new InfoException("A FeedNode object should have a castingDate.");
        }
        if(!jsonObject._obsoleteDate) {
            throw new InfoException("A FeedNode object should have an obsoleteDate.");
        }
        if(!jsonObject._durationToDisplay) {
            throw new InfoException("A FeedNode object should have a durationToDisplay.");
        }
        if(!jsonObject._title) {
            throw new InfoException("A FeedNode object should have a title.");
        }
        if(!jsonObject._description) {
            throw new InfoException("A FeedNode object should have a description.");
        }
        if(!jsonObject._summary) {
            throw new InfoException("A FeedNode object should have a summary.");
        }
        if(!jsonObject._url) {
            throw new InfoException("A FeedNode object should have an url.");
        }
        if(!jsonObject._pubDate) {
            throw new InfoException("A FeedNode object should have a pubDate.");
        }
        if(!jsonObject._author) {
            throw new InfoException("A FeedNode object should have an author.");
        }
        var fn : FeedNode = new FeedNode(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._castingDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay,
            jsonObject._title, jsonObject._description, jsonObject._summary, jsonObject._url, jsonObject._pubDate, jsonObject._author);

        return fn;
    }
}