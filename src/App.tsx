import { Button, ButtonGroup, Show } from '@chakra-ui/react'
import {Grid,GridItem} from "@chakra-ui/react"
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSeletor from './Components/PlatformSeletor'
import { Platform } from './hooks/useGame'
export interface GameQuery{
  genre:Genre | null;
  platform: Platform | null;
}


function App() {
  
  const [gameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery);
  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={{
    base:'1fr',
    lg:'200px 1fr'

  }}
  
  >
    <GridItem area='nav'  ><Navbar/></GridItem>
    
    <Show above='lg'>
     
    <GridItem area='aside' paddingX={5}>
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}></GenreList>
    </GridItem>

    </Show>
    
    <GridItem area='main' >
      <PlatformSeletor selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}></PlatformSeletor>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>






  </Grid>
  
}

export default App
