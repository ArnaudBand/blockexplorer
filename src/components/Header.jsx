import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Addresses from './Addresses';
import Block from './Block';

const Header = () => {
  return (
    <Router>
      <div className="bg-gray-500 flex justify-between items-center p-5">
        <div className="logo">
          <Link className='flex items-center' to="/">
            <img className="rounded-full h-13 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" alt="Ethereum logo" />
             <span className='ml-2'>Ethereum</span> 
          </Link>
        </div>
        <div>
          <Link className="p-3 m-5 bg-slate-700 text-yellow-100 rounded-lg hover:bg-black hover:text-white" to="/">Last Block</Link>
          <Link className="p-3 bg-slate-700 text-yellow-100 rounded-lg hover:bg-black hover:text-white" to="/address">Address</Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="rounded-lg p-5">
            <Block />
          </div>
        </Route>
        <Route path="/address">
          <div className="rounded-lg p-5">
            <Addresses />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;