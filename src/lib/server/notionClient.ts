import { Client } from "@notionhq/client";

const NOTION_KEY = import.meta.env.VITE_NOTION_KEY;
const notion = new Client({ auth: NOTION_KEY });

export { notion };
