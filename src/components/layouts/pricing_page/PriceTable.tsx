import React from "react";
import styled from "styled-components";

interface tableDataTypes {
  seasonTime:
    | "low season"
    | "off season"
    | "high season"
    | "christmas"
    | "new year's eve";
  week: number;
  weekend: number;
  "long weekend": number;
}

const PriceTable = () => {
  const tableData: tableDataTypes[] = [
    {
      seasonTime: "high season",
      week: 21000,
      weekend: 1000,
      "long weekend": 33000,
    },
    {
      seasonTime: "low season",
      week: 11000,
      weekend: 100,
      "long weekend": 23000,
    },
    {
      seasonTime: "off season",
      week: 11659,
      weekend: 940,
      "long weekend": 23760,
    },
  ];

  return (
    <Wrapper className="margin-top">
      <div className="custom-container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <TableContainer>
              <TableHead></TableHead>

              <TableContent>
                {tableData.map(({ seasonTime, weekend, week }, index) => (
                  <div className="row" key={index}>
                    <div className="col seasonTime">{seasonTime}</div>
                    <div className="col">{week}</div>
                    <div className="col">{weekend}</div>
                  </div>
                ))}
              </TableContent>
            </TableContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PriceTable;

const Wrapper = styled.div``;

const TableContainer = styled.div``;

const TableHead = styled.div``;

const TableContent = styled.div``;
