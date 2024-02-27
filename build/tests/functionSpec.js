"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionHelpers_1 = require("../utilities/functionHelpers");
describe("Test function", () => {
    it("should return true to show file exists in folder", () => {
        const outputPath = "./images/full/";
        const isExist = (0, functionHelpers_1.isFileExistinFolder)("chart.jpg", outputPath);
        expect(isExist).toBe(true);
    });
    it("should return false to show file not exists in folder", () => {
        const outputPath = "./images/full/";
        const isExist = (0, functionHelpers_1.isFileExistinFolder)("chart1.jpg", outputPath);
        expect(isExist).toBe(false);
    });
});
