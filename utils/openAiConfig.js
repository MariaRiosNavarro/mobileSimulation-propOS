const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openAiConfig = new OpenAIApi(configuration);
export default openAiConfig;
