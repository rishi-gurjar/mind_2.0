const OpenAI = require('openai');

const OPENAI_API_KEY= // your API key here as a string

const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

async function main(message) {
    let response;
    let retryCount = 0;

    while (!response && retryCount < 3) {
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: 'system',
                        content: 'You are an assistant. You can ONLY Respond in this JSON format: { \"role\": \'system\' \"text\": \"Response_text\" }. Add your response in the variable Response_text - nowhere else. Return the entire JSON string as your response.'
                    },
                    {   
                        role: 'user', 
                        content: message
                    },
                ],
                model: 'gpt-3.5-turbo',
                max_tokens: 1000,
                temperature: 0.9,
            });

            response = JSON.parse(chatCompletion.choices[0].message.content);
            console.log("Response" + response.text)
        } catch (error) {
            console.error('Invalid JSON response, retrying...');
            retryCount++;
        }
    }

    if (!response) {
        throw new Error('Failed to get valid JSON response after 3 attempts');
    }

    return response;
}

module.exports = main;