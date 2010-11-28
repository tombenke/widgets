function(e)
{
    var widget = $(this);
    var app = $$(widget).app;
    var widgetPayload = {};
    
    if( ! (typeof e.data.args[1] === 'undefined') )
    {
        widgetPayload = e.data.args[1];
    }

    if( $(this).attr('value') == 'Accept' )
    {
        $(this).trigger( 'step2', widgetPayload );
    }
    else
    {
        $(this).trigger( 'decline' );
    }
}
