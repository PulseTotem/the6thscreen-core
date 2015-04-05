/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

/// <reference path="./Info.ts" />
/// <reference path="./FeedNode.ts" />
/// <reference path="./exceptions/InfoException.ts" />

class FeedContent extends Info {

    /**
     * FeedContent's title.
     *
     * @property _title
     * @type string
     * @private
     */
    private _title : string;

    /**
     * FeedContent's description.
     *
     * @property _description
     * @type string
     * @private
     */
    private _description : string;

    /**
     * FeedContent's url.
     *
     * @property _url
     * @type string
     * @private
     */
    private _url : string;

    /**
     * FeedContent's language.
     *
     * @property _language
     * @type string
     * @private
     */
    private _language : string;

    /**
     * FeedContent's logo.
     *
     * @property _logo
     * @type string
     * @private
     */
    private _logo : string;

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
    constructor(id : string = "noId", priority : number = 0, creationDate : Date = null, obsoleteDate : Date = null, durationToDisplay : number = 10000, castingDate : Date = null,
                title : string = null, description : string = null, url : string = null, langage : string = null, logo : string = null, feedNodes : Array<FeedNode> = new Array<FeedNode>()) {
       super(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate);
        this._title = title;
        this._description = description;
        this._url = url;
        this._language = langage;
        this._logo = logo;
        this._feedNodes = feedNodes;
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
    getFeedNodes() : Array<FeedNode> {
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

    /**
     * Return a FeedContent instance from a JSON Object.
     *
     * @method fromJSONObject
     * @static
     * @param {JSONObject} json - The JSON Object
     * @return {FeedContent} The InfoType instance.
     */
    static fromJSONObject(jsonObject : any) : FeedContent {
        if (typeof(jsonObject._id) == "undefined") {
            throw new InfoException("A FeedContent object should have an ID.");
        }
        if(typeof(jsonObject._priority) == "undefined") {
            throw new InfoException("A FeedContent object should have a priority.");
        }
        if(typeof(jsonObject._creationDate) == "undefined") {
            throw new InfoException("A FeedContent object should have a creationDate.");
        }
        if(typeof(jsonObject._castingDate) == "undefined") {
            throw new InfoException("A FeedContent object should have a castingDate.");
        }
        if(typeof(jsonObject._obsoleteDate) == "undefined") {
            throw new InfoException("A FeedContent object should have an obsoleteDate.");
        }
        if(typeof(jsonObject._durationToDisplay) == "undefined") {
            throw new InfoException("A FeedContent object should have a durationToDisplay.");
        }
        if(typeof(jsonObject._title) == "undefined") {
            throw new InfoException("A FeedContent object should have a title.");
        }
        if(typeof(jsonObject._description) == "undefined") {
            throw new InfoException("A FeedContent object should have a description.");
        }
        if(typeof(jsonObject._url) == "undefined") {
            throw new InfoException("A FeedContent object should have an url.");
        }
        if(typeof(jsonObject._language) == "undefined") {
            throw new InfoException("A FeedContent object should have a language.");
        }
        if(typeof(jsonObject._logo) == "undefined") {
            throw new InfoException("A FeedContent object should have a logo.");
        }
        if(typeof(jsonObject._feedNodes) == "undefined") {
            throw new InfoException("A FeedContent object should have feedNodes.");
        }
        var fc : FeedContent = new FeedContent(jsonObject._id, jsonObject._priority, jsonObject._creationDate, jsonObject._obsoleteDate, jsonObject._durationToDisplay, jsonObject._castingDate,
                                jsonObject._title, jsonObject._description, jsonObject._url, jsonObject._language, jsonObject._logo);

        for(var i = 0; i < jsonObject._feedNodes.length; i++) {
            var fnDesc = jsonObject._feedNodes[i];
            var fn : FeedNode = FeedNode.fromJSONObject(fnDesc);
            fc.addFeedNode(fn);
        }

        return fc;
    }
}