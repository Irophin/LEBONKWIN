import { Ad } from "../../models/Ad/Ad";
import { AdHelpers } from "../../models/Ad/helpers";
import { Category } from "../../models/Category/Category";
import { CategoryHelpers } from "../../models/Category/helpers";

export namespace CategoryService {

    export const getCategories = (): Category[] => {
        return CategoryHelpers.getCategories();
    }

    export const getOrCreateCategory = (category: Category): Category => {
        return CategoryHelpers.getOrCreateCategory(category);
    }
    
}