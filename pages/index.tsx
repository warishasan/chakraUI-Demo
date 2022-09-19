import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Spacer, Heading, Text, Box, Button, List, ListIcon, ListItem, Stack, Icon } from '@chakra-ui/react'

import { CheckCircleIcon as MdCheckCircle, CalendarIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {

  const listItems = [
    "International calling and messaging API",
    "Additional phone numbers",
    "Automated messages via Zapper",
    "24/7 support and consulting"
  ]

  return (
    <Flex direction={'column'} justifyContent={'start'} alignContent={'center'} alignItems={'center'} backgroundColor={'purple.600'} height={'96'}>
      <Heading as='h1' fontSize={['2xl', '3xl', '4xl', null, '5xl']} padding={'4'} textColor={'white'} marginX='2' mt={'10'}>
        Simple Pricing for your Business
      </Heading>

      <Text fontSize={['sm', 'lg', null, null, null]} textColor={'white'} marginX='2'>Plans that are actually crafted to suit your business.</Text>

      <Flex direction={'column'} position={'absolute'} top={'65%'} justifyContent={'start'} alignContent={'center'} alignItems={'center'} width={['90%', null, null, '70%']}>
      <Flex direction={'row'}  rounded={'md'} overflow='hidden'  flexWrap='wrap' shadow={'md'}>
        <Flex backgroundColor={'purple.200'} px={'5'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'center'} flex={1.5} py='3' >
          <Text fontSize='xl' width={'full'} fontWeight={'bold'} textAlign='center' >Premium PRO</Text>
          <Text fontSize='5xl' width={'full'} fontWeight={'bold'} textAlign='center' >$329</Text>
          <Text fontSize='sm' width={'full'} textAlign='center' marginTop={'-1.5'} >Billed just once</Text>
          <Button backgroundColor={'purple.500'} w='40' textColor={'white'} marginTop='4' >Get Started</Button>

        </Flex>

        <Flex backgroundColor={'white'} width={'100%'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'} alignItems={'start'} flex={3.5} minW='60' px='5' py='3'>
          <Text fontSize={['md', null, 'lg']} textAlign='left' mb='3' >Access these features when you get this pricing package for your business</Text>

          <List spacing={3}>

            {listItems.map((val, ind) =>

              <ListItem>
                <ListIcon key={ind} as={MdCheckCircle} color='purple.500' />
                {val}
              </ListItem>
            )}

          </List>

        </Flex>

      </Flex>

      <Stack direction={['column',null,null, 'row']} spacing='50' my='10' justify ='center' align='start' w='full'  >
        <Stack direction={['row']} spacing='4' justify ='center' align='center' maxW= {['full',null,null,'250']}>
        <Icon w='10' h='10'  as={CalendarIcon} />
        <Text fontSize={['md']} textAlign='left' >30 days money back guarantee</Text>
        </Stack>
        <Stack direction={['row']} spacing='4' justify ='center' align='center'  maxW= {['full',null,null,'250']}>
        <Icon w='10' h='10'  as={CalendarIcon} />
        <Text fontSize={['md']} textAlign='left' >No setup fee. 100% hassle-free</Text>
        </Stack>
        <Stack direction={['row']} spacing='4' justify ='center' align='center'  maxW= {['full',null,null,'250']}>
        <Icon w='10' h='10'  as={CalendarIcon} />
        <Text fontSize={['md']} textAlign='left' >No monthly subscription. Pay once and for all</Text>
        </Stack>
      </Stack>
      </Flex>
    </Flex>
  )
}

export default Home
