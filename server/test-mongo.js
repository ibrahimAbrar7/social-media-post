import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://mohdabrar41111_db_user:asdf1234@cluster0.t6qmpty.mongodb.net/?appName=Cluster0";

async function run() {
  try {
    const client = new MongoClient(uri);

    console.log("Connecting...");
    await client.connect();

    console.log("✅ Connected!");

    await client.db("admin").command({ ping: 1 });

    console.log("✅ Ping successful!");

    await client.close();
  } catch (err) {
    console.error(err);
  }
}

run();