import ns from 'imajs/client/core/namespace.js';
import IMAError from 'imajs/client/core/imaError.js';

ns.namespace('Core.Abstract');

/**
 * Base class for implementations of the
 * {@codelink Core.Interface.PageRenderer} interface.
 *
 * @class PageRender
 * @implements Core.Interface.PageRender
 * @namespace Core.Abstract
 * @module Core
 * @submodule Core.Abstract
 *
 * @requires Vendor.Helper
 * @requires Vendor.React
 * @requires Core.Interface.Animate
 */
class PageRender extends ns.Core.Interface.PageRender {

	/**
	 * Initializes the abstract page renderer.
	 *
	 * @constructor
	 * @method constructor
	 * @param {Vendor.Helper} Helper The IMA.js helper methods.
	 * @param {Vendor.React} React React framework instance, will be used to
	 *        render the page.
	 * @param {Object<string, *>} settings Application settings for the current
	 *        application environment.
	 */
	constructor(Helper, React, settings) {
		super();

		/**
		 * The IMA.js helper methods.
		 *
		 * @property _Helper
		 * @protected
		 * @type {Vendor.Helper}
		 */
		this._Helper = Helper;

		/**
		 * Rect framework instance, used to render the page.
		 *
		 * @property _react
		 * @protected
		 * @type {Vendor.React}
		 */
		this._React = React;

		/**
		 * Application setting for the current application environment.
		 *
		 * @property _setting
		 * @protected
		 * @type {Object<string, *>}
		 */
		this._settings = settings;

		/**
		 * @property _reactiveView
		 * @type {Vendor.React.Component}
		 * @default null
		 */
		this._reactiveView = null;

	}

	/**
	 * Renders the page using the provided controller and view. The actual
	 * behavior of this method differs at the client and the at server in the
	 * following way:
	 *
	 * On server, the method renders the page to a string containing HTML markup
	 * to send to the client.
	 *
	 * On client, the method renders the page into DOM, re-using the DOM created
	 * from the HTML markup send by the server if possible.
	 *
	 * @override
	 * @method mount
	 * @abstract
	 * @param {Core.Abstract.Controller} controller
	 * @param {Vendor.React.Component} view
	 * @return {Promise}
	 */
	mount(controller, view) { // jshint ignore:line
		throw new IMAError('The render() method is abstract and must be overridden');
	}

	/**
	 * Unmount view from th DOM.
	 *
	 * @override
	 * @method unmount
	 * @abstract
	 */
	unmount() {}

	/**
	 * Set state to reactive react component.
	 *
	 * @method setState
	 * @param {Object<string, *>} [state={}]
	 */
	setState(state = {}) {
		if (this._reactiveView) {
			this._reactiveView.setState(state);
		}
	}
}

ns.Core.Abstract.PageRender = PageRender;
