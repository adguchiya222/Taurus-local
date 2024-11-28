import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import KeyIcon from '@mui/icons-material/Key';

function Navbar() {
  return (
    <div>
      
   <AppBar position='static' >
<Toolbar>


    <Typography variant='h6' flexGrow={1}>

OpExpert

    </Typography>

    <Button  variant="fill" color='inherint'  endIcon={<KeyIcon/>}>Login</Button>
    </Toolbar>
 
    </AppBar> 
    </div>
  )
}

export default Navbar
