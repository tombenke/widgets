function(e)
{
    var widget = $(this);
    var app = $$(widget).app;

    widget.trigger('contactForm', widget);
}
