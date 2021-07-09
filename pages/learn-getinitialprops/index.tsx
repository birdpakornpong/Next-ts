import React, { ReactElement } from "react";
import Link from "next/link";
import get from "lodash/get";

interface Props {}

export default function Index({}: Props): ReactElement {
  // simplearray
  const trackingRequests = [
    {
      version: "9.6",
      merchantId: "764764000003155",
      uniqueTransactionCode: 1620267300736,
      desc: "Code: HMO2021050609144832759, ",
      amt: "000000700000",
      currencyCode: "764",
      paymentChannel: "123",
      panCountry: "TH",
      cardholderName: "test data 2",
      cardholderEmail: "anusit.ix@gmail.com",
      userDefined1: "HMO2021050609144832759",
      agentCode: "BBL",
      channelCode: "BANKCOUNTER",
      paymentExpiry: "2021-05-07 23:59:59",
      mobileNo: "0845149356",
    },
    {
      version: "10.6",
      merchantId: "764764000003155",
      uniqueTransactionCode: 1620267300736,
      desc: "Code: HMO2021050609144832759, ",
      amt: "000000700000",
      currencyCode: "764",
      paymentChannel: "123",
      panCountry: "TH",
      cardholderName: "test data 2",
      cardholderEmail: "anusit.ix@gmail.com",
      userDefined1: "HMO2021050609144832759",
      agentCode: "BBL",
      channelCode: "BANKCOUNTER",
      paymentExpiry: "2021-05-07 23:59:59",
      mobileNo: "0845149356",
    },
    {
      version: "11.6",
      merchantId: "764764000003155",
      uniqueTransactionCode: 1620267300736,
      desc: "Code: HMO2021050609144832759, ",
      amt: "000000700000",
      currencyCode: "764",
      paymentChannel: "123",
      panCountry: "TH",
      cardholderName: "test data 2",
      cardholderEmail: "anusit.ix@gmail.com",
      userDefined1: "HMO2021050609144832759",
      agentCode: "BBL",
      channelCode: "BANKCOUNTER",
      paymentExpiry: "2021-05-07 23:59:59",
      mobileNo: "0845149356",
    },
  ];

  const [trackingRequest] =
    trackingRequests && trackingRequests.length > 0
      ? trackingRequests.slice().reverse()
      : [];

  console.log("trackingRequest: ", [trackingRequest]);

  const invoice_no = get(trackingRequest, "uniqueTransactionCode");
  console.log("invoice_no: ", invoice_no);

  const verhicelPerson = [
    { v: "car", name: "bird" },
    { v: "bike", name: "pang" },
    { v: "airplane", name: "meow" },
  ];

  return (
    <div>
      <h1>getInitialProps</h1>
      {verhicelPerson.map((e) => (
        <h1 key={e.v}>
          <Link as={`/${e.v}/${e.name}`} href="/[verhicle]/[person]">
            <a>
              {e.v} and {e.name}
            </a>
          </Link>
        </h1>
      ))}
      <h3>
        {" "}
        <Link href="/learn-getinitialprops/usefetch">
          <a>example Fetch</a>
        </Link>
      </h3>
      <h3>
        <Link href="/learn-getinitialprops/getinitialprops">
          <a>example getinitialprops</a>
        </Link>
      </h3>
    </div>
  );
}
