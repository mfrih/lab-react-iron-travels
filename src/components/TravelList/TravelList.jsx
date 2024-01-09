import { useState } from "react";
import "./TravelList.css";
import JSONTravelPlans from "./../../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(JSONTravelPlans);

  const greatDeal = 350;
  const premiumPrice = 1500;

  return (
    <div>
      {travelPlans.map((travelPlan) => {
        return (
          <div key={travelPlan.id} className="TravelList">
            <div>
              <img src={travelPlan.image} alt="" />
            </div>
            <div>
              <h2>
                {travelPlan.destination} {`(${travelPlan.days} days)`}
              </h2>
              <p>{travelPlan.description}</p>
              <p>
                <span>Price: </span>
                {travelPlan.totalCost} €
              </p>
              {travelPlan.totalCost <= greatDeal ? (
                <span>Great Deal</span>
              ) : null}
              {travelPlan.totalCost > premiumPrice ? (
                <span>Premium</span>
              ) : null}
              {travelPlan.allInclusive ? <span>All Inclusive</span> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
