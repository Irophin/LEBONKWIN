import { RunResult } from "better-sqlite3";
import { database } from "../../api/config/database";
import { Ad } from "./Ad";
import { CategoryHelpers } from "../Category/helpers";
import { Category } from "../Category/Category";
import { RelationService } from "../../api/services/RealtionService";
import { Relation } from "../Relation/Relation";
import { UserHelpers } from "../User/helpers";

export namespace AdHelpers {

    export const createAd = (ad : Ad): Ad => {

        const newAd:Ad = {...ad};

        const idAd = database.prepare("INSERT INTO Ad (userId, title, description, price) VALUES (?, ?, ?, ?)").run(ad.userId, ad.title, ad.description, ad.price).lastInsertRowid;
        newAd.id = idAd as number;

        newAd.categories?.forEach(category => {
            const newCategory = CategoryHelpers.getOrCreateCategory(category);
            
            RelationService.createRelation(newAd, newCategory);
            console.log("Created relation between ad " + newAd.id + " and category " + newCategory.id);
        });

        return newAd;
    }

    export const getAdCategories = (adId: number): Category[] => {
        const relation = database.prepare("SELECT * FROM Relation WHERE adId = ?").bind(adId).all() as Relation[];
        const categories = relation.map(relation => CategoryHelpers.getCategory(relation.categoryId));
        return categories;
    }

    export const getCategory = (relation : Relation): Category => {
        const category = database.prepare("SELECT * FROM Category WHERE id = ?").bind(relation.categoryId).get() as Category | undefined;
        if (category === undefined)
            throw new Error("Category not found");
        return category;
    }

    export const getAllAds = (): Ad[] => {
        const ads = database.prepare("SELECT * FROM Ad").all() as Ad[];
        ads.map(ad => {
            if (ad.id !== undefined)
                ad.categories = getAdCategories(ad.id);

            ad.user = UserHelpers.getUser(ad.userId);
        });
        return ads;
    }

    export const getAd = (id: number): Ad => {
        const ad = database.prepare("SELECT * FROM Ad WHERE id = ?").bind(id).get() as Ad | undefined;

        if (ad === undefined)
            throw new Error("Ad not found");

        return ad;
    }
}