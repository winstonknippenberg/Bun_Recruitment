import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { API_ROUTES } from "./consts";
import { VolounteerSchema } from "./schemas";
import { getVolounteers, updateVolounteers } from "./queries";

export const app = new Elysia()
  .use(cors())
  .get(API_ROUTES.INDEX, () => "I am healthy!")
  .get(API_ROUTES.VOLOUNTEERS, async () => {
    const volounteers = await getVolounteers()
    return volounteers
  })
  .post(
    API_ROUTES.VOLOUNTEERS,
    async ({ body }) => {
      await updateVolounteers(body)
    },
    {
      body: VolounteerSchema
    }
  )
  .listen(8080);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);
