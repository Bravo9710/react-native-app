import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://admin:<password>@react-native-app.tgji3bd.mongodb.net/?retryWrites=true&w=majority&appName=react-native-app";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

const database = client.db("react-native-app");
const collection = database.collection("users");
const inserted = await collection.insertOne({
  firstname: "Nic",
  lastname: "Raboy",
  location: "California, USA",
});

client.close();
