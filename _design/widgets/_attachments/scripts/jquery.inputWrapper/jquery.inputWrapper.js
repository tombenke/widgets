/*
 * jQuery - CategoryBrowser - Plugin v1.0
 */

( function( $ )
{
    $.fn.inputWrapper = function( options )
    {
        var input = $( this );
        var root = $(this).next( 'div' )

        var defaults = {
            floating : true,
            tooltip : 'click here to activate the widget',
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

        function callAfterCallback( obj )
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
                    selectedText = anchor.text + selectedText;
                }
            }
            $( input ).val( selectedText );
        }

        function showUList( ul )
        {
            console.log( 'showUList', ul );

//                obj.next()[ effectShow ]();
//                var subItems = $( obj.next() ).find( '> li' );
            ul[ effectShow ]();
            var subItems = $( ul ).find( '> li' );
            for( var item=0; item < subItems.length; item++ )
            {
                if( $( subItems[ item ] ).is( 'li' ) )
                {
                    var li = $( subItems[ item ] )[0];
                    ////console.log( 'li:', li );
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

            var ul = obj.next();
            showUList( ul );

            callAfterCallback( obj );
        }

        function collapseBranch( obj )
        {
            callBeforeCallback( obj )

            obj.parent().siblings( null )[ effectShow ]();
            obj.removeClass( options.collapseClass );
            obj.addClass( options.expandClass );

            obj.next()[ effectHide ]();

            callAfterCallback( obj );
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
                );

                if( options.floating )
                {
                    var top = $( input ).css('bottom');
                    var left = $( input ).css('left');

                    $(root).css(
                        {
                            'position' : 'absolute',
                            'width': '250px',
                            'border' : '1px solid gray',
                            'background-color' : 'khaki',
                            'visibility': 'visible',
                            'top' : top,
                            'left' : left,
                            'z-index' : 1
                        }
                    );
                }

                var mainUL = $( root ).find( '> ul' )[0];
                showUList( $( mainUL ) );

                $( root ).hide();

                $( this ).wrap( '<a href="#"></a>' ).parent().toggle(
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