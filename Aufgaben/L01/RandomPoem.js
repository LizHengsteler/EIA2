"use strict";
var L01;
(function (L01) {
    //bearbeitet mit Lena, Kriss und Amélie
    let subject = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];
    let verb = ["liebt", "küsst", "studiert", "ignoriert", "schlägt", "tanzt mit"];
    let object = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];
    //console.log(subject, verb, object);
    for (let index = subject.length; index > 0; index--) {
        getVerse(subject, verb, object);
        //console.log(index);
    }
    function getVerse(_subject, _verb, _object) {
        let vers = "";
        let randomNumberSubject = Math.floor(Math.random() * _subject.length);
        let randomNumberVerb = Math.floor(Math.random() * _verb.length);
        let randomNumberObject = Math.floor(Math.random() * _object.length);
        vers = vers + _subject.splice(randomNumberSubject, 1) + " " + _verb.splice(randomNumberVerb, 1) + " " + _object.splice(randomNumberObject, 1);
        console.log(vers);
        //console.log(_subject);
        //console.log(randomNumberSubject);
        return ("Späßle");
    } //console.log(getVerse);
})(L01 || (L01 = {}));
//# sourceMappingURL=RandomPoem.js.map