// app.use(async (context) => {
//     await send(context, context.request.url.pathname, {
//         root: `${Deno.cwd()}/examples/static`,
//         index: "index.html",
//     });
// });

const helloWorld = (ctx: any) => {
  // if (ctx.url.includes('/error')) {
  // }
  ctx.response.body = "Hello sd!";
};

export {
  helloWorld,
};
