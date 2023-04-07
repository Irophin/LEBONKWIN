import { Router } from "express";
import { AdService } from "../services/AdService";
import { Ad } from "../../models/Ad/Ad";
import { RelationService } from "../services/RealtionService";

const routeAd = Router();

routeAd.get("/", (req, res) => {
    const ads = AdService.getAds();
    return res.send(ads);
});

routeAd.post("/", (req, res) => {
    const ad: Ad = req.body;
    const result = AdService.createAd(ad);
    return res.send(result);
});

routeAd.get("/relation", (req, res) => {
    res.send(RelationService.getRelations());
});

export default routeAd;