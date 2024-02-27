import { Router, Request, Response } from "express";
import { accessSync } from "fs";
import {
  imageResizing,
  isFileExistinFolder,
} from "../../utilities/functionHelpers";
import { resolve } from "path";

const inputPath = "./images/full/";
const outputPath = "./images/thumb/";
const imageRoutes = Router();

imageRoutes.get(
  "/images",
  async (req: Request, res: Response): Promise<void> => {
    const fileName = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    const fileNamePath = inputPath + fileName + ".jpg";

    if (fileName === undefined || height === undefined || width === undefined) {
      res.status(400).send("Please fill file name, height and width!!");
      return;
    }

    if (isNaN(Number(height)) || isNaN(Number(width))) {
      res.status(400).send(`Height and width must be a number!!`);
      return;
    }

    try {
      accessSync(fileNamePath);
    } catch (e) {
      res
        .status(400)
        .send(
          `Cannot access to this file ${fileName}.jpg, please fill it again!!`,
        );
      return;
    }

    const thumbName = fileName + "-" + width + "-" + height + ".jpg";
    const thumbPath = outputPath + thumbName;

    if (!isFileExistinFolder(thumbName, outputPath)) {
      await imageResizing(fileNamePath, thumbPath, +width, +height);
    }
    res.status(200).sendFile(resolve(thumbPath));
  },
);

export default imageRoutes;
