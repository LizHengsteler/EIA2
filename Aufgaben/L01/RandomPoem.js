var L01;
(function (L01) {
    //bearbeitet mit Lena, Kriss und Amélie
    var subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var verb = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    /*console.log(subject);
    console.log(verb);
    console.log(object);*/
    for (var index = subject.length; index > 0; index--) {
        getVerse(subject, verb, object);
        //console.log(index);
    }
    /*for (let index: number = verb.length; index > 0; index--) {
        //console.log(index);

    }

    for (let index: number = object.length; index > 0; index--) {
        //console.log(index);

    }*/
    function getVerse(_subject, _verb, _object) {
        var vers = "";
        var randomNumberSubject = Math.floor(Math.random() * _subject.length);
        var randomNumberVerb = Math.floor(Math.random() * _subject.length);
        var randomNumberObject = Math.floor(Math.random() * _subject.length);
        vers = vers + _subject.splice(randomNumberSubject, 1)[0] + " " + _verb.splice(randomNumberVerb, 1) + " " + _object.splice(randomNumberObject, 1);
        console.log(vers);
        //console.log(_subject);
        //console.log(randomNumberSubject);
        //return("Alohomora");
    }
    //console.log(getVerse);
})(L01 || (L01 = {}));
//# sourceMappingURL=RandomPoem.js.map