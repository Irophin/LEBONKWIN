import { User } from "../User/User"
import { Category } from "../Category/Category"

export type Ad = {
    id ?: number,

    user ?: User,
    userId : number,

    title : String,
    description : String
    categories ?: Category[]

    price : number
}