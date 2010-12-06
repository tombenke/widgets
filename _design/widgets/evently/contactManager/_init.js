function()
{
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};

    alert('contactForm._init');
    app.view(
        "contacts",
        {
            success : function(json)
            {
                viewResults = json;
                alert('trigger(browseViewResults)');
                widget.trigger("browseViewResults",viewResults);
            }
        }
    );
}