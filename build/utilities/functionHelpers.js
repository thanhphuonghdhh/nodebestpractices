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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageResizing = exports.isFileExistinFolder = void 0;
const fs_1 = require("fs");
const sharp_1 = __importDefault(require("sharp"));
const isFileExistinFolder = (file, folderPath) => {
    const fileNames = (0, fs_1.readdirSync)(folderPath);
    for (const filename of fileNames) {
        if (file === filename)
            return true;
    }
    return false;
};
exports.isFileExistinFolder = isFileExistinFolder;
const imageResizing = (inputPath, outputPath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Image is resizing!");
    const res = yield (0, sharp_1.default)(inputPath).resize(width, height).toFile(outputPath);
    console.log(res);
});
exports.imageResizing = imageResizing;
