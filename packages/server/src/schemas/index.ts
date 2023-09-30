import { t } from "elysia";

export const VolounteerSchema = t.Object({
  name: t.String(),
  city: t.String(),
  email: t.String()
})
