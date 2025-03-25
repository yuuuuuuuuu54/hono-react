import { serve } from '@hono/node-server'
import { drizzle } from 'drizzle-orm/singlestore'
import { Hono } from 'hono'

const app = new Hono()

const db = drizzle(process.env.DATABASE_URL!);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
