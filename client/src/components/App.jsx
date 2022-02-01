import React, { useState, useEffect, Suspense } from 'react';
import AllPlayersList from './AllPlayersList.jsx';
import TopPlayers from './TopPlayers.jsx';
import Header from './Header.jsx'
import axios from 'axios';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import MyCabinet from './MyCabinet.jsx';
import MainList from './MainList.jsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {

  const [isClicked, setClicked] = useState(false);
  const [playersIdsList, setPlayersIdsList] = useState([])


  const handleClick = () => {
    setClicked(!isClicked);
  }



  const theme = createTheme({
    typography: {
      fontFamily: 'Bebas Neue, cursive',
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f77f00',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    // palette: {
    //   pri: '#f77f00',
    // },
    components: {
      // Name of the component

      MuiCardMedia: {
        styleOverrides: {
          // Name of the slot
          root: {


          },
        },
      },
    },
  });

    return(
      <ThemeProvider theme={theme}>
      <div>
        <Stack direction="row" spacing={2}>

      </Stack>
        <Header handleClick={handleClick} />
        {isClicked ? <MyCabinet /> :
        <>
        <AllPlayersList playersIdsList={playersIdsList} setPlayersIdsList={setPlayersIdsList} />
        <MainList playersIdsList={playersIdsList}/>
        <TopPlayers/>
        </> }
      </div>
        </ThemeProvider>

    )

  }


  export default App;