import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Menu } from "@mui/icons-material";

export const PageLayout = () => {
  const Drawer = () => {
    return (
      <Box>
        <Typography variant="h5">Menu</Typography>
        <List>
          <ListItem>
            <ListItemButton component="a" href="/">
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/sobre">
              <ListItemText primary={"Sobre"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/produtos">
              <ListItemIcon>
                <i className="fas fa-user"></i>
              </ListItemIcon>
              <ListItemText primary={"Produtos"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/noticias">
              <ListItemIcon>
                <i className="fas fa-user"></i>
              </ListItemIcon>
              <ListItemText primary={"Noticias"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component="a" href="/contador">
              <ListItemIcon>
                <i className="fas fa-user"></i>
              </ListItemIcon>
              <ListItemText primary={"Contador"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  const ContainerMenu = () => {
    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton>
              <Menu></Menu>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  };

  return (
    <>
      <Drawer />
      <ContainerMenu />
      <Outlet />
    </>
    /*
    <nav>
        <Link to={"/"}>Inicial</Link>
        <Link to={"sobre/"}>Sobre</Link>
        <Link to={"produtos/"}>Produtos</Link>
        <Link to={"noticias/"}>Noticias</Link>
        <Link to={"contador/"}>Contador</Link>
      </nav>
    */
  );
};
