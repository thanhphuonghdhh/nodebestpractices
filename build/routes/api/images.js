"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const functionHelpers_1 = require("../../utilities/functionHelpers");
const path_1 = require("path");
const inputPath = "./images/full/";
const outputPath = "./images/thumb/";
const imageRoutes = (0, express_1.Router)();
imageRoutes.get("/images", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        (0, fs_1.accessSync)(fileNamePath);
    }
    catch (e) {
        res
            .status(400)
            .send(`Cannot access to this file ${fileName}.jpg, please fill it again!!`);
        return;
    }
    const thumbName = fileName + "-" + width + "-" + height + ".jpg";
    const thumbPath = outputPath + thumbName;
    if (!(0, functionHelpers_1.isFileExistinFolder)(thumbName, outputPath)) {
        yield (0, functionHelpers_1.imageResizing)(fileNamePath, thumbPath, +width, +height);
    }
    res.status(200).sendFile((0, path_1.resolve)(thumbPath));
}));
exports.default = imageRoutes;
