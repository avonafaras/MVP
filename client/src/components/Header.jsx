import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Header = ({handleClick}) => (
  <div className="header">
     <Button sx={{ position: "absolute",right: 0, top: 0, bgcolor: "#fff"}} onClick={handleClick} variant="outlined" color="secondary" startIcon={<FavoriteIcon />}>
        Favorite players
      </Button>
    <h1>Create your own ScoreBoard</h1>
    </div>
)


export default Header