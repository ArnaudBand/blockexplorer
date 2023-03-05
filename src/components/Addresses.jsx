import React, { useState, useEffect } from "react";
import { Alchemy, Network } from "alchemy-sdk";

export default function Addresses() {
  // Alchemy SDK - create an instance
  const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(settings);

  // Set state for the address input, balance, loading indicator and whether to show the balance
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  // Use useEffect to fetch the balance when the address changes
  useEffect(() => {
    async function getBalance() {
      if (address) {
        const result = await alchemy.core.getBalance(address, 'latest')
        setBalance(result);
      }
    }
    getBalance();
  }, [address, alchemy.core]);

  return (
    <>
      <div className="mt-8 text-2xl font-bold text-center text-gray-800">
        Check Balance
      </div>
      {/* Display a form to input an Ethereum address */}
      <div className="flex justify-center mt-8">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="address"
              >
                Enter your address
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="0x..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Display the ETH balance, if the balance has been retrieved */}
        <div className="max-w-lg py-8 mt-8 mx-auto border-2 border-yellow-100 bg-gray-50 rounded-lg">
          <div className="text-lg text-gray-800 font-bold text-center">
            Ethereum Balance
          </div>
          <div className="text-2xl text-gray-800 font-bold text-center">
            {balance.toString() / 1000000000000000000} ETH
          </div>
        </div>
    </>
  );
}
