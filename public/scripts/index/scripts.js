/**********************************************************************************************************************************************************
 * GLOBAL VARS/FUNCTIONS                                                                                                                                                                                                                                                                    *
 *********************************************************************************************************************************************************/

/************************************************************* END GLOBAL VARS ***************************************************************************/


/**********************************************************************************************************************************************************
 * DOCUMENT READY                                                                                                                                                                                                                                                                              *
 *********************************************************************************************************************************************************/
$(document).ready(function () {

});

/**********************************************************************************************************************************************************
 * WINDOW LOAD                                                                                                                                                                                                                                                                              *
 *********************************************************************************************************************************************************/
$(window).load(function () {
    var idx = new Index();
});


/**********************************************************************************************************************************************************
 * INDEX Obect                                                                                                                                                                                                                                                                              *
 **********************************************************************************************************************************************************
 *
 *
 *
 *
 *
 *
 */
var Index = function() {
    var self = this;

    //start the prototype
    this.init();
};

/**
 * INDEX PROTOTYPE
 */
Index.prototype = {
    /**
     * INIT
     */
    init: function() {
        var self = this;

        //build styles
        this.loadStyles();

        //manage events
        this.bindEvents();
    },
    /**
     * LOAD STYLES
     */
    loadStyles: function() {
        var self = this;

        //Get position of div one
        var a = $U.getItemPosition(document.getElementById('position-one'));
        console.log(a);
        var b = $('#main-nav');
        console.log($U.getItemPosition(document.getElementById('main-nav')));

				//set up the crosshairs plugin
				$('div#crosshairs').crosshairs({
					 size: '20px',
					 alignment: 'center',
					 pathing: 'fixed',
					 content: {
					 		home: {
								trigger: $('a#main-nav-link-home'),
								target: $('#position-one')
							},
							about: {
								trigger: $('a#main-nav-link-about'),
							 	target: $('#position-two')
							},
						 	services: {
							 	trigger: $('a#main-nav-link-services'),
							 	target: $('#position-three')
						 	},
							work: {
								trigger: $('a#main-nav-link-work'),
								target: $('#position-four')
							},
						 	contact: {
								 trigger: $('a#main-nav-link-contact'),
								 target: $('#position-five')
							 }
					 }
				});
    },
    /**
     * BIND EVENTS
     */
    bindEvents: function() {
        var self = this;
        //main nav event handling
        $('.main-nav-link ').bind('click', function(e) {
            //prevent any page loads from occurring
            e.preventDefault();
        });
    }
}
/************************************************************* END ***************************************************************************************/

