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
     * @default null
     */
    private _title : string = null;

    /**
     * FeedNode's description.
     *
     * @property _description
     * @type string
     * @private
     * @default null
     */
    private _description : string = null;

    /**
     * FeedNode's summary.
     *
     * @property _summary
     * @type string
     * @private
     * @default null
     */
    private _summary : string = null;

    /**
     * FeedNode's url.
     *
     * @property _url
     * @type string
     * @private
     * @default null
     */
    private _url : string = null;

    /**
     * FeedNode's publication date.
     *
     * @property _pubDate
     * @type string
     * @private
     * @default null
     */
    private _pubDate : string = null;

    /**
     * FeedNode's author.
     *
     * @property _author
     * @type string
     * @private
     * @default null
     */
    private _author : string = null;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor() {
        super();
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
}