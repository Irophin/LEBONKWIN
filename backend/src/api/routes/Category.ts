import { Router } from "express";
import { AdService } from "../services/AdService";
import { Ad } from "../../models/Ad/Ad";
import { CategoryService } from "../services/CategoryService";

const routeCategory = Router();

routeCategory.get("/", (req, res) => {
    const categories = CategoryService.getCategories();
    return res.send(categories);
});

routeCategory.post("/", (req, res) => {
    const category = req.body;
    return res.send(CategoryService.getOrCreateCategory(category));
});

export default routeCategory;