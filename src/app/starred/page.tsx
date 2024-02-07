"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Todo } from "@/api/types";
import useGetTodosQuery from "@/hooks/useGetTodosQuery";
import Link from "next/link";
import ListGrid from "@/components/grid/ListGrid";
import { Breadcrumbs, Stack, Grid, TextField, FormGroup, FormControlLabel } from "@mui/material";
import LabelBox from "@/components/box/LabelBox";
import { CheckBox } from "@mui/icons-material";

global.React = React;

export default function StarredPage() {
  const { data, isFetching } = useGetTodosQuery();
  if (isFetching) return <div>loading...</div>;
  return (
    <ListGrid
      title={
        <Stack>
          <Breadcrumbs>
            <Link color='primary' href='/'>
              PDC
            </Link>
            <Link color='primary' href='/'>
              Core
            </Link>
          </Breadcrumbs>
          <Typography variant='h6' component='strong'>
            Title
          </Typography>
        </Stack>
      }
      tools={
        <Grid container gap={2}>
          <Grid item xs={12} md={4}>
            <LabelBox
              label='aaaasdfsdfsdfsdfsdfsdfsdsdf'
              tooltip='aaaasdfsdfsdfsdfsdfsdfsdsdf'
              component={<TextField size='small' />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <LabelBox
              label='aaaa'
              component={
                <FormGroup row sx={{ my: 1 }}>
                  <FormControlLabel label='aaa' control={<CheckBox />} />
                  <FormControlLabel label='aaa' control={<CheckBox />} />
                  <FormControlLabel label='aaa' control={<CheckBox />} />
                </FormGroup>
              }
            />
          </Grid>
          <Grid item xs>
            <LabelBox
              label='aaaa'
              component={
                <FormGroup row sx={{ my: 1 }}>
                  <FormControlLabel label='aaa' control={<CheckBox />} />
                  <FormControlLabel label='sdfsdf' control={<CheckBox />} />
                  <FormControlLabel label='bbsdfsdf' control={<CheckBox />} />
                </FormGroup>
              }
            />
          </Grid>
        </Grid>
      }
      table={
        <div>
          {data !== undefined &&
            data.length > 0 &&
            data.map((elem: Todo) => (
              <Box key={elem.id}>
                <Link href={`/starred/${elem.id}`}>{elem.title}</Link>
              </Box>
            ))}
        </div>
      }
    />
  );
}
