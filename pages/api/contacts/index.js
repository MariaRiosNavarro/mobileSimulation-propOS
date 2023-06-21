import dbConnect from "../../../db/connect";
import Contact from "../../../db/models/contact";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const contactData = request.body;
      await Contact.create(contactData);
      response.status(201).json({ message: "Contact created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.messge });
    }
  }

  // if (request.method === "GET") {
  //   const contacts = await Contact.find();
  //   response.status(200).json(contacts);
  //   return;
  // }
  if (request.method === "GET") {
    try {
      const contacts = await Contact.find();
      response.status(200).json(contacts);
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.messge });
    }
  }
}
