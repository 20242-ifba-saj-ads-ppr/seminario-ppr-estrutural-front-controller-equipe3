import { FrontController } from "./FrontController";
import { z } from "zod";

const c = new FrontController();

c.registerRoute({
    method: 'GET',
    path: '/hello',
    handler: () => new Response('Hello World')
})

c.registerRoute({
    method: 'GET',
    path: '/about',
    handler: () => new Response('About Us')
})

c.registerRoute({
    method: 'GET',
    path: '/whoiam',
    querySchema: z.object({
        name: z.string(),
        age: z.coerce.number()
    }),
    handler: (req: Request) => {
        const { searchParams } = new URL(req.url)
        return new Response(`Hello ${searchParams.get('name')}, you are ${searchParams.get('age')} years old`)
    }
})

Bun.serve({ fetch: (req) => { return c.handle(req) } })




