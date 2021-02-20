import { Router } from "https://deno.land/x/oak/mod.ts";
import { getQuery } from 'https://deno.land/x/oak/helpers.ts'

const router = new Router()

router.get('/api/users', (ctx) => {
    const query = getQuery(ctx)
    console.log('query', query)
    // console.log('ctx', ctx)
    console.log('ctx.request.url.searchParams', ctx.request.url.searchParams)
    console.log('ctx.params', ctx.request.url.searchParams.get("aris"))
    // console.log('ctx.params', ctx.params)
    ctx.response.body = {aris: false}
});

export default router;
