import React, { useEffect, useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Block = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getBlockData() {

        // get the latest block number
        const latestBlockNumber = await alchemy.core.getBlockNumber();
        setBlockNumber(latestBlockNumber);

        // get the latest block object
        const latestBlock = await alchemy.core.getBlock(latestBlockNumber);
        setBlock(latestBlock);

        // get the list of transaction hashes in the block
        const transactionHashes = latestBlock.transactions;

        // get the transaction objects for each hash
        const transactionObjects = await Promise.all(transactionHashes.map(hash => alchemy.core.getTransaction(hash)));
        setTransactions(transactionObjects);
    }

    getBlockData();
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-4">Latest Block Information</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-500">Block Number:</p>
        <p className="text-2xl font-bold">{blockNumber}</p>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-500">Block Object:</p>
        <pre className="max-h-64 overflow-y-auto">{JSON.stringify(block, null, 2)}</pre>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-gray-500">Transactions:</p>
        {transactions.length > 0 ? (
          <ul className="max-h-64 overflow-y-auto">
            {transactions.map((transaction, index) => (
              <li key={index} className="mb-2">
                <pre>{JSON.stringify(transaction, null, 2)}</pre>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found in this block.</p>
        )}
      </div>
    </div>
  )
}

export default Block;