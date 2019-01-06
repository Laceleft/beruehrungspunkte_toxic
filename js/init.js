var dbname = "gmci";
var dburl = "http://127.0.0.1:5984/" + dbname + "/";

function createDb(){
    
    $.ajax({
        url: dburl,
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            console.log("Created db successfully");
        },
        error: function (a, b, c) {
            console.log(a, b, c);
        }
    });

}

function addBasicDocuments(){

    let persons = getPersonDemoData();

    let data = {
        "persons" : persons
    };

    $.ajax({
        url: dburl + "persons",
        type: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (data) {
            console.log("Documents saved successfully");
        },
        error: function (a, b, c) {
            console.log(a, b, c);
        }
    });
}

function getPersonDemoData(){
    let fragenList1 = [
        {
            "Frage" : "Was bringt dich morgens aus dem Bett?",
            "Antwort" :"Naja, der Tag. Der Tag muss starten. Und es bringt bestimmt etwas gutes – hoffe ich. Also manchmal ist es auch schwer aus dem Bett zu kommen. Aber ich habe zum Beispiel einen Wecker, da geht das Licht an und das ist im Winter echt gut. Da ist man morgens nicht mehr ganz so verschlafen. Und dann muss man wohl oder übel die Augen auf machen.",
        },
        {
            "Frage" : "Du bist also jemand der morgens sagt: Da kommt jetzt ein unglaublich toller Tag und ich springt jetzt aus dem Bett und will sofort loslaufen...",
            "Antwort" :"Naja...manchmal schon. Wenn man sich auf etwas freut dann schon. Aber an nem Montag, wenn man früh zur Schule muss, ist das natürlich schwierig.",
        },
        {
            "Frage" : "Bitte vervollständige den folgenden Satz: Früher war ich...heute bin ich...",
            "Antwort" :"Früher war ich glaube ich etwas aufgedrehter. Und heute bin ich ein Bisschen ruhiger. Mit den Jahren macht man sich ja um viele Sachen immer mehr Gedanken. Und man wird aber auch gelassener. Mir ist irgendwie bewusst geworden, dass ich ich selbst sein soll und dass das gut ist und dass jeder etwas Gutes hat.",
        },
        {
            "Frage" : "Wenn du jetzt auf die Zukunft schaust, was möchtest du dann für ein Mensch sein?",
            "Antwort" :"Also weil ich meine Ausbildung zur Goldschmiedin angefangen habe, denke ich viel darüber nach: Was mache ich in der Zukunft? Mache ich mich vielleicht mal selbstständig? Das ist mittlerweile schon so ein Ziel – und ich hoffe, dass ich das irgendwie alles gut geregelt bekomme. Es ist ja nicht leicht selbstständig zu sein, aber da habe ich auf jeden Fall Lust drauf. Und ich habe Lust, vielleicht irgendwann eine große Familie zu haben.",
        },
        {
            "Frage" : "Wie würde das genau aussehen, wenn du dann selbstständig bist?",
            "Antwort" :"Naja, du machst halt irgendwann deinen eigenen Laden auf. Ich denke mal, dass ich vielleicht noch Schmuckdesign studieren werde. Und dann kann man ja vielleicht nebenbei in Goldschmieden arbeiten – so ein oder zwei Tage. Aber Onlineverkauf – weiß ich nicht genau. Das ist eigentlich schon die Zukunft. Das machen schon viele Leute. Aber mir macht das Spaß, mit Kunden zu agieren. Also mit Menschen zu reden. Das ist eigentlich das, was mir Freude bereitet. Also wäre ein Laden schon eher etwas für mich.",
        },
        {
            "Frage" : "Was macht dich glücklich?",
            "Antwort" :"Menschen. Also mit Anderen, mit Freunden zusammen zu sein. Zu lachen. Oder auch Gutes zu tun. Mit der Familie zusammen zu sein. Oder in die Natur zu gehen. Es gibt viele Dinge, die einen glücklich machen finde ich. Auch oft Kleinigkeiten. Deswegen wollte ich auch mit euch irgendwo draußen sein. Weil ich das immer schön finde. Man sieht Schwäne oder Enten die sich um irgendwas streiten. Das sind irgendwie diese Kleinigkeiten die ich schön finde.",
        },
        {
            "Frage" : "Wann wirst du traurig?",
            "Antwort" :"Also wenn Menschen anderen Menschen oder Tieren Leid zufügen. Das macht mich sehr traurig. Oder wenn manche Menschen ungerechtfertigt nicht nett zu einem sind. Ich arbeite zum Beispiel nebenbei noch in einem Café und da kommen manchmal Menschen             rein, die sind von vornherein fies zu dir. Oder behandeln dich einfach nicht nett. Und das finde ich irgendwie immer traurig. Ich versteh das nicht. Ich finde das nicht schwer einfach zu lächeln oder kurz etwas Nettes zu sagen. Aber dann denke ich mir auch, dass die Menschen vielleicht schon genug gestraft sind. Die haben dann wahrscheinlich auch kein glückliches Leben, wenn sie schon so drauf sind.", 
        },
        {
            "Frage" : "Gibt es da einen Moment, der dir besonders im Kopf geblieben ist?",
            "Antwort" :"Also das hat mich jetzt nicht so richtig traurig gemacht, aber so ein Bisschen sauer: Als ich im Café gearbeitet habe...das ist so ein Typ, der kommt immer rein und geht einfach aufs Klo, ohne irgendwie mal „Hallo“ zu sagen. Oder zu lächeln oder zu fragen „Kann ich mal das Klo benutzen“? Und dann habe ich ihm mal gesagt „Es wäre nett, wenn Sie das nächste Mal fragen“. Und dann hat der mich halt voll „angepammpt“. Das habe ich einfach nicht verstanden. Warum kann man nicht einfach fragen und kurz „Hallo“ sagen. Das ist ja nicht schwer. Und so etwas versteh ich dann nicht.",
        },
        {
            "Frage" : "Gab es denn einen Wendepunkt in deinem Leben?",
            "Antwort" :"Also ich war mit 16 in Neuseeland und dann bin ich wiedergekommen und war in einer neuen Klasse – viele neue Leute. Und da hatte ich dann nicht viele von meinen alten Freunden und war vielleicht ein Bisschen unsicher. Und da hat man sich auch ein Bisschen verändert. Aber das war glaube ich auch wegen dem Auslandsjahr. Da passiert ja auch viel mit einem wenn man ein Jahr weg ist von zu Hause. Da wird man dann vielleicht ein Bisschen nachdenklicher. Aber das war kein richtiger Punkt wo sich großartig etwas geändert hat. Das ist ein schleichender Prozess. Ich denke mal, das ist auch irgendwo normal, dass die Menschen ein Bisschen ruhiger werden und sich auf sich selbst besinnen.",
        },
        {
            "Frage" : "Wenn du eine Sache ändern könntest, was wäre das?",
            "Antwort" :"Wenn ich eine Sache ändern könnte, dann würde ich die massenhafte Tierhaltung verbieten. Aber das ist nicht so leicht.",
        },
        {
            "Frage" : "Was ist dein Talent? Was macht dich aus?",
            "Antwort" :"Ich denke mal, dass ich gut auf Menschen zugehen kann. Und dass ich positiv an Dinge herangehe.",
        },
        {
            "Frage" : "Was bringt dich zum Lachen?",
            "Antwort" :"Menschen. Mit Menschen zu reden. Einfach irgendwie positive Energie auszustrahlen, aufzunehmen.",
        },
        {
            "Frage" : "Was steht ganz oben auf deiner „Bucket-List“?",
            "Antwort" :"Ich hätte gerne so nen Raum, wo ich mit Farbe um mich schmeißen kann. Auf so etwas habe ich manchmal total Lust. So nen Eimer mit Farbe zu haben und das dann überall an die Wand zu klatschen...und mit den Händen. Manchmal habe ich da voll Lust drauf kreativ auszurasten. Aber leider habe ich so einen Raum nicht... .",
        },
        {
            "Frage" : "Möchtest du noch etwas hinzufügen?",
            "Antwort" :"Menschen seid offen zu anderen Menschen! Seid nicht voreingenommen.",
        },
    ];

    let person1 = {
        "Name": "Leona",
        "Foto": "Beruehrungspunkte_Foto_Leona_1.jpg", 
        "Fragen" : fragenList1
    };

    let fragenList2 = [
        {
            "Frage" : "Was bringt dich morgens aus dem Bett?",
            "Antwort" :"Meine Arbeit. Ich habe jeden Tag einen Kurs. Und ich habe die Verantwortung für meine Schüler. Deswegen muss ich frühzeitig aufstehen und zu meiner Arbeit gehen.",
        },
        {
            "Frage" : "Worauf bist du stolz?",
            "Antwort" :"Auf mich selbst. Ich bin ganz zufrieden mit meinem jetzigen Zustand, dass ich direkt nach meinem Abschluss eine Arbeit habe. Und ich kann den Schülern deutsch beibringen. Ich bekomme Erfolgsgefühle durch meinen Job.",
        },
        {
            "Frage" : "Was bringt dich zum Lachen?",
            "Antwort" :"Meine Familie. Jedes Mal wenn ich mit meiner Mama telefoniere kann ich immer ganz laut lachen. Auch wenn ich mit meiner besten Freundin telefoniere fühle ich mich auch ganz glücklich.",
        },
        {
            "Frage" : "Wenn du später auf dein Leben zurückblickst, was wirst du dann sagen wollen?",
            "Antwort" :"Wenn ich später auf mein Leben zurückblicke, will ich sagen: „Ja, du hast bis jetzt alles richtig gemacht und du bereust nichts, was du bis jetzt gemacht hast“.",
        },
        {
            "Frage" : "Was macht dich glücklich?",
            "Antwort" :"Meine Familie vor allem. Und meine Freunde. Und meine Arbeit macht mich auch ganz glücklich – insbesondere meine Schüler. Es macht mir total Spaß mit ihnen zu reden. Die sind total süß.",
        },
        {
            "Frage" : "Was genau macht dich an deinem Job so glücklich?",
            "Antwort" :"Das Erfolgsgefühl das ich jemandem etwas Nützliches beibringen kann. Am Anfang konnten meine Schüler gar kein deutsch. Und innerhalb von 10 Monaten konnten sie schon das B2-Niveau erreichen und es fällt ihnen schon leicht mit deutschen Muttersprachlern zu kommunizieren. Das macht mich wirklich glücklich – dieses Gefühl von Erfolg.",
        },
        {
            "Frage" : "Gab es einen Wendepunkte in deinem Leben?",
            "Antwort" :"Vor fünf/sechs Jahren. Es war mein zweites Studienjahr. Damals habe ich an einem Austauschprojekt von der Uni teilgenommen und bin zum ersten Mal nach Deutschland gekommen. Davor studierte ich zwei Fächer und ich wollte eigentlich in China bleiben und vielleicht Jura weiter studieren und später als Rechtsanwältin arbeiten. Und durch diese erste Erfahrung in Deutschland habe ich gemerkt: „Ich liebe dieses Land. Ich möchte hier gerne weiter studieren in meinem Master und ich möchte auch die Berufswelt hier erleben“. Ich habe dann mein Jury-Studium aufgegeben und mich nur auf Germanistik konzentriert.",
        },
        {
            "Frage" : "Was genau machst du jetzt?",
            "Antwort" :"Ich arbeite als Deutschlehrerin an einer privaten Sprachschule. Und die meisten Schüler kommen aus Lateinamerika. Und die anderen aus der ganzen Welt. Aus Russland, aus der Türkei und so weiter.",
        },
        {
            "Frage" : "Wenn du eine Sache ändern könntest, was wäre das?",
            "Antwort" :"Es wäre schöner, wenn ich schon von klein auf deutsch gelernt hätte. Bis jetzt habe ich das Gefühl, dass ich diese Sprache nicht komplett beherrsche. Deswegen wäre es schöner, wenn das möglich wäre.",
        },
        {
            "Frage" : "Was würdest du als dein Talent bezeichnen?",
            "Antwort" :"Musikalisch bin ich nicht begabt. Sportlich bin ich auch nicht. Ich würde sagen...vielleicht sprachlich. Also ich kann englisch und deutsch. Englisch nicht so gut wie deutsch. Ich arbeite ja jetzt als Deutschlehrerin. Deswegen kann ich schon gutes deutsch. Und chinesisch als meine Muttersprache. Und kantonesisch kann ich auch. Ich komme aus einer Provinz wo kantonesisch gesprochen wird. Und dann lerne ich momentan selbst noch koreanisch. Ich habe auch einige Freunde aus Südkorea. Und französisch habe ich auch gelernt. Aber ich glaube ich habe diese Sprache vielleicht schon verlernt.",
        },
        {
            "Frage" : "Was steht ganz oben auf deiner „Bucket-List“?",
            "Antwort" :"Ich würde später gerne nochmal „Sky-Diving“ machen. Das finde ich total spannend.",
        },
    ];

    let person2 = {
        "Name": "Xiangho",
        "Foto": "Beruehrungspunkte_Foto_Xianghu_1.jpg",
        "Fragen": fragenList2
    };

    let persons = [person1, person2];
    return persons;
}

