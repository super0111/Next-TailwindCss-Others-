import { Grid, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

export default function HeaderLanding() {
  const navitem = [
    { to: "/", label: "Home" },
    { to: "/", label: "Fahrschüler" },
    { to: "/", label: "Fahrlehrer" },
    { to: "/", label: "Faq" },
  ];
  return (
    <div className="fixed w-full z-50 py-2 px-4 md:px-16 bg-white bg-opacity-25">
      <Grid container className="items-center">
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <div
            className="cursor-pointer "
            onClick={() => {
              Router.push("/");
            }}
          >
            <div className="text-4xl font-arti text-white font-extrabold">
              Driveclass
            </div>
          </div>
        </Grid>

        <Grid
          item
          lg={4}
          md={4}
          sm={0}
          xs={0}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="flex flex-row items-center justify-end space-x-8">
            {navitem.map((items, itemIndex) => (
              <div
                className="cursor-pointer flex justify-center"
                key={itemIndex}
              >
                <div
                  className="text-xl text-white font-normal active:font-semibold py-4"
                  onClick={() => {
                    Router.push(items.to);
                  }}
                >
                  {items?.label ?? ""}
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={0}
          xs={0}
          // className="flex justify-center"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className="flex justify-end">
            <div className="flex flex-row space-x-12">
              <img
                src="/images/IconSearch.svg"
                className="cursor-pointer h-10"
              />
              <img src="/images/IconUser.svg" className="cursor-pointer h-10" />
            </div>
          </div>
        </Grid>
        <Grid
          item
          lg={0}
          md={0}
          sm={6}
          xs={6}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <div className="flex justify-end">
            <MenuIcon style={{ color: "#000000" }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
