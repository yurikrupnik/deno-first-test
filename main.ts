import {
    Application,
    isHttpError,
    Status
} from "https://deno.land/x/oak/mod.ts";

import {helloWorld} from './users'

const app = new Application();
app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${
            hostname ?? "localhost"
        }:${port}`
    );
});
// Logger
// app.use(async (ctx, next) => {
//     await next();
//     const rt = ctx.response.headers.get("X-Response-Time");
//     console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
// });

// Timing
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// console.log('Status.\'300\'', Status())
// Hello World!
// app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    // console.log(evt.error);
// });

// app.use((ctx) => {
//     // Will throw a 500 on every request.
//     ctx.throw(400);
// });

app.use(helloWorld)
app.use((ctx, next) => {
    // if (ctx.url.includes('/error')) {
    // }
    ctx.response.body = "Hello sd!";
});
async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/examples/static`,
        index: "index.html",
    });
}

app.use(async (ctx, next) => {
    console.log('Status', Status)
    try {
        await next();
    } catch (err) {
        if (isHttpError(err)) {
            switch (err.status) {
                case Status.NotFound:
                    // handle NotFound
                    break;
                default:
                // handle other statuses
            }
        } else {
            // rethrow if you can't handle the error
            throw err;
        }
    }
});

await app.listen({ port: 8000 });
