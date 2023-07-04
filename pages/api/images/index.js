import process from "node:process";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
export default async function handler(request, response) {
  if (request.method === "GET") {
    try {
      const result = await cloudinary.v2.search
        .with_field("tags")
        .max_results(10)
        .execute();
      response.status(200).json(result);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  }
}
