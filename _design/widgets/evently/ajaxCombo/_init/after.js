function( e )
{
    var currentValue = $(this).attr('current');

//    alert(currentValue);
    $('option').each( function()
    {
        if( $(this).attr('value') === currentValue )
        {
            $(this).attr('selected','true');
        }
    });
}