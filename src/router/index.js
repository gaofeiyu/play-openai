
import Router from 'koa-router';
import { OpenAIController } from '../controllers/openai.js';
import { ChatGPTController } from '../controllers/chatgpt.js';

const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'hello'
})


router.post('/generateImage', async (ctx) => {

    const openAIController = new OpenAIController(ctx);
    await openAIController.generateImage();

})
router.post('/conversation', async (ctx) => {

    const openAIController = new ChatGPTController(ctx);
    await openAIController.login();
    await openAIController.conversation('test');

})

export default router;