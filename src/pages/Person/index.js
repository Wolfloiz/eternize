import React from 'react'

import style from "./style.module.css";

import HaddonImg from './../../assets/haddon.png'

export default function Person() {
  return (
    <div className={style.timeLinePerson}>
      <h1>Escolha sobre quem você quer ouvir</h1>

      <div className={style.card}>
        <div className={style.imgCss}>
          <img src={HaddonImg} alt="" />
        </div>
        <div className={style.cardRight}>
          <div className={style.bodyCardName}>
            <span className={style.name}>Haddon Guimaraes</span>
          </div>

          <div className={style.cardSkillsBody}>
            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Empreendedor</span>
            </div>

            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Lider</span>
            </div>

            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Resiliente</span>
            </div>

          </div>

          <div className={style.cardSkillsBody}>
            <div className={style.bodyCardTag}>
              <span className={style.tags}>#Classic #Rock</span>
            </div>
          </div>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.imgCss}>
          <img src={HaddonImg} alt="" />
        </div>
        <div className={style.cardRight}>
          <div className={style.bodyCardName}>
            <span className={style.name}>Haddon Guimaraes</span>
          </div>

          <div className={style.cardSkillsBody}>
            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Empreendedor</span>
            </div>

            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Lider</span>
            </div>

            <div className={style.bodyCardSkills}>
              <span className={style.skills}>Resiliente</span>
            </div>

          </div>

          <div className={style.cardSkillsBody}>
            <div className={style.bodyCardTag}>
              <span className={style.tags}>#Classic #Rock</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}