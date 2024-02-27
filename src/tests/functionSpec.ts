import { isFileExistinFolder } from "../utilities/functionHelpers";

describe("Test function", () => {
  it("should return true to show file exists in folder", () => {
    const outputPath = "./images/full/";
    const isExist = isFileExistinFolder("chart.jpg", outputPath);
    expect(isExist).toBe(true);
  });
  it("should return false to show file not exists in folder", () => {
    const outputPath = "./images/full/";
    const isExist = isFileExistinFolder("chart1.jpg", outputPath);
    expect(isExist).toBe(false);
  });
});
