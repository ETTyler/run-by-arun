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
    <Flex direction={'column'} px={2}>
      <Stack spacing={3} align={'center'} >
        <Divider borderWidth={2} borderColor={'black'}/>
        <Text fontSize={{ base: '5xl', md: '6xl', lg: '8xl' }} letterSpacing={'tighter'}>
          <b>RUN</b>BY<b>ARUN</b>
        </Text>
        <Divider borderWidth={2} borderColor={'black'}/>
        <Text as='b' fontSize={{base: 'md', md:'2xl'}}>
          Based in Manchester. Available Worldwide.
        </Text>
      </Stack>
    </Flex>
    </>
  )
}

export default Title;