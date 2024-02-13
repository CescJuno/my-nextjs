"use client";

import * as React from "react";
import { Breadcrumbs, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import { FilterProvider } from "@/features/monitoring/contexts/useFilterContext";
import WarehouseSelect from "@/features/monitoring/components/WarehouseSelect";
import MaterialTypeSelect from "@/features/monitoring/components/MaterialTypeSelect";
import MaterialSelect from "@/features/monitoring/components/MaterialSelect";
import { Refresh } from "@mui/icons-material";
import NoticeBox from "@/features/monitoring/components/NoticeBox";

global.React = React;

export default function MonitoringPage() {
  return (
    <FilterProvider>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='primary' href='/' underline='hover' variant='body2'>
          PDC
        </Link>
        <Link color='primary' href='/' underline='hover' variant='body2'>
          Core
        </Link>
        <Typography color='text.secondary' variant='body2'>
          Breadcrumbs
        </Typography>
      </Breadcrumbs>
      <Typography variant='h6'>asdfsdf</Typography>
      <Stack
        flexDirection='row'
        alignItems='center'
        border={(theme) => `1px solid ${theme.palette.divider}`}
        p={2}
        my={1}
        borderRadius={1}
      >
        <Grid container alignItems='center'>
          <Grid item xs={4}>
            <WarehouseSelect />
          </Grid>
          <Grid item xs={4}>
            <MaterialTypeSelect />
          </Grid>
          <Grid item xs={4}>
            <MaterialSelect />
          </Grid>
        </Grid>
        <IconButton size='small' sx={{ height: 32 }}>
          <Refresh />
        </IconButton>
      </Stack>
      <NoticeBox />
      <Grid container alignItems='center' sx={{ height: `100%`, border: `1px solid`, overflowY: `scroll` }}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={3}>
              a
            </Grid>
            <Grid item xs={3}>
              b
            </Grid>
            <Grid item xs={3}>
              c
            </Grid>
            <Grid item xs={3}>
              d
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              a
            </Grid>
            <Grid item>b</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={12}>
              a
            </Grid>
            <Grid item>b</Grid>
          </Grid>
        </Grid>
      </Grid>
    </FilterProvider>
  );
}
