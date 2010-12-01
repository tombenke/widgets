function ()
{
    var widget = $(this);
    var app = $$(widget).app;

    $('#contactFormTabs').tabs();
    $("#countryCombo").evently( "ajaxCombo", app, { "viewName" : "countries" } );
}

