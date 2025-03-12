import { type Route } from "./Route";

export class FrontController {

    private routes: Route[] = [];

    constructor() {
        this.routes = [];
    }

    registerRoute(route: Route) {

        this.routes.push(route);

    }

    async handle(req: Request): Promise<Response> {

        const path = new URL(req.url).pathname;

        const route = this.routes.find(route => route.path === path && route.method === req.method)

        if (!route) {
            return new Response('Not found', { status: 404 })
        } else {

            if (route.bodySchema) {
                const body = await req.json()
                try {
                    route.bodySchema.parse(body)
                } catch (e) {
                    return new Response('Bad Request', { status: 400 })
                }
            }

            if (route.querySchema) {
                const query = new URL(req.url).searchParams

                try {
                    route.querySchema.parse(Object.fromEntries(query.entries()))
                }
                catch (e) {
                    return new Response('Bad Request', { status: 400 })
                }
            }

            return route.handler(req)
        }
    }

}