import React from 'react'
import { Link } from 'react-router-dom';

import jumbotronPost from '../../../assets/news/jumbotronPost.png'
import jumbotronPosts1 from '../../../assets/news/jumbotronPost1.png'
import jumbotronPosts2 from '../../../assets/news/jumbotronPost2.png'
import jumbotronPosts3 from '../../../assets/news/jumbotronPost3.png'
import { JumbotronPosts } from '../../UI/newsBlock/NewsBlock';
import style from './Block.module.css'

export const Block = () => {
  return (
    <div className={style.body}>
        <div className={style.row}>
          <div style={{backgroundImage: `url(${jumbotronPost})`}} className={style.jumbotronPost}>
            <Link to="/new/1" className={style.link}>
              <div className={style.jumbotronPostDesc}>
                  <h3>
                    <b>These were just promises, he needs to get the bill through congress. </b>
                  </h3>
                  <p>
                    The despair among many in the US over the possible failure of President Biden's bill will also have knock-on effects throughout the world. This will certainly be the case in China
                  </p>
              </div>
            </Link>
          </div>
          <div className={style.jumbotronPostParent}>
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts1} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts2} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
            <JumbotronPosts title={'There are now growing concerns that this momentum may dissipate over the coming months.'} img={jumbotronPosts3} date={'12.12.2021'} desc={'The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...'} />
          </div>
        </div>
      </div>
  )
}
