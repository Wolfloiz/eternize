import React from "react";

import style from "./style.module.css";

import { ReactComponent as IconNavBrain } from './../../assets/icon-menu-1.svg';
import { ReactComponent as PersonNav } from './../../assets/person.svg';
import { ReactComponent as InfinityNav } from './../../assets/infinity.svg';

import Routes from './../../routes';

import Eternize from './../eternize';
import Person from './../../pages/Person';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Nav() {

  return (
    <Router>
      <div className={style.ItemsNav}>
        <Link to="/"><span className={style.itemNav}><IconNavBrain className={style.iconSvg} /></span></Link>
        <Link to="/person"><span className={style.itemNav}><PersonNav className={style.iconSvg} /></span></Link>
        <Link to="/infinity"><span className={style.itemNav}><InfinityNav className={style.iconSvg} /></span></Link>

        <Switch>
          <Route exact path="/">
            <Eternize />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}