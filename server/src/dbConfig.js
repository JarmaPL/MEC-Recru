import mongoose from "mongoose";

/* istanbul ignore next */
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() };
};

/* istanbul ignore next */
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

mongoose.disconnect();

export default mongoose;
