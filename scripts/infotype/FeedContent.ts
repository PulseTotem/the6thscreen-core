/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./FeedNode.ts" />

class FeedContent extends Info {

    /**
     * FeedContent's title.
     *
     * @property _title
     * @type string
     * @private
     * @default null
     */
    private _title : string = null;

    /**
     * FeedContent's description.
     *
     * @property _description
     * @type string
     * @private
     * @default null
     */
    private _description : string = null;

    /**
     * FeedContent's url.
     *
     * @property _url
     * @type string
     * @private
     * @default null
     */
    private _url : string = null;

    /**
     * FeedContent's language.
     *
     * @property _language
     * @type string
     * @private
     * @default null
     */
    private _language : string = null;

    /**
     * FeedContent's logo.
     *
     * @property _logo
     * @type string
     * @private
     * @default null
     */
    private _logo : string = null;

    /**
     * FeedContent's nodes.
     *
     * @property _feedNodes
     * @type Array<FeedNode>
     * @private
     */
    private _feedNodes : Array<FeedNode>;

    /**
     * Constructor.
     *
     * @constructor
     */
    constructor() {
       super();
       this._feedNodes = new Array<FeedNode>();
    }

    /**
     * Returns FeedContent's title.
     *
     * @method getTitle
     * @returns {string} The FeedContent's title.
     */
    getTitle() : string {
        return this._title;
    }

    /**
     * Set the FeedContent's title.
     *
     * @method setTitle
     * @param {string} title - The new FeedContent's title.
     */
    setTitle(title : string) {
        this._title = title;
    }

    /**
     * Returns FeedContent's description.
     *
     * @method getDescription
     * @returns {string} The FeedContent's description.
     */
    getDescription() : string {
        return this._description;
    }

    /**
     * Set the FeedContent's description.
     *
     * @method setDescription
     * @param {string} title - The new FeedContent's description.
     */
    setDescription(description : string) {
        this._description = description;
    }

    /**
     * Returns FeedContent's url.
     *
     * @method getUrl
     * @returns {string} The FeedContent's url.
     */
    getUrl() : string {
        return this._url;
    }

    /**
     * Set the FeedContent's url.
     *
     * @method setUrl
     * @param {string} url - The new FeedContent's url.
     */
    setUrl(url : string) {
        this._url = url;
    }

    /**
     * Returns FeedContent's language.
     *
     * @method getLanguage
     * @returns {string} The FeedContent's language.
     */
    getLanguage() : string {
        return this._language;
    }

    /**
     * Set the FeedContent's language.
     *
     * @method setLanguage
     * @param {string} language - The new FeedContent's language.
     */
    setLanguage(language : string) {
        this._language = language;
    }

    /**
     * Returns FeedContent's logo.
     *
     * @method getLogo
     * @returns {string} The FeedContent's logo.
     */
    getLogo() : string {
        return this._logo;
    }

    /**
     * Set the FeedContent's logo.
     *
     * @method setLogo
     * @param {string} logo - The new FeedContent's logo.
     */
    setLogo(logo : string) {
        this._logo = logo;
    }

    /**
     * Returns FeedContent's feedNodes.
     *
     * @method getFeedNodes
     * @returns {Array<FeedNode>} The FeedContent's feedNodes.
     */
    getFeedNodes() : string {
        return this._feedNodes;
    }

    /**
     * Added a feedNode to FeedContent.
     *
     * @method addFeedNode
     * @param {FeedNode} node - The feedNode to add.
     */
    addFeedNode(node : FeedNode) {
        this._feedNodes.push(node);
    }
}