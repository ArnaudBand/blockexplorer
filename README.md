# Welcome to the Ethereum Block Explorer!

This project is designed to help you explore and query the Ethereum blockchain using the Ethereum JSON-RPC API and the ethers.js library. By building your own Ethereum Block Explorer, you will gain a better understanding of how the blockchain works and how you can interact with it.

Block explorers are essential tools that allow us to view a variety of information about the blockchain, including data about the network, blocks, transactions, accounts, and more. You may be familiar with popular Ethereum block explorers like Etherscan, which provides a wealth of information about the Ethereum blockchain.

This project is open-ended, and there are many different features you can choose to build. We have included some suggestions and challenges to get you started, but feel free to use your creativity and imagination.

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:
  * the blockchain network itself
  * blocks in the blockchain
  * transactions in a block
  * accounts
  * and many other things
  

## Getting Started

Clone this project to pull down some basic starter code.
```sh
git clone git@github.com:ArnaudBand/blockexplorer.git

```

After that cd into the base directory of the project and run `npm install` to download all the project dependencies.

In this project we chose to use React for a front-end and added minimal front-end code to get you going, but feel free to use any front-end stack you like.

Unlike the lessons this week that used the Ethereum JSON-RPC API and the `ethers.js` library to communicate with the Ethereum network, the starter code in this project uses the [AlchemySDK](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp). The AlchemySDK's core package wraps almost all of the `ethers.js` provider functionality that we learned about and should feel very familiar to you. 

For example, the following `ethers.js` code
```js
const blockNumber = await provider.getBlockNumber();
```
can be written using the AlchemySDK like so:
```js
const blockNumber = await alchemy.core.getBlockNumber()
```
Another `ethers.js ` example
```js
const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
translates to
```js
const transactions = await alchemy.core.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
and so on.

There are some `ethers.js` provider functions that are not often-used and therefore not included in `alchemy.core`. But if you ever need the full ethers provider functionality you can access the provider directly with the following code:
```js
const ethersProvider = await alchemy.config.getProvider();
```

You can find lots of good docs on the AlchemySDK here:
  * [API Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp)
  * [API Overview](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp)

Alright, without further ado, let's get started!

## 1. Create a unique Alchemy API key

If you have not already done so, create a unique Alchemy API Mainnet key
for your project as [described here](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp).

## 2. Add your API key to as an environment variable for the project

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY` with your api key.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

Do not remove the `REACT_APP_` prefix. React uses that to import env variables.

## 3. Start the webserver

`npm start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The webpage will automatically reload when you make code changes.

What you'll see in the browser is Ethereum Mainnet's current block number. Not very exciting, but that's where you come in to save the day!

## 4. Add More Information About the Current Block

Use the alchemy.core.getBlock() function to retrieve more information about the current block and display it in the page. For example, you could display the block's timestamp, the number of transactions, or the miner's address.

## 5. Display Transactions for a Given Block

Use the alchemy.core.getBlockWithTransactions() function to retrieve the list of transactions for a given block. Display this information in the page, and allow users to click on individual transactions for more information.

## 6. Get Details of Individual
