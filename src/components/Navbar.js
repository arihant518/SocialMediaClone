// import styled from '@emotion/styled'
import { Pets , Mail} from '@mui/icons-material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Toolbar, Typography , Box, InputBase, Badge, Avatar, styled, Menu, MenuItem } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import React, { useState } from 'react'


const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: "5px",
  width: "40%"
}))

const Icons = styled("Box")(({theme}) =>({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  
  [theme.breakpoints.up('sm')]: {
    display:"flex"
  },
}));
const UserBox = styled("Box")(({theme}) =>({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display:"none"
  },
}));

const Navbar = () => {

 const [open , setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
      <Typography variant='h6' sx={{display: {xs:"none", sm:"block"}}}>Arihant jain</Typography>
      <Pets sx={{display: {xs:"block", sm:"none"}}}/>
      <Search><InputBase placeholder='search...'/></Search>
      <Icons>
     
        <Badge badgeContent={4} color='error'>
          <Mail />
        </Badge>
        <Badge badgeContent={4} color='error'>
          <NotificationsIcon />
        </Badge>
        <Avatar sx={{ bgcolor: blueGrey}} onClick={e=>setOpen(true)}>AJ</Avatar>
      </Icons>
      <UserBox onClick={e=>setOpen(true)}>
      <Avatar sx={{ bgcolor: blueGrey }}>AJ</Avatar>
      <Typography variant='span'>Arihant</Typography>
      </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
