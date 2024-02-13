import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import theme from "@/theme";
import ReactQueryProviders from "@/utils/react-query-provider";
import ClientOnly from "@/app/ClientOnly";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "monitoring", href: "/monitoring", icon: ChecklistIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ClientOnly />
      <body>
        <ReactQueryProviders>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <AppBar position='fixed' sx={{ zIndex: 2000 }}>
                <Toolbar sx={{ backgroundColor: "background.paper" }}>
                  <DashboardIcon
                    sx={{
                      color: "#444",
                      mr: 2,
                      transform: "translateY(-2px)",
                    }}
                  />
                  <Typography variant='h6' color='text.primary'>
                    ABC ADMIN
                  </Typography>
                </Toolbar>
              </AppBar>
              <Drawer
                sx={{
                  width: DRAWER_WIDTH,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: DRAWER_WIDTH,
                    boxSizing: "border-box",
                    top: ["48px", "56px", "64px"],
                    height: "auto",
                    bottom: 0,
                  },
                }}
                variant='permanent'
                anchor='left'
              >
                <Divider />
                <List>
                  {LINKS.map(({ text, href, icon: Icon }) => (
                    <ListItem key={href} disablePadding>
                      <ListItemButton component={Link} href={href}>
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
              <Box
                component='main'
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.default",
                  ml: `${DRAWER_WIDTH}px`,
                  mt: ["48px", "56px", "64px"],
                  p: 3,
                }}
              >
                {children}
              </Box>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
