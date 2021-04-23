import React, { isValidElement, useState } from "react";
import "./homeStyle.css";
import { BsChevronCompactDown } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { IoLogoReddit } from "react-icons/io";

function Home(props) {
  const accountDummy = [
    {
      id: 0,
      accNumb: 1234567,
      accName: "Angga",
      domicile: "Malang",
      balance: 150000000,
      lastTransaction: "22/04/2021",
      transactionList: [
        {
          transactionDate: "22/04/2021",
          debit: 0,
          credit: 30000000,
          transactionInfo: "First payment of my Pajero",
        },
        {
          transactionDate: "21/04/2021",
          debit: 30000000,
          credit: 0,
          transactionInfo: "First salary",
        },
        {
          transactionDate: "15/04/2021",
          debit: 0,
          credit: 3000000,
          transactionInfo: "KPR",
        },
      ],
    },
    {
      id: 1,
      accNumb: 1234568,
      accName: "Raisa",
      domicile: "Jakarta",
      balance: 200000000,
      lastTransaction: "25/03/2021",
      transactionList: [
        {
          transactionDate: "25/03/2021",
          debit: 0,
          credit: 60000000,
          transactionInfo: "Buy Tesla Stock",
        },
        {
          transactionDate: "23/03/2021",
          debit: 70000000,
          credit: 0,
          transactionInfo: "Dividen from BBCA",
        },
      ],
    },
    {
      id: 3,
      accNumb: 1234569,
      accName: "Isyana",
      domicile: "Bogor",
      balance: 80000000,
      lastTransaction: "18/03/2021",
      transactionList: [
        {
          transactionDate: "18/03/2021",
          debit: 0,
          credit: 20000000,
          transactionInfo: "First payment of apartment",
        },
        {
          transactionDate: "15/03/2021",
          debit: 25000000,
          credit: 0,
          transactionInfo: "Freelance project",
        },
      ],
    },
    {
      id: 4,
      accNumb: 1234570,
      accName: "Kaesang",
      domicile: "Solo",
      balance: 500000000,
      lastTransaction: "14/02/2021",
      transactionList: [
        {
          transactionDate: "14/02/2021",
          debit: 0,
          credit: 30000000,
          transactionInfo: "Staycation on Valentine's Day",
        },
      ],
    },
    {
      id: 5,
      accNumb: 1234571,
      accName: "Pamungkas",
      domicile: "Semarang",
      balance: 700000000,
      lastTransaction: "28/04/2021",
      transactionList: [
        {
          transactionDate: "28/04/2021",
          debit: 0,
          credit: 70000000,
          transactionInfo: "Buy Rolex",
        },
        {
          transactionDate: "25/04/2021",
          debit: 73000000,
          credit: 0,
          transactionInfo: "YouTube Adsense",
        },
      ],
    },
  ];

  const [clickAcc, setClickAcc] = useState(accountDummy);
  return (
    <div className="home">
      <div className="listContainer">
        <h2>Account List</h2>
        {clickAcc.map((value) => {
          return (
            <div className="card" key={value.id}>
              <p className="accNumber">{value.accNumb}</p>

              <div className="lowerSectCard">
                <p>
                  Rp.
                  {value.balance
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  ,-
                </p>
                <p style={{ color: "gray" }}>
                  Last transaction: {value.lastTransaction}
                </p>
              </div>

              <Accordion
                allowZeroExpanded
                style={{
                  display: "flex",
                  alignSelf: "center",
                  padding: "10px",
                }}
              >
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <BsChevronCompactDown className="expandDown" />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="accDetail">
                      <h4>Account Details</h4>
                      <IoLogoReddit className="profIcon" />

                      <p>Account Owner Name: {value.accName}</p>
                      <p>City: {value.domicile}</p>
                    </div>
                    {value.transactionList.map((subItem) => {
                      return (
                        <div className="expandedView" key={value.id}>
                          <div>{subItem.transactionDate}</div>
                          <div className="expandedMid">
                            <p style={{ color: "#00917c" }}>
                              Debit Rp.
                              {subItem.debit
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              ,-
                            </p>
                            <p style={{ color: "red" }}>
                              Kredit Rp.
                              {subItem.credit
                                .toString()
                                .replace(
                                  /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                  ","
                                )}
                              ,-
                            </p>
                          </div>
                          <div>{subItem.transactionInfo}</div>
                        </div>
                      );
                    })}
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
