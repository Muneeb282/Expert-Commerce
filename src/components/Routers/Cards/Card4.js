import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {CardActionArea } from "@mui/material";
import { Marketing_Sp } from "../Data";
import "../page.css";

export default function MultiActionAreaCard() {
  return (
    <div className="main_card">
      {Marketing_Sp.map((e) => {
        return (
          <Card sx={{ width: 200, height: 200, margin: "20px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={e.img}
                alt="green iguana"
                style={{ position: "absolute" }}
              />
              <CardContent style={{ marginTop: "70px", marginBottom: "200px" }}>
                <div style={{ position: "relative", fontWeight: 600 }}>
                  {e.title}
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
