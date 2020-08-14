# twetch-bot

twetch-bot

npm install
npm start

Bot will query RSSURL to check for new addition every X seconds as defined in the refreshRate parameter in the .env file.

If new items are found, then the bot will automatically twetch those links with the privateKey setup in the .env file.

Once a privateKey is setup, upon starting the bot the signing address will be logged along with the message and signature necessary to configure in the twetch account at: https://twetch.app/developer

The client identifier on https://twetch.app/developer should also be configured in the .env file to take advantage of 10% platform fee savings.

## ENV

App needs env vars:

- TWETCH_CLIENT_ID
- TWETCH_PK
- TWETCH_REFRESH_RATE
