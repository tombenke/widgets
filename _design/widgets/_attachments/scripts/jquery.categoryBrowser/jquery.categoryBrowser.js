/*
 * jQuery - CategoryBrowser - Plugin v1.0
 */

( function( $ )
{
    $.fn.categoryBrowser = function( options )
    {
        var input = $( this );
        var root = $(this).next( 'span' )

        var defaults = {
            floating : true,
            tooltip : 'click here to select a category',
            expandClass : "expArrow",
            collapseClass : "collArrow",
            effect : 'fade'
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

        function updateSelectedText( obj )
        {
            var path = $(obj).parentsUntil( root )
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
                    selectedText = $( anchor ).text() + selectedText;
                }
            }
            $( input ).val( selectedText );
        }

        function showUList( ul )
        {
            ul[ effectShow ]();
            var subItems = $( ul ).find( '> li' );
            for( var item=0; item < subItems.length; item++ )
            {
                if( $( subItems[ item ] ).is( 'li' ) )
                {
                    var li = $( subItems[ item ] )[0];
                    $( li ).find( '> ul' )[ effectHide ]();
                }
            }
        }

        function expandBranch( obj )
        {
            callBeforeCallback( obj );

            obj.parent().siblings( null )[ effectHide ]();
            obj.removeClass( options.expandClass );
            obj.addClass( options.collapseClass );

            updateSelectedText( obj );

            var ul = obj.next();
            if( ul.length > 0 )
            {
                showUList( ul );
            }
            else
            {
                // This is a leaf node, so close the browser
                $( input ).trigger('click');
            }
        }

        function collapseBranch( obj )
        {
            callBeforeCallback( obj )

            obj.parent().siblings( null )[ effectShow ]();
            obj.removeClass( options.collapseClass );
            obj.addClass( options.expandClass );

            obj.next()[ effectHide ]();

            updateSelectedText( obj );
        }

        function toggleElement( obj )
        {
            if( obj.parent().siblings( null ).is( ':visible' ) )
            {
                expandBranch( obj );
            }
            else
            {
                collapseBranch( obj );
            }
        }


        return this.each(
            function()
            {
                // Initialize
                $( root ).find( 'a' ).toggle(
                    function()
                    {
                        toggleElement( $( this ) );
                    },

                    function()
                    {
                        toggleElement( $( this ) );
                    }
                )
                    .removeClass( options.collapseClass )
                    .addClass( options.expandClass );

                if( options.floating )
                {
                    var inputPosition = $( input ).position();

                    $( root ).css(
                        {
                            'position' : 'absolute',
                            'width': '350px',
                            'border' : '1px solid gray',
                            'background-color' : 'white',
                            'visibility': 'visible',
                            'top' : inputPosition.top + $( input ).height(),
                            'left' : inputPosition.left + 50,
                            'z-index' : 1
                        }
                    );
                }

                var mainUL = $( root ).find( '> ul' )[0];
                showUList( $( mainUL ) );

                $( root ).hide();

                var inputWrapper = $( this );

                $( inputWrapper ).toggle(
                    function()
                    {
                        $( root ).slideDown();
                    },

                    function()
                    {
                        $( root ).slideUp();
                    }
                );
            }
        );
    };
})( jQuery );