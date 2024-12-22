import fs from "fs";
import path from "path";

const buildPath = path.resolve(__dirname, "build");

export const main = async (event) => {
  const filePath = path.join(buildPath, "index.html");

  try {
    const htmlContent = fs.readFileSync(filePath, "utf8");
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/html" },
      body: htmlContent,
    };
  } catch (err) {
    console.error("Error reading index.html:", err);
    return {
      statusCode: 500,
      body: "Error loading the page.",
    };
  }
};
