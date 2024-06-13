import { FunctionComponent } from "react";
import "./PricingCard.css";

export type PricingCardType = {
  className?: string;
};

const PricingCard: FunctionComponent<PricingCardType> = ({
  className = "",
}) => {
  return (
    <div className={`pricing-card-2 ${className}`}>
      <div className="pricing-card-2-inner">
        <div className="icon-group">
          <img className="icon1" loading="lazy" alt="" src="/icon.svg" />
          <b className="title2">Day Pass</b>
        </div>
      </div>
      <div className="pricing-card-2-child">
        <div className="what-youll-get-group">
          <a className="what-youll-get1">What You’ll Get</a>
          <div className="frame-group">
            <div className="frame-container">
              <div className="bxs-check-circle-2-1-parent2">
                <img
                  className="bxs-check-circle-2-15"
                  alt=""
                  src="/bxscheckcircle-2-1.svg"
                />
                <p className="hours-usage-of1">
                  8 hours usage of our coworking space
                </p>
              </div>
              <div className="bxs-check-circle-2-1-parent3">
                <img
                  className="bxs-check-circle-2-16"
                  alt=""
                  src="/bxscheckcircle-2-1.svg"
                />
                <div className="access-to-all1">Access to All our rooms</div>
              </div>
            </div>
            <div className="divider1" />
            <div className="pricing1">
              <b>$20</b>
              <span className="day">/day</span>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-button1">
        <b className="button-label1">Choose</b>
      </div>
    </div>
  );
};

export default PricingCard;
