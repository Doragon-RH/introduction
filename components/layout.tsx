// import Head from 'next/head';
import * as React from 'react';
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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#activity' },
  { label: 'Contact', href: '#contact' },
];

const name = 'Doragon-RH';
const profileImage = '/images/profile.jpg';
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
          <ListItem key={item.href} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              {item.label}
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
          justifyContent: "flex-start",
          bgcolor: "background.paper",
          minHeight: "100vh",
          padding: { xs: "0 12px 40px", sm: "0 32px 56px" },
          margin: 0,
          background: "linear-gradient(135deg, #f4f8f5 0%, #ffffff 48%, #f7f5ef 100%)",
        }}>
       <CssBaseline /> {/*//CSSのリセット */}
      <AppBar component="nav" sx={{ bgcolor: '#173f35', boxShadow: 2 }}>
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
            Doragon-RH / introduction
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.href} href={item.href} sx={{ color: '#fff' }}>
                {item.label}
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
                src={profileImage}
                sx={{ width: 200, height: 200, border: '5px solid #fff', boxShadow: 4 }}
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
                src={profileImage}
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
        sx={{ width: '100%', maxWidth: 860, padding: { xs: "8px 0", sm: "20px 0" } }}>{children}</Box>
        {!home && ( //0,null,false,undefined,NaN,""はfalseとして扱われる
          <Box
          sx={{
            padding: "20px",
          }}>
            <Link href="/" underline="hover">← Back to home</Link>
          </Box>
        )}
      </Box>
        
    );
}