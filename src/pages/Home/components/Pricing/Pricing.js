import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import lightNing from "../../../../assets/images/lightning.png";
import { pricing } from "../../../../utils/MockData";
import PricingItem from "./PricingItem/PricingItem";
import "./Pricing.scss";

const Pricing = () => {
  return (
    <section className='pricing animated'>
      <div className='container'>
        <TitleSection title='pricing' urlIcon={lightNing} />
        <div className='pricing__wrap'>
          {pricing &&
            !!pricing.length &&
            pricing.map((data, index) => (
              <PricingItem key={index} data={data} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
