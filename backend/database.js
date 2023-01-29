import mongoose from 'mongoose'

await mongoose.connect("mongodb+srv://app:app@cluster0.evzpwjo.mongodb.net/?retryWrites=true&w=majority");
mongoose.connection.on('error', err => {
    logger.error('MongoDB connection error: ' + err);
    process.exit(-1);
  });
  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connected');
  });
  
const messageSchema = new mongoose.Schema({
    timestamp: Number,
    temperature: Number,
    humidithy: Number,
    creator: String,
})

const messagemodel = mongoose.model("datalogs", messageSchema);

export async function addatabase(data){
    
    let usabledata = JSON.parse(data)
    await messagemodel.create({creator: 'felipe',temperature: usabledata.value, humidithy: usabledata.hum,timestamp: usabledata.timestamp })
}


export async function readdatabase(){

  return await messagemodel.find({creator: 'felipe'})

}
