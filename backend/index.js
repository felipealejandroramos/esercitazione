import { checkMasterCertificate } from "./iot/certManager.js";
import { initDevice } from "./iot/index.js";
import express from "express";
import { readdatabase } from "./database.js"; 
import cors from "cors"
const app = express();

// downloading remote cert to connect
await checkMasterCertificate();

// connect to mqtt queue
await initDevice();

app.use(cors({
  origin: '*'
}));

app.get('/data', async (req, res) =>{
  
    res.send(await readdatabase());
  });
app.listen(9000, () => {
    console.log('Server listening on port 9000');
});