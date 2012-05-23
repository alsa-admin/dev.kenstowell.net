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
(function() {

	//Instantiate as a jQuery plugin and create a new Crosshairs object
	jQuery.fn.crosshairs = function(options) {
		return this.each(function() {
			new Crosshairs(this, options);
		});
	};

	/************************
	 * CROSSHAIRS CONSTRUCTOR
	 */
	var Crosshairs = function(crosshair, options) {
		this.ch = crosshair;
		this.options = $.extend({}, Crosshairs.defaults, options);

		//Init object methods
		this.init();
	};

	/************************
	 * CROSSHAIRS DEFAULTS
	 * @desc: default options for plugin behavior
	 *
	 */
	Crosshairs.defaults = {
		size: '20px', //size of the box
        alignment: 'center', //portion of the box the content is aligned to upon moving
        offset: '0', //margin from the box
        pathing: 'fixed', //pathing type
        targets: {} //content you want to navigate to
	};

	/************************
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

            //Init the actual crosshairs
            this.buildCrossHairs();

            //Set up target event handling
            this.bindEvents();
		},
        /**
         * BIND EVENTS
         * @desc: build the event handlers for the targets
         */
        bindEvents: function() {

        },
        /**
         * BUILD CROSSHAIRS
         * @desc: style the crosshairs
         */
        buildCrossHairs: function() {
            var self = this;

            //First set display, width and height values
            $('#crosshairs').css({
                'display': 'none',
                'width': self.options.size,
                'height': self.options.size
            });

            //Now adjust position
            $('#crosshairs').css({
                'position': 'fixed',
                'top' : ($(window).height() - $(self.ch).height()) /2,
                'left': ($(window).width() - $(self.ch).width()) /2
            });
        },
        /**
         * PATH TO TARGET
         * @param trgt
         */
        pathToTarget: function(trgt) {

        },
        /**
         * UPDATE CROSSHAIRS
         * @param delta
         */
        updateCrossHairs: function(delta) {

        }
	};
})(jQuery);

/************************************************************* END ***************************************************************************************/ 

