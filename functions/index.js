const functions = require("firebase-functions");
const admin = require('firebase-admin')
const express = require('express')

const app = express()
admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL:"https://apphorro-e0b7e-default-rtdb.firebaseio.com"
})

const db = admin.firestore()

app.post('/api/saving',  async (req, res) => {
  await db.collection('savings')
    .doc("/"+ req.body.id + "/")
    .create({ saving: req.body.saving });
    return res.status(204).json();
});

exports.app = functions.https.onRequest(app);



