import {
  Box,
  Flex,
  Spacer,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Show,
  Hide,
  Center,
  Divider,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Title = () => {

  return (
    <>
    <Flex direction={'column'} px={4}>
      <Stack spacing={3} align={'center'}>
        <Divider borderWidth={2} borderColor={'white'}/>
        <Text textStyle='h1' fontSize={{ base: '6xl', md: '8xl', lg: '25vh'}} >
          <span style={{color: '#718096'}}>RUN</span><span style={{color:'#A0AEC0'}}>BY</span>ARUN
        </Text>
        <Text fontSize={{base: 'sm', md:'2xl'}} pb={2} >
          BASED IN MANCHESTER. AVAILABLE WORLDWIDE.
        </Text>
        <Divider borderWidth={2} borderColor={'white'}/>
      </Stack>
    </Flex>
    </>
  )
}

export default Title;