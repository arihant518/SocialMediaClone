import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography>Online friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
          
        </AvatarGroup>
        <Typography mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format'
            alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format'
            alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1574180045827-681f8a1a9622?w=161&fit=crop&auto=format'
            alt=''/>
          </ImageListItem>
        </ImageList>


        <Typography mt={2}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
