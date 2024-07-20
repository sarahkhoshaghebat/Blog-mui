import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Link, Typography } from "@mui/material";
import React from "react";

export default function SideBar ({date, urlLink}) {
    return(
      <>      
          <Typography>
            <Link href={urlLink}>{date}</Link>
          </Typography>
          </>

    );
}
