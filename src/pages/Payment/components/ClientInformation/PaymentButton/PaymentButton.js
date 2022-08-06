import React, { useEffect } from "react";
import useAppContext from "../../../../../customHooks/useAppContext";
import usePayRental from "../../../../../customHooks/usePayRental";
import './PaymentButton.css';

import Spinner from '../../../../../components/Spinner/Spinner';
import { useNavigate } from "react-router-dom";

const PaymentButton = () => {
  const {
    state: {
      labels,
      summary,
      payment: { isFetching, paid },
    },
  } = useAppContext();

  const navigate = useNavigate();

  // when reservation is paid, we should redirec
  useEffect(() => {
    if (paid) {
      navigate('/success');
    }
    // eslint-disable-next-line
  }, [paid]);

  const { doPayment } = usePayRental();

  const buttonLabel = () => {
    if (summary.total > 0) {
        return `${labels.pay} $${summary.total}`;
    } else {
        return labels.reserve;
    }
  }

  return (
    <button disabled={isFetching} className="btn payment-btn" onClick={() => doPayment()}>
        {
            isFetching ? <Spinner small white/> :
            <span>
                { buttonLabel() }
            </span>
        }
      
    </button>
  );
};

export default PaymentButton;
