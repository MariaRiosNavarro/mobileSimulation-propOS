import dbConnect from "../../../db/connect";
import Contact from "../../../db/models/contact";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const contact = await Contact.findById(id);
    if (!contact) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(contact);
  }

  //API for UPDATE
  if (request.method === "PUT") {
    try {
      const { favorite } = request.body;
      const contact = await Contact.findById(id);

      if (!contact) {
        return response.status(404).json({ error: "Contact not found" });
      }

      contact.favorite = favorite;
      await contact.save();

      return response.status(200).json({ message: "Contact updated" });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: "Server error" });
    }
  }

  if (request.method === "DELETE") {
    await Contact.findByIdAndDelete(id);
    response.status(200).json({ status: "Contact deleted!" });
    return;
  }
}
