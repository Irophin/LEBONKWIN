import { Ad } from "../../models/Ad/Ad";
import { Category } from "../../models/Category/Category";
import { Relation } from "../../models/Relation/Relation";
import { RelationHelpers } from "../../models/Relation/helpers";

export namespace RelationService {

    export const createRelation = (ad: Ad, category: Category): void => {
        RelationHelpers.createRelation(ad, category);
    };

    export const getRelations = (): Relation[] => {
        return RelationHelpers.getRelations();
    };

}