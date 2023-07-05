import process from "node:process";
import cloudinary from "cloudinary";
import formidable from "formidable";
// formidable does not work with the default api settings o Next.js, so we disable the bodyParser via config
export const config = {
  api: {
    bodyParser: false,
  },
};
// set the cloudinary config to use your environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
// define our async handler function - simplified :)
export default async function handler(req, res) {
  // we check for POST, all other methods return 405
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // initialize formidable
  const form = formidable({});
  // using formidables' parse method to get a simple access to the file data
  form.parse(req, async (error, fields, files) => {
    console.log(files);
    // return an error status if parsing fails
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    // deconstruct our file from files data, will return an array with one element
    const { file } = files;
    // deconstruct the needed values from our file object at index 0
    const { newFilename, filepath } = file;
    // call our cloudinary uploader with the required arguments
    const result = await cloudinary.v2.uploader.upload(filepath, {
      public_id: newFilename,
    });
    // return our just uploaded image result from cloudinary upload
    return res.status(201).json(result);
  });
}
