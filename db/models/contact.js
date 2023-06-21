import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String },
  phone: { type: String },
  note: { type: String },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
