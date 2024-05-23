import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// import dotenv from 'dotenv'
// dotenv.config()
async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    const port = config.port ; 
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error This Server : ",error);
  }
}

main();
