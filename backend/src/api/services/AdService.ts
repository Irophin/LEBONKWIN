import { Ad } from "../../models/Ad/Ad";
import { AdHelpers } from "../../models/Ad/helpers";

export namespace AdService {

    export const createAd = (ad: Ad): Ad => {
        return AdHelpers.createAd(ad);
    }

    export const getAd = (id: number): Ad => {
        return AdHelpers.getAd(id);
    }

    export const getAds = (): Ad[] => {
        return AdHelpers.getAllAds();
    }

}