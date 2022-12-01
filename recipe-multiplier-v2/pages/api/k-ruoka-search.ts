// https://www.k-ruoka.fi/kr-api/article-search/?query=makkara

import type { NextApiRequest, NextApiResponse } from "next";
import { parseKRuokaRecipeSearchResultsDomString } from "../../utils/k-ruoka-dom-utils";
import puppeteer from "puppeteer";
import userAgent from "user-agents";

const startBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  return browser;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = `https://www.k-ruoka.fi/haku?q=${req.query.query}`;

  const browser = await startBrowser();
  let page = await browser?.newPage();
  await page.setUserAgent(userAgent.random().toString());
  await page?.goto(url);
  await page.waitForSelector(".product-search-results", {
    visible: true,
    timeout: 2000,
  });
  let bodyHTML = await page.content();
  console.log(bodyHTML);

  const searchResults = parseKRuokaRecipeSearchResultsDomString($.html());

  res.status(200).json({ results });
};

export default handler;
