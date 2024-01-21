// import Head from 'next/head';
import * as React from 'react';
import Image from 'next/image';
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { blue } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 1000;
const navItems = ['Home', 'learn', 'did'];

const name = 'Doragon-RH';
export const siteTitle = 'introduction';
export default function Layout({ children, home }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Introduction
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.paper",
          height: "auto",
          padding: "0px",
          margin: "60px",
          background: "lightgreen",
          borderRadius: 40,
        }}>
       <CssBaseline /> {/*//CSSのリセット */}
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Introduction
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
        <Toolbar />
        
        {/* <Head> 以前の内容
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head> */}
        
          {home ? (
            <>
              <Avatar
              alt="My picture"
                src="/images/profile.jpg"
                sx={{ width: 200, height: 200 }}
              />
              <Box component="h1" 
              sx={{
                color: blue[500],
              }}>{name}</Box>
            </>
          ) : (
            <>
              <Link href="/" >
              <Avatar
              alt="My picture"
                src="/images/profile.jpg"
                sx={{ width: 150, height: 150 }}
              />
              </Link>
              <Link href="/" underline="hover">
                <Box component="h2" 
                sx={{
                  color: blue[500],
                }}>{name}
                </Box>
              </Link>
            </>
          )}
        <Box component="section"
        sx={{
          padding: "20px",
        
        }}>{children}</Box>
        {!home && ( //0,null,false,undefined,NaN,""はfalseとして扱われる
          <Box
          sx={{
            padding: "20px",
          }}>
            <Link href="/" underline="hover">← Back to home</Link>
          </Box>
        )}
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: 1,
              minWidth: 500,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          > 
            Powered by{' '}
            <Image 
            src="/vercel.svg" 
            alt="Vercel"
            width ={80}
            height={80}
            />
          </Box>
        </Link>
      </Box>
        
    );
}