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

        //set position of the cross hairs
        $('div#cross-hairs').css({
           top: (($(window).height() - $('div#cross-hairs').height()) / 2),
           left: (($(window).width() - $('div#cross-hairs').width()) / 2)
        });
        //Get position of div one
        var a = $U.getItemPosition(document.getElementById('position-one'));
        console.log(a);
        var b = $('#main-nav');
        console.log($U.getItemPosition(document.getElementById('main-nav')));

			$('div#crosshairs').crosshairs({width:'20px', height: '20px'});
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
            $U.scrollToObject(document.getElementById('position-one'))
        });
    }
}
/************************************************************* END ***************************************************************************************/

