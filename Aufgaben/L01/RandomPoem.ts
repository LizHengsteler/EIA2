namespace L01 {

    //bearbeitet mit Lena, Kriss und Amélie


    let subject: string [] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verb: string [] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object: string [] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    /*console.log(subject);
    console.log(verb);
    console.log(object);*/

    for (let index: number = subject.length; index > 0; index--) {

        getVerse(subject, verb, object);
        //console.log(index);

    }

    /*for (let index: number = verb.length; index > 0; index--) {
        //console.log(index);

    }

    for (let index: number = object.length; index > 0; index--) {
        //console.log(index);

    }*/

    function getVerse (_subject: string[], _verb: string[], _object: string[] ): void {
        let vers: string = "";
        let randomNumberSubject: number = Math.floor(Math.random() * _subject.length);
        let randomNumberVerb: number = Math.floor(Math.random() * _subject.length);
        let randomNumberObject: number = Math.floor(Math.random() * _subject.length);
        vers = vers + _subject.splice(randomNumberSubject, 1)[0] + " " +  _verb.splice(randomNumberVerb, 1) + " " + _object.splice(randomNumberObject, 1);
        console.log(vers);
        

        //console.log(_subject);

        //console.log(randomNumberSubject);


        //return("Alohomora");
        
    }

    //console.log(getVerse);


    


}