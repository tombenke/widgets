function( e )
{
    var currentValue = $(this).find('#country').attr('current');

    $('option').each( function()
    {
        if( $(this).attr('value') === currentValue )
        {
            $(this).attr('selected','true');
        }
    });
}