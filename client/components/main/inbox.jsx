import React from 'react';
import style from '../../styles/components/main/inbox.css';
import profile from '../../assets/images/default-profile.jpg';

function Inbox() {
  return (
    <div className={style.inbox}>
      <div className={style['inbox-cards']}>
        <img src={profile} alt={profile} />
        <div className={style.text}>
          <span className={style.name}>
            <h3 className={style['profile-name']}>Bill Gates</h3>
            <p className={style.username}>@billgates</p>
          </span>
          <p className={style.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p className={style.time}>2 minutes ago</p>
        </div>
      </div>
    </div>
  );
}

export default Inbox;