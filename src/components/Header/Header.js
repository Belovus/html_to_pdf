import React from 'react';

import logo from '../../assets/logo.png';

import './Header.sass';

function Header({
  invoice,
  dates,
  recipient,
  invoiceData,
  dueDate,
  first,
}) {
  return (
    <>
      <div className="Header">
        <div className="Header__left">
          <img src={logo} alt="logo" className="Header__left__logo" />
        </div>
        <div className="Header__right">
          <h1 className="Header__right__text">
            {`Invoice #${invoice}`}
            <br />
            {`George (${dates})`}
          </h1>
        </div>
      </div>
      {first && (
        <div className="UnderHeader">
          <div className="UnderHeader__top">
            <b>To:</b>
            {' '}
            <i>{recipient}</i>
          </div>
          <div className="UnderHeader__middle">
            <b>Date of invoice:</b>
            {' '}
            <i>{invoiceData}</i>
          </div>
          <div className="UnderHeader__bottom">
            <b>Due Date:</b>
            {' '}
            <i>{dueDate}</i>
          </div>
        </div>
      )}
    </>
  )
}

export default Header;
