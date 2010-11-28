function(e)
{
    alert('_init.before() : initialize the app data (planets) to display.');

    $$(this).title = "The planets of the solar system:";
    $$(this).planets = [
        { "name" : "Mercury" },
        { "name" : "Venus" },
        { "name" : "Earth" },
        { "name" : "Mars" },
        { "name" : "Jupiter" },
        { "name" : "Saturn" },
        { "name" : "Neptune" },
        { "name" : "Uranus" },
        { "name" : "Pluto" }
    ];

}