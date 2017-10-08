(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBeZK2LVsSCD5HMs7f29EeNb7hTbzxhwkg",
        authDomain: "firsttest-10180.firebaseapp.com",
        databaseURL: "https://firsttest-10180.firebaseio.com",
        storageBucket: "firsttest-10180.appspot.com",
        messagingSenderId: "728659174804"
    };
    firebase.initializeApp(config);

    // Create basic categories
    firebase.database().ref('categories/1').set({ name: "Desk" });
    firebase.database().ref('categories/2').set({ name: "Chair" });
    firebase.database().ref('categories/3').set({ name: "Door" });

    var preObject = document.getElementById('object');

    var dbRefObject = firebase.database().ref().child('categories');

    //dbRef = dbRefObject;

    //console.log(dbRefObject.order);

    dbRefObject.on('value', function (snapshot) {
        preObject.innerText = JSON.stringify(snapshot.val(), null, 3);
    });

}());
