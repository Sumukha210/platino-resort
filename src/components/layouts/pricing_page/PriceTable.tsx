import React, { useEffect, useState } from "react";
import { IPricing } from "src/pages/api/admin/pricing";
import { fetchPricing, tableValues } from "./utils";
import {
  TableContainer,
  TableContent,
  TableHead,
  Wrapper,
} from "./prictTableStyles";

const PriceTable = () => {
  const [pricing, setPricing] = useState<IPricing[] | null>(null);

  useEffect(() => {
    fetchPricing(setPricing);
  }, []);

  const { dayType, seasons, sortedPricing } = tableValues(pricing);

  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="header">
              <h2 className="heading-3">Price Table</h2>
            </div>

            <TableContainer>
              <TableHead>
                <div></div>
                {dayType?.map(item => (
                  <h3 key={item}>
                    <span className="sub-title-1">{item}</span>{" "}
                    <span className="sub-title-4">
                      (
                      {item === "Week"
                        ? "Mon - Sun"
                        : item === "Midweek"
                        ? "Mon - Fri"
                        : "Sat & Sun"}
                      )
                    </span>
                  </h3>
                ))}
              </TableHead>

              <TableContent>
                {seasons?.map(season => (
                  <h3 key={season} className="sub-title-1 seasonName">
                    {season}
                  </h3>
                ))}

                {sortedPricing?.map((item, key) => (
                  <h4 key={key} className="sub-title-3">
                    Rs. {item?.price}
                  </h4>
                ))}
              </TableContent>
            </TableContainer>

            <div className="footer">
              <h5 className="sub-title-3">
                * Price includes all the facilities like wellness,food etc...
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PriceTable;
