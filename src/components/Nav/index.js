import React from "react";

import style from "./style.module.css";

import { ReactComponent as IconNavBrain } from './../../assets/icon-menu-1.svg';
import { ReactComponent as PersonNav } from './../../assets/person.svg';
import { ReactComponent as InfinityNav } from './../../assets/infinity.svg';

export default function Nav() {
  return (
  <div className={style.Nav}>
      <span className={style.itemNav}><IconNavBrain className={style.iconSvg} /></span>
      <span className={style.itemNav}><PersonNav className={style.iconSvg} /></span>
      <span className={style.itemNav}><InfinityNav className={style.iconSvg} /></span>
  </div>
)
}