import LatestNews from "@/components/ui/Latest/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import SidebarBatom from "@/components/ui/Sidebar/SidebarBatom";
import { Divider, Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="mt-8 w-11/12 mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <LatestNews />
          </Grid>
          <Grid item xs={4}>
            <Sidebar />
            <Divider />
            <div>
              <SidebarBatom />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
