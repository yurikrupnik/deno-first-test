import {Application} from "https://deno.land/x/oak/mod.ts"
import router from './users/index.ts'
const port = 5000;

const app = new Application()

// const router = new Router()

// app.use(router.allowedMethods())

// router.get('/api/users', (ctx) => {
//     console.log('ctx', ctx)
//     ctx.response.body = {aris: true}
// });
app.use(async (ctx, next) => {
    /* Do some checking of the request */
    console.log('before')
    await next();
    console.log('after')
    /* Do some finalising of the response */
});
app.use(router.routes(), router.allowedMethods())
console.log(`Server running on port ${port}`)

await app.listen({port})
