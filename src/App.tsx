import React, { useState, useEffect } from "react";

import { Address } from "./types/globalTypes";

import Details from "./components/Details";
import Map from "./components/Map";
import Arrow from "./images/icon-arrow.svg";
import BackgroundImg from "./images/pattern-bg.png";


function App() {
  const [address, setAddress] = useState<Address | null>(null);
  const [ipAddress, setIpAddress] = useState("");
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  useEffect(() => {
    const getInitialData = async () => {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=8.8.8.8`
      );
      const data = await res.json();
      setAddress(data);
    };

    getInitialData();
  }, []);

  const getEnteredAddress = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${
        process.env.REACT_APP_API_KEY
      }&${
        checkIpAddress.test(ipAddress)
          ? `ipAddress=${ipAddress}`
          : checkDomain.test(ipAddress)
          ? `domain=${ipAddress}`
          : ""
      }`
    );
    const data = await res.json();
    setAddress(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getEnteredAddress();
    setIpAddress("")
  };

  return (
    <>
      <div className="absolute -z-10 w-full">
        <img src={BackgroundImg} alt="" className="w-full h-80 object-cover" />
      </div>
      <div>
        <h1 className="py-8 text-4xl font-medium text-white text-center">
          IP Address Tracker
        </h1>
        <form
          className="flex items-center justify-center max-w-2xl mx-auto"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="ipaddress"
            placeholder="Search for any IP Address or Domain"
            required
            className="py-3 px-4 rounded-l-lg w-full outline-none"
            onChange={handleChange}
            value={ipAddress}
          />
          <button
            type="submit"
            className="py-[19px] px-6 rounded-r-lg bg-black hover:opacity-60"
          >
            <img src={Arrow} alt="" className="" />
          </button>
        </form>
      </div>

      {address && (
        <>
          <Details address={address} />
          <Map address={address} />
        </>
      )}
    </>
  );
}

export default App;
