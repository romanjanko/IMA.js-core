import ns from 'core/namespace/ns.js';

ns.namespace('Core.Abstract');

/**
 * Abstract class for controller.
 *
 * @class Controller
 * @extends Core.Interface.Controller
 * @namespace Core.Abstract
 * @module Core
 * @submodule Core.Abstract
 *
 * @requires Core.Interface.View
 */
class Controller extends ns.Core.Interface.Controller {

	/**
	 * @constructor
	 * @method constructor
	 * @param {Core.Interface.View} view
	 */
	constructor(view) {
		super();

		/**
		 * @property state
		 * @protected
		 * @type Object
		 * @default {}
		 */
		this._state = {};

		/**
		 * Pointer for active react class in DOM.
		 *
		 * @property _reactiveView
		 * @protected
		 * @type Vendor.React.ReactComponent
		 * @default null
		 */
		this._reactiveView = null;

		/**
		 * @property _status
		 * @protected
		 * @type {Number}
		 * @default 200
		 */
		this._status = 200;

		/**
		 * @property view
		 * @protected
		 * @type Core.Interface.View
		 */
		this._view = view;

		/**
		 * @property _reactView
		 * @type {Vendor.React.ReactElement}
		 * @default null
		 */
		this._reactView = null;

		/**
		 * @property params
		 * @type {Object}
		 * @default {}
		 */
		this.params = {};

	}

	/**
	 * Controller initialization.
	 *
	 * @method init
	 * @param {Object} [params={}] - controller options.
	 */
	init(params = {}) {
		this.params = params;
		this._reactView = this._view.init(this).getReactView();
	}
		
	/**
	 * Controller deinitialization.
	 *
	 * @method deinit
	 */
	deinit() {
		this._view.deinit(this);
		this._reactiveView = null;
	}
	
	/**
	 * Controller will be activated on resolved promises. In this method you may use setInterval and setTimeout.
	 *
	 * @method activate
	 */
	activate() { // jshint ignore:line
	}

	/**
	 * Load data for controller.
	 *
	 * @method load
	 */
	load() {
	}

	/**
	 * Returns reactive view.
	 *
	 * @method getReactView
	 * @return {Core.Abstract.View} - assigned view
	 */
	getReactView() {
		return this._reactView;
	}
		
	/**
	 * Set reactive view.
	 *
	 * @method setReactiveView
	 * @param {Vendor.ReactComponent} reactiveView 
	 */
	setReactiveView(reactiveView) {
		this._reactiveView = reactiveView;
	}

	/**
	 * Set state to controller and to assigned reactive view (if exists).
	 *
	 * @method setState
	 * @param {Object} state
	 */
	setState(state) {
		this._state = state;
		if (this._reactiveView) {
			this._reactiveView.setState(this._state);
		}
	}

	/**
	 * Add state to controller and to assigned reactive view (if exists).
	 *
	 * @method addState
	 * @param {Object} state
	 */
	addState(state) {
		this.setState(Object.assign(this._state, state));
	}

	/**
	 * Returns state.
	 *
	 * @method getState
	 * @return {Object} - assigned view
	 */
	getState() {
		return this._state;
	}

	/**
	 * Set SEO params is called from resolved promises for active controller.
	 *
	 * @method setSeoParams
	 * @param {Object} resolvedPromises
	 * @param {Core.Interface.Seo} seo
	 * @param {Core.Interface.Router} router
	 * @param {Core.Interface.Dictionary} dictionary
	 * @param {Object} setting
	 */
	setSeoParams(resolvedPromises, seo, router, dictionary, setting) { // jshint ignore:line
	}

	/**
	 * Returns seo handler.
	 *
	 * @method getSeoHandler
	 * @return {Core.Interface.Seo}
	 */
	getSeoHandler() {
	}
	
	/**
	 * Returns http status.
	 *
	 * @method getHttpStatus
	 * @return {Number} - HTTP status number 
	 */
	getHttpStatus() {
		return this._status;
	}
}

ns.Core.Abstract.Controller = Controller;