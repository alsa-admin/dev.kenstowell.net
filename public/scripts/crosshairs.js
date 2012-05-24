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
		this.$ch = $(crosshair);
		this.options = $.extend({}, Crosshairs.defaults, options);

		//option specific shortcuts
		this.$sz = this.size - this.options.size;//size option
		this.$align = this.alignment = this.options.alignment;//alignment option
		this.$off = this.offset = this.options.offset;//Offset option
		this.$pth = this.pathing = this.options.pathing;//pathing option
		this.$cont = this.content = this.options.content;//content object

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
        offset: 0, //margin from the box - integer only
        pathing: 'fixed', //pathing type
				content: {}//generally navigation elements; It is recommended to make the selector as generic as possible
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
			var self = this;

			//build the trigger event handler
			$.each(self.$cont, function(key, val) {
				$(val.trigger.selector).bind('click', function(e) {
					//for each object in content, bind it's 'trigger' to a method call for the appropriate target content
					self.pathToTarget(val.target.selector);
				});
			});
		},
		/**
		 * BUILD CROSSHAIRS
		 * @desc: style the crosshairs
		 */
		buildCrossHairs: function() {
				var self = this;

				//First set display, width and height values
				$('#crosshairs').css({
						'visibility' : 'hidden',
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
		pathToTarget: function(target) {
			var self = this;
			var c = current_position = {};//current crosshair location based on ch settings, alignment and offset
			var o = this.$off;//offset

			/**
			 * 1. get current position relative to alignment
			 * 2. get position of target element relative to alignment
			 * 3. calculate difference
			 * 4. plot trajectory accounting for offset and pathing type
			 * 5. path to target
			 */
			console.log(self.getItemCoordinates(this.$ch));

			//get the current position
			switch(self.$align) {
				case 'center':
					c = self.getItemCoordinates(this.$ch);
					c['left'] = c.TL.x + (this.$ch.width() /2);
					c['top'] = c.TL.y + (this.$ch.height() / 2);
					console.log(c);
					break;
			}

		},
		/**
		 * UPDATE CROSSHAIRS
		 * @param delta
		 */
		updateCrossHairs: function(delta) {

		},
		/**
		 * GET ITEM COORDIATES
		 * @desc: gets item coordiantes for each x,y intersection
		 * @param elem
		 */
		getItemCoordinates: function(elem) {
			var self = this;
			var $elem = $(elem);//create a simple var from the jQuery object to make the below coding less bulky, unlike this comment.
			var pos = $elem.position();

			//return an obecjt with the coords of each point
			return {
				TL: {
					x:pos.left,
					y:pos.top
				},
				TR: {
					x: pos.left+$elem.width(),
					y: pos.top
				},
				BL: {
					x: pos.left,
					y: pos.top+$elem.height()
				},
				BR: {
					x: pos.left+$elem.width(),
					y: pos.top+$elem.height()
				}
			};
		}
	};
})(jQuery);

/************************************************************* END ***************************************************************************************/ 

