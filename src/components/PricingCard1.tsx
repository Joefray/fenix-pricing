import { FunctionComponent } from "react";
import "./PricingCard1.css";

export type PricingCard1Type = {
  className?: string;
};

const PricingCard1: FunctionComponent<PricingCard1Type> = ({
  className = "",
}) => {
  return (
    <div className={`pricing-card-01 ${className}`}>
      <h2 className="title1">
        <p className="save-more">Save More</p>
        <p className="with-goodplans">
          <b>With Goodplans.</b>
        </p>
      </h2>
      <p className="choose-a-plan">
        Choose a plan and get onboard in minutes. Then get $100 credits for your
        next payment.
      </p>
      <div className="pexels-godisable-jacob-871495-parent">
        <img
          className="pexels-godisable-jacob-871495-icon"
          alt=""
          src="/pexelsgodisablejacob871495removebgpreview-1@2x.png"
        />
        <img
          className="arrow-right-line-1-icon"
          loading="lazy"
          alt=""
          src="/arrowrightline-1.svg"
        />
      </div>
    </div>
  );
};

export default PricingCard1;
