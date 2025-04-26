import { AppDataSource } from "./data-source";
import express from "express";
import cors from "cors";

async function main() {
  try {
    await AppDataSource.initialize();

    const app = express();
    const PORT = process.env.PORT || 8176;

    app.use(cors());
    app.use(express.json());

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error in main", error);
  }
}

main();
