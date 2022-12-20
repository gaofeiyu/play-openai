import OpenAI from 'openai';
// Create OpenAI appkey by yourself https://beta.openai.com/account/api-keys
import { APP_KEY } from '../config.js';

const { Configuration, OpenAIApi } = OpenAI;

export class OpenAIController {
    constructor(ctx) {
        const config = new Configuration({
            apiKey: APP_KEY
        })
        this.ctx = ctx;
        this.openAI = new OpenAIApi(config);
    }

    async generateImage() {
        const { prompt } = this.ctx.request.body
        const { data } = await this.openAI.createImage({
            prompt,
            n: 1,
            size: '256x256'
        });

        const imageUrl = data.data;

        this.ctx.body = {
            status: 'ok',
            data: imageUrl,
        }
    }
}