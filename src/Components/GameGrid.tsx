
import { Text,SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';



const GameGrid = () => {
    const {data,error,isLoading}=useGames(); 
    const skeletons=[1,2,3,4,5,6,7,8,9,10]; 
   
    return(
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding='10px' spacing={10}>
            {isLoading && skeletons.map(skeleton=><GameCardContainer><GameCardSkeleton key={skeleton} /> </GameCardContainer>)}
            {data.map(game=>(
                <GameCardContainer>
                <GameCard key={game.id} game={game }/> </GameCardContainer>
            )
            )}
        </SimpleGrid>
        </>

    )
  
}

export default GameGrid