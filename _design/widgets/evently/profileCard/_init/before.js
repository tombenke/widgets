function(e, args )
{
    if( ! $$(this).args )
    {
        $$(this).args = args;
    }

    alert( 'before' + $$(this).args.userId );
}