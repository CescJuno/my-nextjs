"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Todo } from "@/api/types";
import useGetTodosQuery from "@/hooks/useGetTodosQuery";
import Link from "next/link";

global.React = React;

export default function StarredPage() {
  const { data, isFetching } = useGetTodosQuery();
  if (isFetching) return <div>loading...</div>;
  return (
    <Box sx={{ display: "flex" }}>
      <div>
        {data !== undefined &&
          data.length > 0 &&
          data.map((elem: Todo) => (
            <Box key={elem.id}>
              <Link href={`/starred/${elem.id}`}>{elem.title}</Link>
            </Box>
          ))}
      </div>
      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 320,
            boxSizing: "border-box",
            top: ["48px", "56px", "64px"],
            height: "auto",
            bottom: 0,
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant="overline" sx={{ fontWeight: 500 }}>
              On this page
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
