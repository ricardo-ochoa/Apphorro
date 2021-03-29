const functions = require("firebase-functions");
const admin = require('firebase-admin')
const express = require('express')

const app = express()

admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL:"https://apphorro-e0b7e-default-rtdb.firebaseio.com"
})

app.get("/hello-world", (req, res) => {
  return res.status(200).jsoin({ message: "Hello world :)"});
});



app.use(require('./routes/weeks-routes'))
app.use(require('./routes/savings-routes'))

exports.app = functions.https.onRequest(app);



