"use client";

import { useState } from "react";

import Heading from "./heading";
import Text from "./text";
import { Minus, Plus } from "@phosphor-icons/react";

export default function Map() {
  const [zoomLevel, setZoomLevel] = useState(14);

  const increaseZoom = () => setZoomLevel((zl) => zl + 1);
  const decreaseZoom = () => setZoomLevel((zl) => zl - 1);

  return (
    <div className="relative mx-auto h-full max-h-[550px] w-full max-w-[960px]">
      <div className="absolute right-0 flex h-full max-w-[300px] items-center justify-center bg-white bg-opacity-70 p-12 backdrop-blur-sm">
        <div>
          <Heading>How to find us</Heading>
          <Text>
            You are most welcome to come and visit us. We meet every Sunday at
            11am in the Gaelscoil Liatroma in Carrick-on-Shannon. The full
            address is Castlecara Rd, Aghameeny, Carrick-on-Shannon, Co.
            Leitrim, N41 V2H5
          </Text>
          <div className="mt-8 flex w-full items-center justify-center">
            <div className="mt-6 flex max-w-max justify-between border bg-white px-4 py-2 shadow-sm hover:shadow-md">
              <button className="h-full" onClick={increaseZoom}>
                <Plus
                  size={24}
                  weight="bold"
                  className="fill-slate-500 hover:fill-slate-900"
                />
              </button>
              <div className="mx-4 h-[24px] w-[1px] bg-slate-400"></div>
              <button className="h-full" onClick={decreaseZoom}>
                <Minus
                  size={24}
                  weight="bold"
                  className="fill-slate-500 hover:fill-slate-900"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs8dEEM-FXkgR4hHCLI2selw&key=replace-this&zoom=${zoomLevel}&center=53.952877,-8.065012`}
      ></iframe>
    </div>
  );
}
