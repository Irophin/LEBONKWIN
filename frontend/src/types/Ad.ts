import { Category } from "./Category"
import { User } from "./User"

export type Ad = {
    id ?: number,

    user ?: User,
    userId : number,

    title : String,
    description : String
    categories ?: Category[]
    price : number
}