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
  if (request.method === "PATCH") {
    await Contact.findByIdAndUpdate(id, { $set: request.body });
    response.status(200).json({ status: "Contact updated" });
  }
}
