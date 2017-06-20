/**

# JavaScript - QuickSearch Jquery Plugin

Working example
===============

--------------------------------------------------------------------
<input type="text" id="quicksearchquery" />

<ul id="list">
<li>1</li>
<li>2</li>
<li>3</li>
<li>4</li>
</ul>
--------------------------------------------------------------------
$('#list').quicksearch();
--------------------------------------------------------------------

*/


(function ( $ ) {

    $.fn.quicksearch = function( options ) {

        // These are the defaults.
        var settings = $.extend({
            input: '#quicksearchquery',
            itemSelector: 'li'
        }, options );


        var list = $(this);

        $(settings.input).on('keyup',function(e){

            console.log("key upped")

            //show all previously hidden elements
            list
                .find(settings.itemSelector)
                .show();

            //input value
            var value = $(settings.input).val();

            //hide elements that does not match the input query
            list
                .find(settings.itemSelector)
                .filter( function(index, element){
                    var str = $(element).text();
                    return str.indexOf( value ) < 0;
                }).hide();
        });

    };

}( jQuery ));
