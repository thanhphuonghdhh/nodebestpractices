import { Router } from "express";
import imageRoutes from "./api/images";

const routes = Router();

routes.use("/", imageRoutes);

export default routes;
