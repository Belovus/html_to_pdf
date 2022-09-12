import React from 'react';

import './Table.sass';

function Table({ payments, allHours, allFee, last }) {
  if (payments.length === 0) return;
  return (
    <>
      <div className="Table">
        <div className="Table__header">
          <div className="Table__header__date">Date</div>
          <div className="Table__header__class">Class</div>
          <div className="Table__header__student">Student</div>
          <div className="Table__header__hours">Hours</div>
          <div className="Table__header__fee">Fee, $</div>
        </div>
        {payments.map((element) => {
          return (
            <div className="Table__row" key={JSON.stringify(element)}>
              <div className="Table__row__date">{element.date}</div>
              <div className="Table__row__class">{element.class}</div>
              <div className="Table__row__student">{element.student}</div>
              <div className="Table__row__hours">{element.hours}</div>
              <div className="Table__row__fee">{`$${element.fee}`}</div>
            </div>
          )
        })}
        {last && (
          <div className="Table__bottom">
            <div className="Table__bottom__overall">
              Overall
            </div>
            <div className="Table__bottom__value1">
              {allHours}
            </div>
            <div className="Table__bottom__value2">
              {`$${allFee}`}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Table;
