import { Client } from "@notionhq/client";
import { NOTION_KEY } from "./config";

const notion = new Client({ auth: NOTION_KEY });
export { notion };
