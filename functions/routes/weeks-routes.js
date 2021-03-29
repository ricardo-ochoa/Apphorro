const {Router} = require('express')
const router = Router()

const admin = require('firebase-admin')

const db = admin.firestore()

//weeks

    router.get("/api/weeks", async (req, res) => {
    try {
      const query = db.collection("weeks");
      const querySnapshot = await query.get();
      const docs = querySnapshot.docs;
  
      const response = docs.map((weeks) => ({
        id: weeks.id,
        week: weeks.data().week,
      }));
  
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json();
    }
  });
  
  router.post('/api/weeks',  async (req, res) => {
    try {
      await db
      .collection('weeks')
      .doc("/"+ req.body.id + "/")
      .create({ week: req.body.week });
      return res.status(204).json();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  });
  
  router.get("/api/weeks/:week_id", (req, res) => {
    (async () => {
      try {
        const doc = db.collection("weeks").doc(req.params.week_id);
        const item = await doc.get();
        const datos = item.data();
        return res.status(200).json(datos);
      } catch (error) {
        return res.status(500).send(error); 
      }
    })();
  });
  
  router.put("/api/weeks/:week_id", async (req,res) => {
    try {
      const document = db.collection("weeks").doc(req.params.week_id);
      await document.update({
        week: req.body.week,
      });
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json();
    }
  });
  
  router.delete("/api/weeks/:week_id", async (req, res) => {
    try {
      const document = db.collection("weeks").doc(req.params.week_id);
      await document.delete();
      return res.status(200).json();
    } catch (error) {
      return res.status(500).json();
    }
  });
  

module.exports = router