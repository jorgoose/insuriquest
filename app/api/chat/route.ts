import { OpenAI } from 'openai';

import { writeFile } from 'fs';
import { join } from 'path';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

function whyHaveYouForsakenMe(str: string) {
    const match = str.match(/{([^{}]*({[^{}]*}[^{}]*)*)}/);
    return match ? match[0] : null;
}

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

  const assistantMessage = response.choices && response.choices[0] && response.choices[0].message && response.choices[0].message.content || JSON.stringify({chris: 'failed'});
  const parsedMessage  = whyHaveYouForsakenMe(assistantMessage);

  if (process.env.LOCAL === 'TRUE') {
    const filePath = join(process.cwd(), 'debug.txt');
    writeFile(filePath, JSON.stringify({
      prompt,
      assistantMessage: JSON.parse(assistantMessage),
      parsedMessage: JSON.parse(parsedMessage!)
    }), () => {}
    )
  }

  return new Response(parsedMessage);
}
