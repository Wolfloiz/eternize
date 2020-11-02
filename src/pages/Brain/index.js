import React from 'react'

import style from './style.module.css'

import Brain from './../../assets/Frame.png';

export default function Person() {
  return (
    <div className={style.containerBrain}>
      <img src={Brain} alt=""/>
    </div>
  )}