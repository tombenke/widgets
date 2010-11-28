function( e, data )
{
    alert('_init.data() returns to template with data stored in app.');
    return { 
        "title" : $$(this).title,
        "planets" : $$(this).planets
    };
}