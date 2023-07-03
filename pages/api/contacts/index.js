import dbConnect from "../../../db/connect";
import Contact from "../../../db/models/contact";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const contactData = request.body;
      const contact = new Contact(contactData);
      await contact.save();
      response.status(201).json({ message: "Contact created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.messge });
    }
  }

  if (request.method === "GET") {
    const { favorite } = request.query;

    // Favorite Filter
    if (favorite === "true") {
      const favoriteContacts = await Contact.find({ favorite: true });
      return response.status(200).json(favoriteContacts);
    }

    const contacts = await Contact.find();
    return response.status(200).json(contacts);
  }
}
