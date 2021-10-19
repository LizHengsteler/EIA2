var L01;
(function (L01) {
    //bearbeitet mit Lena, Kriss und Amélie
    var subject = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];
    var verb = ["liebt", "küsst", "studiert", "ignoriert", "schlägt", "tanzt mit"];
    var object = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];
    //console.log(subject, verb, object);
    for (var index = subject.length; index > 0; index--) {
        getVerse(subject, verb, object);
        //console.log(index);
    }
    function getVerse(_subject, _verb, _object) {
        var vers = "";
        var randomNumberSubject = Math.floor(Math.random() * _subject.length);
        var randomNumberVerb = Math.floor(Math.random() * _verb.length);
        var randomNumberObject = Math.floor(Math.random() * _object.length);
        vers = vers + _subject.splice(randomNumberSubject, 1) + " " + _verb.splice(randomNumberVerb, 1) + " " + _object.splice(randomNumberObject, 1);
        console.log(vers);
        //console.log(_subject);
        //console.log(randomNumberSubject);
        return ("Späßle");
    } //console.log(getVerse);
})(L01 || (L01 = {}));
//# sourceMappingURL=RandomPoem.js.map