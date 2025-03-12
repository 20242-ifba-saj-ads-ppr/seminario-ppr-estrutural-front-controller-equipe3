import { Schema } from 'zod'


export interface Route {

    method: ('GET' | 'POST'),
    path: string,
    handler: Function,
    bodySchema?: Schema,
    querySchema?: Schema

}