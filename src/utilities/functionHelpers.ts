import { readdirSync } from "fs";
import sharp from "sharp";

export const isFileExistinFolder = (
  file: string,
  folderPath: string,
): boolean => {
  const fileNames = readdirSync(folderPath);
  for (const filename of fileNames) {
    if (file === filename) return true;
  }

  return false;
};

export const imageResizing = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
): Promise<void> => {
  console.log("Image is resizing!");
  const res = await sharp(inputPath).resize(width, height).toFile(outputPath);
  console.log(res);
};
