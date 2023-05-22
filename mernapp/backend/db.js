const mongoose = require("mongoose");
const mongoURI =
  "mongodb://kitecode:ankitm0301@ac-xuwdyaw-shard-00-00.9dogf7z.mongodb.net:27017,ac-xuwdyaw-shard-00-01.9dogf7z.mongodb.net:27017,ac-xuwdyaw-shard-00-02.9dogf7z.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-c5iq68-shard-0&authSource=admin&retryWrites=true&w=majority&ssl=true";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(function(err, data) {
          if (err) console.log(err);
          else console.log();
        });
      }
    }
  );
};
module.exports = mongoDB;
