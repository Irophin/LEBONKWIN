import { RunResult } from "better-sqlite3";
import { database } from "../../api/config/database";
import { CategoryHelpers } from "../Category/helpers";
import { Category } from "../Category/Category";
import { Ad } from "../Ad/Ad";
import { Relation } from "./Relation";

export namespace RelationHelpers {

    export const createRelation = (ad: Ad, category: Category): RunResult => {
        return database.prepare("INSERT INTO Relation (adId, categoryId) VALUES (?, ?)").run(ad.id, category.id);
    }

    export const getRelations = (): Relation[] => {
        const relations = database.prepare("SELECT * FROM RELATION").all() as Relation[];
        return relations; 
    }
}