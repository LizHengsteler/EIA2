namespace L01 {
    //bearbeitet mit Lena, Kriss und Amélie

    let subject: string [] = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];
    let verb: string [] = ["liebt", "küsst", "studiert", "ignoriert", "schlägt", "tanzt mit"];
    let object: string [] = ["Lena", "Kriss", "Amélie", "Hannah", "Theo", "Liz"];

    //console.log(subject, verb, object);
    
    for (let index: number = subject.length; index > 0; index--) { 

        getVerse(subject, verb, object);
        //console.log(index);
    }

    function getVerse (_subject: string[], _verb: string[], _object: string[] ): string { //_Platzhalter für Übergabe
        let vers: string = "";
        let randomNumberSubject: number = Math.floor(Math.random() * _subject.length);
        let randomNumberVerb: number = Math.floor(Math.random() * _verb.length);
        let randomNumberObject: number = Math.floor(Math.random() * _object.length);
        vers = vers + _subject.splice(randomNumberSubject, 1) + " " +  _verb.splice(randomNumberVerb, 1) + " " + _object.splice(randomNumberObject, 1);
        console.log(vers);
        //console.log(_subject);
        //console.log(randomNumberSubject);
        return("Späßle");   
    } //console.log(getVerse);

}