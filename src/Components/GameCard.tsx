 
import { Game } from '../hooks/useGame'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatrformIconList from './PlatrformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../Services/image-url'
interface Props {
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
   <Card>
    <Image src={getCroppedImageUrl(game.background_image)}></Image>
    <CardBody>
        
        <HStack justifyContent='space-between' marginBottom={3}>
        <PlatrformIconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatrformIconList>
        <CriticScore score={game.metacritic}></CriticScore>

        </HStack>
        <Heading fontSize='2xl'>{game.name}</Heading>
        
    </CardBody>
   </Card>
  )
}

export default GameCard