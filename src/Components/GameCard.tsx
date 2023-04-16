import React from 'react'
import { Game } from '../hooks/useGame'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatrformIconList from './PlatrformIconList'
import CriticScore from './CriticScore'
interface Props {
    game:Game
}

const GameCard = ({game}:Props) => {
  return (
   <Card borderRadius={10} overflow='hidden'>
    <Image src={game.background_image}></Image>
    <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <PlatrformIconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatrformIconList>
        <CriticScore score={game.metacritic}></CriticScore>

        </HStack>
        
    </CardBody>
   </Card>
  )
}

export default GameCard