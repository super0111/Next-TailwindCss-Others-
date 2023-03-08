import React, { useState, useEffect } from "react";
import { Container, Divider, Grid } from "@mui/material";
import Router from "next/router";
export default function Footer({ ...props }) {
  return (
    <div>
      <div
        className="w-full h-full  bg-[#7bd683] md:bg-transparent bg-none md:bg-[url('/images/FooterBack.png')] bg-no-repeat  px-4 md:px-20 pt-16 pb-12 md:pb-2"
        style={{ backgroundSize: "100% ,100%" }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start border-b border-white pb-16">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="text-4xl font-bold text-white">Driveclass.</div>
              <div className="text-base text-white text-center md:text-left break-words">
                Morbi ac sit vel nisl. Scelerisque viverra tempus tortor
                facilisis magna. Ultricies suspendisse a libero lorem sodales
                eget.
              </div>
              <div className="flex flex-row space-x-6 items-center">
                <img src="/images/IconGoogle.svg" />
                <img src="/images/IconTwitter.svg" />
                <img src="/images/IconYoutube.svg" />
                <img src="/images/IconFacebook.svg" />
              </div>
            </div>
          </div>
          <div className="w-ful md:w-2/3 px-2 md:px-20 ">
            <div className="w-full space-x-2 sm:space-x-8 flex flex-row justify-around">
              <ul>
                <p className="text-lg text-white font-medium py-4">Links</p>
                <li
                  className="text-lg text-white cursor-pointer font-light py-2"
                  onClick={() => {
                    Router.push("/about_us");
                  }}
                >
                  Kurse
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Blog
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Pricing
                </li>
              </ul>
              <ul>
                <p className="text-lg text-white font-medium py-4">
                  Unternehmen
                </p>
                <li
                  className="text-lg text-white cursor-pointer font-light py-2"
                  onClick={() => {
                    Router.push("/about_us");
                  }}
                >
                  über Uns
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Links
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Bewertungen
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Kontakt
                </li>
              </ul>
              <ul>
                <p className="text-lg text-white font-medium py-4">
                  Ausbildung
                </p>
                <li
                  className="text-lg text-white cursor-pointer font-light py-2"
                  onClick={() => {
                    Router.push("/about_us");
                  }}
                >
                  Fahrlehrer
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Fahrschüler
                </li>
                <li className="text-lg text-white cursor-pointer font-light py-2">
                  Fahrschulen
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-lg text-white font-arti">
            2023 Driveclass. All rights reserved
          </div>
          <div className="flex flex-row space-x-4">
            <div className="text-lg text-white font-arti">Sitemap</div>
            <div className="text-lg text-white font-arti">Datenschutz</div>
            <div className="text-lg text-white font-arti">Impressum</div>
          </div>
        </div>
      </div>
    </div>
  );
}
