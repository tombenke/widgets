function(e, doc)
{
    var widget = $(this);
    var app = $$(widget).app;

    return {
        doc : doc,
        title_selected : function()
        {
            return function(text, render)
            {
                if( doc.title.indexOf( text ) >= 0 )
                {
                    return 'selected=true'
                }
            }
        },

        country_options : function()
        {
            return function( text, render )
            {
                var viewResults = {};
                var countries = [
                    {"id":"ALB","key":"ALB","value":"Albania"},
                    {"id":"AND","key":"AND","value":"Andorra"},
                    {"id":"BLR","key":"BLR","value":"Belarus"},
                    {"id":"BLZ","key":"BLZ","value":"Belize"},
                    {"id":"BMU","key":"BMU","value":"Bermuda"},
                    {"id":"BOL","key":"BOL","value":"Bolivia"},
                    {"id":"BRA","key":"BRA","value":"Brazil"},
                ];


            }
        }
    }
}