function(e)
{
    var widget = $(this);
    var app = $$(widget).app;
    var widgetPayload = e.data.args[1];
  
    widgetPayload.remark = $('#remark').attr('value');

    if($(this).attr('value') == 'Back')
    {
        $(this).trigger('step2', widgetPayload);
    }
    else if($(this).attr('value') == 'Finish')
    {
        widget.trigger('finish', widgetPayload);
    }
}
