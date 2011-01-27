/* 
 * jQuery - CategoryBrowser - Plugin v1.0
 */

( function( $ )
{
    $.fn.collapser= function( options )
    {
        var root = $( this ).parents( '#collapserContainer' );
        ////console.log( root );

        var defaults = {
            target: 'siblings',
            effect: 'fade',
            expandClass: 'collIco',
            collapseClass: 'expIco',
            changeText: false
        };
        
        var options = $.extend( defaults, options );
		
        var effectShow;
        var effectHide;
		
        if( options.effect == 'slide' )
        {
            effectShow = 'slideDown';
            effectHide = 'slideUp';
        }
        else
        {
            effectShow = 'fadeIn';
            effectHide = 'fadeOut';
        }
		
        function callBeforeCallback( obj )
        {
        }
		
        function callAfterCallback( obj )
        {
            ////var root = $(obj).parents( '#collapserContainer' );
            var path = $(obj).parentsUntil( '#collapserContainer' )
            var selectedText = "";

            for( var item=0; item < path.length; item++ )
            {
                if( $( path[ item ] ).is('li') )
                {
                    var li = $( path[ item ] )[ 0 ];
                    var anchor = $( li ).children()[ 0 ];

                    if( selectedText != "" )
                    {
                        selectedText = " / " + selectedText;
                    }
                    selectedText = anchor.text + selectedText;
                }
            }
            $( root[0].children[0] ).text( selectedText );
        }
		
        function hideElement( obj )
        {
            callBeforeCallback( obj );

            obj.parent().siblings( null )[ effectHide ]();
            obj.removeClass( options.collapseClass );
            obj.addClass( options.expandClass );

            obj.next()[ effectShow ]();

            callAfterCallback( obj );
        }
		
        function showElement( obj )
        {
            callBeforeCallback( obj )

            obj.parent().siblings( null )[ effectShow ]();
            obj.removeClass( options.expandClass );
            obj.addClass( options.collapseClass );

            obj.next()[ effectHide ]();

            callAfterCallback( obj );
        }
		
        function toggleElement( obj )
        {
            if( obj.parent().siblings( null ).is( ':visible' ) )
            {
                hideElement( obj );
            }
            else
            {
                showElement( obj );
            }
        }
		
        return this.each(
            function()
            {
                $( this ).toggle(
                    function()
                    {
                        toggleElement( $( this ) );
                    },

                    function()
                    {
                        toggleElement( $( this ) );
                    }
                );

                // Initialize
                /*
                if( $( this ).parent().siblings().is( ':hidden' ) )
                {
                    $( this ).removeClass( options.collapseClass );
                    $( this ).addClass( options.expandClass );
                }
                else
                {
                    $( this ).removeClass( options.expandClass );
                    $( this ).addClass( options.collapseClass );
                }
                */
                $( this ).removeClass( options.expandClass );
                $( this ).addClass( options.collapseClass );
            }
        );
    };
})( jQuery );