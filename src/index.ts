import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Bun Dev, I'm going to build a RESTFULL API").get('/post/:id', ({params: {id}}) => {return {id: id, title: 'Learn Bun'}})
.post('/post', (body) => {return body})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
