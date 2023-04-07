import { RunResult } from "better-sqlite3";
import { database } from "../../api/config/database";
import { Category } from "./Category";

export namespace CategoryHelpers {

    export const getCategories = (): Category[] => {
        const categories = database.prepare("SELECT * FROM Category").all() as Category[];
        if (categories === undefined){
            throw new Error("Categories not found");
        }
        return categories;
    }

    export const getCategory = (id: number): Category => {

        let category = database.prepare("SELECT * FROM Category WHERE id = ?").bind(id).get() as Category | undefined;
        if (category === undefined){
            throw new Error("Category not found");
        }
        return category;
    }

    export const createCategory = (category: Category ): Category => {
        const newCategoryId = database.prepare("INSERT INTO Category (name) VALUES (?)").bind(category.name).run().lastInsertRowid as Number;
        const newCategory = database.prepare("SELECT * FROM Category WHERE id = ?").bind(newCategoryId).get() as Category;
        return newCategory;
    }

    export const getOrCreateCategory = (category: Category): Category => {
        let newCategory = database.prepare("SELECT * FROM Category WHERE name = ?").bind(category.name).get() as Category | undefined;
        if (newCategory === undefined){
            newCategory = createCategory(category);
        }
        return newCategory;
    }

}