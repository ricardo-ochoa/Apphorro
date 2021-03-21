import "./components/card.js";
import "./components/historial.js";
import "./components/historial-weeks.js";

//init Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


class savingsCardSaving {
    constructor () {
        this.db = firebase.firestore()
        const settings = { timestampsInSnapshots : true}
        this.db.settings(settings)
    }
}
