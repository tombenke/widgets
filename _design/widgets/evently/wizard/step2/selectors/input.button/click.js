function(e)
{
    var widgetPayload = e.data.args[1];
    var widget = $(this);
    var app = $$(widget).app;
  
    widgetPayload.userName = $('#userName').attr('value');
    widgetPayload.password = $('#password').attr('value');
  
    if( widget.attr( 'value' ) == 'Back' )
    {
        widget.trigger( '_init', widgetPayload );
    }
    else
    {
        widget.trigger( 'step3', widgetPayload );
    }

}
