function( e )
{
    var currentValue = $(this).attr('current');

    $('option').each( function()
    {
        if( $(this).attr('value') === currentValue )
        {
            $(this).attr('selected','true');
        }
    });
}