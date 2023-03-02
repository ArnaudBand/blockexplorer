import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Addresses from './Addresses';
import Block from './Block';

const Header = () => {
  return (
    <Router>

      <div className='flex justify-end items-center mr-3'>
        <Link className="p-3 m-5 bg-slate-700 text-yellow-100" to="/">Last Block</Link>
        <Link className="p-3 bg-slate-700 text-yellow-100" to="/address">Address</Link>
      </div>
        <Switch>
          <Route exact path="/">
            <Block />
          </Route>
          <Route path="/address">
            <Addresses />
          </Route>
        </Switch>
    </Router>
  )
}

export default Header;