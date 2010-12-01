function ()
{
    var widget = $(this);
    var app = $$(widget).app;

    $('#contactFormTabs').tabs();
    $("#country").evently( "ajaxCombo", app, { "viewName" : "countries" } );
}

