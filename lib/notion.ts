import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

export const fetchBlocks = async (databaseId: string) => {
  try {
    const response = await notion.blocks.children.list({
      block_id: databaseId,
    });
    return response;
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
};

export const getwhatimdoing = async () => {
  return fetchBlocks(process.env.WHATIMDOING_PAGE_ID!);
};

export async function getChildPageContent(childPageId: string) {
  const response = await notion.blocks.children.list({
    block_id: childPageId,
  });

  return response.results;
}

