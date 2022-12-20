import { ChatGPTAPI, getOpenAIAuth } from 'chatgpt';
// Configure OPENAI_EMAIL and OPENAI_PASSWORD in config
import { OPENAI_EMAIL, OPENAI_PASSWORD } from '../config.js';

export class ChatGPTController {
    constructor(ctx) {
        this.ctx = ctx;
    }

    async login() {
        // use puppeteer to bypass cloudflare (headful because of captchas)
        const openAIAuth = await getOpenAIAuth({
            email: OPENAI_EMAIL,
            password: OPENAI_PASSWORD,
        });

        console.log('login', openAIAuth)
        this.api = new ChatGPTAPI({ ...openAIAuth });
    }

    async conversation() {
        if (!this.api) return;
        const { question } = this.ctx.request.body;
        console.log('conversation', this.api)
        await this.api.initSession();
        console.log('initSession done')

        // send a message and wait for the response
        const result = await this.api.sendMessage(question);

        // result.response is a markdown-formatted string
        console.log(result.response);
    }
}
