Függőségek:
===========

    findCommentsByObject view,

Ha külön adabázisban tároljuk a commenteket, akkor a viewnek a következő elérési
útvonal szükséges:

    _design/hivatkozó_adatbázis_neve/findCommentsByObject

például: ha widgets alkalmazással tolom fel és a comments adatbázisban
vannak a kommentek, akkor az elérési útvonal:

    /comments/_design/widgets/_view/findCommentsByUser