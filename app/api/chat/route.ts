import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const data = await req.json();
  const { prompt } = data;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: false,
    messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  console.log(response);

  const assistantMessage = response.choices && response.choices[0] && response.choices[0].message && response.choices[0].message.content || JSON.stringify({chris: 'failed'});

  console.log(assistantMessage);

  return new Response(assistantMessage);
}
