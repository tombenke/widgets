function()
{
    var widget = $(this);
    var app = $$(widget).app;
    var viewResults = {};
  
    app.view(
        "contacts",
        {
            success : function(json)
            {
                viewResults = json;
                widget.trigger("browseViewResults",viewResults);
            }
        }
    );
}

/*
    app.view(
        "countries",
        {
            success : function( results )
            {
                viewResults = results;
                countries = viewResults.rows;

                var options = '';

                for( var country in countries )
                {
                    var countryName = countries[ country ].value;
                    options += '<option value="' + countryName + '"';

                    if( doc.country && doc.country.indexOf( countryName ) >= 0 )
                    {
                        options += 'selected"'

                    }
                    options += '>' + countryName + '</option>';
                }
                alert( options );
                return options;
            }
        }
    );
*/