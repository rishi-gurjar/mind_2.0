const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });

async function main(message) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: 'You are an assistant. ONLY Respond in this format: { \"role\": \'system\' \"text\": \"I am okay?\" }'
            },
            {   
                role: 'user', 
                content: message
            },

        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 1000,
        temperature: 0.9,
       // response_format: { "type": "json_object" },
    });

    console.log(chatCompletion.choices[0].message.content);
    console.log("")
    const response = JSON.parse(chatCompletion.choices[0].message.content);
    console.log(response.text);

}

main("Tell me a joke");


