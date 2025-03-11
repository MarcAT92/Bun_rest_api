import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Bun Dev, I'm going to build a RESTFULL API").get('/post/:id', ({params: {id}}) => {return {id: id, title: 'Learn Bun'}})
.post('/post', ({body, set}) => {
  set.status = 201
  return body
})
.get('/track/*', () => {return "Track Route"})
.get('/tracks', () => {
  // return new Response(JSON.stringify({
  //   tracks: [
  //     {
  //       id: 1,
  //       title: 'Dancing Feet',
  //     },
  //     {
  //       id: 2,
  //       title: 'Never Gonna Give You Up'
  //     }
  //   ]
  // }), {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  return {"tracks": [
      {
         id: 1,
         title: 'Dancing Feet',
       },
       {
         id: 2,
         title: 'Never Gonna Give You Up'
       }
     ]
  }
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
