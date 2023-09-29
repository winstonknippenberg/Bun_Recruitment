import { Elysia, t } from "elysia";

const VolounteerSchema = t.Object({
  name: t.String(),
  city: t.String()
})

type Volounteer = {
  name: string
  city: string
}

const updateVolounteers = async (body: Volounteer) => {
  //TODO: update volounteers
}
const getVolounteers = async (): Promise<Volounteer[] | undefined> => {
  const res = await fetch('https://6516cfd409e3260018ca5780.mockapi.io/api/v1/volounteers')
  if (res.ok) {
    const volounteers = await res.json() as Volounteer[]
    return volounteers
  }
}

const app = new Elysia()
  .get("/", () => "I am healthy!")
  .get("/volounteers", async () => {
    const volounteers = await getVolounteers()
    return volounteers
  })
  .post(
    "/volounteers",
    async ({ body }) => {
      await updateVolounteers(body)
    },
    {
      body: VolounteerSchema
    }
  )
  .listen(3000);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app
