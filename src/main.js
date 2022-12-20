import Koa from 'koa';
import {koaBody} from 'koa-body';
import router from './router/index.js';
const app = new Koa();
const PORT = 3000;

app.use(koaBody({
    multipart: true
}))

app.use(router.routes())

app.listen(PORT, () => {
    console.log(`open server localhost${PORT}`)
});