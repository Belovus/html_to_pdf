import React from 'react';

import './Payments.sass';

function Payments({ intermediary, beneficiary }) {
  return (
    <div className="Payments">
      <div className="Payments__header">
        <h3>Payment confirms the provision of services</h3>
      </div>
      <div className="Payments__underHeader">
        <h5>Payment information</h5>
      </div>
      <div className="Payments__block">
        <h3>Intermediary Bank:</h3>
        <h4>{intermediary.bankName}</h4>
        <h4>{intermediary.bankLocation}</h4>
        <h4>SWIFT: {intermediary.swift}</h4>
      </div>
      <div className="Payments__block">
        <h3>Bank Beneficiary:</h3>
        <h4>{beneficiary.bankName}</h4>
        <h4>{beneficiary.bankLocation}</h4>
        <h4>SWIFT: {beneficiary.swift}</h4>
        <h4>Account No {beneficiary.accountId}</h4>
        <h4>Beneficiary: {beneficiary.beneficiaryName}</h4>
      </div>
    </div>
  )
}

export default Payments;
