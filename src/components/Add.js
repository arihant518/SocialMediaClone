import { Avatar, Box, Fab, Modal, Stack, TextField, Tooltip,Typography,styled } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, AddPhotoAlternate, EmojiEmotions, PersonAdd, VideoFile } from '@mui/icons-material'

 const StyledModal= styled(Modal)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
 })
 const UserBox= styled(Box)({
    display:"flex",
    gap: "10px",
    alignItems:"center",
    marginBottom:"20px"
 })

const Add = () => {

    const [open,setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% -25px)",md:30}}}>
      <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
    <Typography variant='h6' color="gray" textAlign="center">
        Create Post
    </Typography>
    <UserBox>
    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" sx={{width:30,height:30}} />
        <Typography>Arihant jain</Typography>
    </UserBox>
    <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="what's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color='primary'/>
            <AddPhotoAlternate color='secondary'/>
            <VideoFile color='success'/>
            <PersonAdd color='error'/>
        </Stack>
     </Box>
</StyledModal>
    </>
  )
}

export default Add
