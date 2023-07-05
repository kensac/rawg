import {rawg} from "./rawg";
import dotenv from "dotenv";

dotenv.config();

const Client = new rawg(process.env.KEY)
