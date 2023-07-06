import dbConnect from "../../../../db/connect";
import Contact from "../../../../db/models/contact";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }

  if (request.method === "GET") {
    const contact = await Contact.findById(id);

    if (!contact) {
      return response.status(404).json({ status: "Not found" });
    }

    response.status(200).json(contact);
    return;
  }

  if (request.method === "PATCH") {
    const { favorite, ...contactData } = request.body;

    try {
      let updatedContact;

      if (typeof favorite !== "undefined") {
        updatedContact = await Contact.findByIdAndUpdate(
          id,
          { favorite },
          { new: true }
        );
      } else {
        updatedContact = await Contact.findByIdAndUpdate(
          id,
          { $set: contactData },
          { new: true }
        );
      }

      if (!updatedContact) {
        return response.status(404).json({ status: "Contact not found" });
      }

      response.status(200).json({ status: "Contact updated" });
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: "Server error" });
    }
  }

  if (request.method === "DELETE") {
    await Contact.findByIdAndDelete(id);
    response.status(200).json({ status: "Contact deleted!" });
  }
}
