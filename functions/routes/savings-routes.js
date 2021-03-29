const {Router} = require('express')
const router = Router()

const admin = require('firebase-admin')

const db = admin.firestore()

//savings

router.post('/api/savings',  async (req, res) => {
  try {
    await db
    .collection('savings')
    .doc("/"+ req.body.id + "/")
    .create({ saving: req.body.saving });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/api/savings/:saving_id", (req, res) => {
  (async () => {
    try {
      const doc = db.collection("savings").doc(req.params.saving_id);
      const item = await doc.get();
      const datos = item.data();
      return res.status(200).json(datos);
    } catch (error) {
      return res.status(500).send(error); 
    }
  })();
});


router.get("/api/savings", async (req, res) => {
  try {
    const query = db.collection("savings");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;

    const response = docs.map((savings) => ({
      id: savings.id,
      saving: savings.data().saving,
      state: savings.data().state,
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json();
  }
});

router.delete("/api/savings/:saving_id", async (req, res) => {
  try {
    const document = db.collection("savings").doc(req.params.saving_id);
    await document.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

router.put("/api/savings/:saving_id", async (req,res) => {
  try {
    const document = db.collection("savings").doc(req.params.saving_id);
    await document.update({
      saving: req.body.saving,
      status: req.body.status,
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

module.exports = router