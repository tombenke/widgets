function() {
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};
    var searchCriteria = {};
  
    $.couch.session({
        success : function(r)
        {
            if( searchCriteria.key )
            {
                app.view(
                    "findNoteByWord",
                    {
                        success : function(json)
                        {
                            viewResults = json;
                            widget.trigger("browseSearchResults",viewResults);
                        },
                        key : searchCriteria.textToSearch
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
