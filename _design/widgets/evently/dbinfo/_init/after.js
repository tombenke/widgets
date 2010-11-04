function()
{
    var widget = $( this );
    $.ajax({
        url : '/',
        complete : function( req )
        {
            var resp = $.httpData( req, "json" );
            widget.trigger( "version", [ resp ] );
        }
    })
}
