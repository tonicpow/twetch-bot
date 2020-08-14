require("dotenv").config();
const Parser = require("rss-parser");
const Twetch = require("@twetch/sdk");
const parser = new Parser();
const RSSURL = "https://offers.tonicpow.com/functions/campaignsFeed/";
var latestURL, account;
const getFeed = async (feedURL, latest) => {
  let feed = await parser.parseURL(feedURL);
  let foundItem = feed.items.findIndex((idx) => idx.link === latest);
  console.log(`${feed.title} Found item index: `, foundItem);
  if (foundItem > 0) {
    let items = feed.items.slice(0, foundItem);
    for (let item of items) {
      let content = `New Campaign created by ${item.author}: ${item.title}
      
${item.link}`;
      let txid = await post(account, content, "", "", "");
      console.log("TXID: ", txid);
      await sleep(10000); // recommend to wait 10 seconds between broadcasts
    }
    latestURL = items[0].link;
  }
};
const getLatestURL = async (url) => {
  let feed = await parser.parseURL(url);
  console.log("Latest URL: ", feed.items[0].link);
  return feed.items[0].link;
};
function initTwetch() {
  const twetch = new Twetch({
    clientIdentifier: process.env.TWETCH_CLIENT_ID,
    privateKey: process.env.TWETCH_PK,
  });
  twetch.init();
  return twetch;
}
async function getBalance(instance) {
  let balance = await instance.wallet.balance();
  console.log("Wallet balance: ", `${balance / 100000000} BSV`);
  return balance / 100000000;
}
const post = async (
  instance,
  content,
  reply,
  branch,
  filesURL,
  tweet,
  hide
) => {
  try {
    let response = await instance.publish("twetch/post@0.0.1", {
      bContent: `${content}${branch}${filesURL}`,
      mapReply: reply,
      payParams: { tweetFromTwetch: tweet, hideTweetFromTwetchLink: hide },
    });
    return response.txid;
  } catch (e) {
    console.log(e);
    return null;
  }
};
const sleep = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
const main = async () => {
  account = initTwetch();
  getBalance(account);
  latestURL = await getLatestURL(`${RSSURL}?cacheBust=${Date.now()}`);
  while (true) {
    await getFeed(`${RSSURL}?cacheBust=${Date.now()}`, latestURL);
    await sleep(parseInt(process.env.TWETCH_REFRESH_RATE));
  }
};
main();
