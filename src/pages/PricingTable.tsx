import { FunctionComponent } from "react";
import PricingCard1 from "../components/PricingCard1";
import PricingCard from "../components/PricingCard";
import "./PricingTable.css";

const PricingTable: FunctionComponent = () => {
  return (
    <div className="pricing-table-2">
      <PricingCard1 />
      <div className="shadow-parent">
        <div className="shadow" />
        <PricingCard />
      </div>
      <div className="shadow1" />
      <div className="shadow-group">
        <div className="shadow2" />
        <div className="pricing-card-3">
          <div className="pricing-card-3-inner">
            <div className="frame-parent">
              <div className="icon-parent">
                <img className="icon" alt="" src="/icon.svg" />
                <b className="title">Monthly Pass</b>
              </div>
              <div className="what-youll-get-parent">
                <a className="what-youll-get">What You’ll Get</a>
                <div className="benefits">
                  <div className="bxs-check-circle-2-1-parent">
                    <img
                      className="bxs-check-circle-2-1"
                      alt=""
                      src="/bxscheckcircle-2-1.svg"
                    />
                    <p className="hours-usage-of">
                      8 hours usage of our coworking space
                    </p>
                  </div>
                  <div className="bxs-check-circle-2-1-group">
                    <img
                      className="bxs-check-circle-2-11"
                      alt=""
                      src="/bxscheckcircle-2-1.svg"
                    />
                    <div className="access-to-all">Access to All our rooms</div>
                  </div>
                  <div className="benefit-items">
                    <div className="bxs-check-circle-2-1-container">
                      <img
                        className="bxs-check-circle-2-12"
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className="dedicated-desk">Dedicated Desk</div>
                    </div>
                    <div className="frame-div">
                      <img
                        className="bxs-check-circle-2-13"
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className="free-business-address">
                        Free Business Address
                      </div>
                    </div>
                    <div className="bxs-check-circle-2-1-parent1">
                      <img
                        className="bxs-check-circle-2-14"
                        alt=""
                        src="/bxscheckcircle-2-1.svg"
                      />
                      <div className="free-lunch-1x">Free Lunch 1x a day</div>
                    </div>
                  </div>
                  <div className="divider" />
                </div>
              </div>
              <div className="pricing">
                <b>$380</b>
                <span className="month">/month</span>
              </div>
            </div>
          </div>
          <div className="primary-button">
            <b className="button-label">Choose</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
