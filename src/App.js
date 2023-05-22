import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { Box, CssBaseline, Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";



function App() {

 

  return (
   
    
    
    <Box>
    
    <Navbar/>
      <Stack direction="row" spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
        
      </Stack>
      <Add />
     
    </Box>
  )

}

export default App;
