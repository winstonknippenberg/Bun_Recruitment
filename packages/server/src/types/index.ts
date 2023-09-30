import { app } from ".."

export interface Volounteer {
  name: string
  city: string
  email: string
  id: string
}

export type App = typeof app
