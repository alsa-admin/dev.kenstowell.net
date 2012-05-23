/* Javascript document
 *
 * @Author:	Ken Stowell
 * @Date:		
 *
 * @Description: 
 */

/**********************************************************************************************************************************************************
 * GLOBAL VARS/FUNCTIONS																																																																	*
 *********************************************************************************************************************************************************/

/************************************************************* END GLOBAL VARS ***************************************************************************/

/**********************************************************************************************************************************************************
 * CROSSHAIRS jQUERY PLUGIN																																																																*
 **********************************************************************************************************************************************************
 *
 * @desc:
 *
 *
 *
 *
 */
(function(window, undefined) {

	//Instantiate as a jQuery plugin and create a new Crosshairs object
	jQuery.fn.crosshairs = function(options) {
		console.log(this)
		return this.each(function() {
			new Crosshairs(this, options);
		});
	};

	/**
	 * CROSSHAIRS CONSTRUCTOR
	 */
	var Crosshairs = function(crosshair, options) {
		this.ch = crosshair;
		this.options = $.extend({}, Crosshairs.defaults, options);

		//Init object methods
		this.init();
	};

	/**
	 * CROSSHAIRS DEFAULTS
	 * @desc: default options for plugin behavior
	 *
	 */
	Crosshairs.defaults = {
		width: '10px',
		height: '10px'
	};

	/**
	 * CROSSHAIRS PROTOTYPE
	 * @desc: object methods for the Crosshairs object
	 */
	Crosshairs.prototype = {
		/**
		 * INIT
		 * @desc: first things first :)
		 */
		init: function() {
			var self = this;

			console.log(this.options);

		}
	};
})(jQuery);

/************************************************************* END ***************************************************************************************/ 

