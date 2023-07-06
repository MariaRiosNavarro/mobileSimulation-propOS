// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openAiConfig from "../../../utils/openAiConfig";

export default async function handler(request, response) {
  try {
    const { question, answer } = request.body;

    const chatCompletion = await openAiConfig.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `create a simple ${answer}  in german language and no longer than 200 words to the user's ${question}.Display the Answer as a json object `,
        },
      ],
    });
    console.log(chatCompletion);
    const responseText = chatCompletion.data.choices[0].message.content;
    const responseObject = JSON.parse(responseText);

    response.status(200).json(responseObject);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
