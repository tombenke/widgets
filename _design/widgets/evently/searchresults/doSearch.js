function( e, searchCriteria )
{
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};

    $.couch.session({
        success : function(r)
        {
            if( searchCriteria.textToSearch &&
                searchCriteria.textToSearch.length > 0 )
            {
                app.view(
                    "findNoteByWord",
                    {
                        success : function(json)
                        {
                            viewResults = json;
                            widget.trigger("browseSearchResults",viewResults);
                        },
                        key : searchCriteria.textToSearch.toLowerCase()
                    });
            }
            else
            {
                app.view(
                    "notes",
                    {
                        success : function(json)
                        {
                            viewResults = json;
                            widget.trigger("browseSearchResults",viewResults);
                        }
                    });
            }
        }
    });
}