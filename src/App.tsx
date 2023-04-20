import { Box, Button, ButtonGroup, Flex, HStack, Show } from '@chakra-ui/react'
import {Grid,GridItem} from "@chakra-ui/react"
import Navbar from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformSeletor from './Components/PlatformSeletor'
import { Platform } from './hooks/useGame'
import SortSelector from './Components/SortSelector'
import SearchInput from './Components/SearchInput'
import GameHeading from './Components/GameHeading'
export interface GameQuery{
  genre:Genre | null;
  platform: Platform | null;
  sortOrder:string;
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
    <GridItem area='nav'  ><Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/></GridItem>
    
    <Show above='lg'>
     
    <GridItem area='aside' paddingX='9px'> 
      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})}></GenreList>
    </GridItem>

    </Show>
    
    <GridItem area='main' >
      <Box paddingLeft={2}>
      <GameHeading gameQuery={gameQuery}></GameHeading>
      <Flex   marginBottom={5}>
        <Box marginRight={5}>
      <PlatformSeletor selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}></PlatformSeletor>
      </Box>
      <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
      </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>






  </Grid>
  
}

export default App
