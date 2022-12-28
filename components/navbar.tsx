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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex h={32} alignItems={'center'} px={10} >
          <Show above="md">
          <Link href={'/'}>
            <Heading as={'h1'} size={'3xl'} letterSpacing={'tighter'}>
              Home
            </Heading>
          </Link>
          <Spacer />
          <Link href={'/store'}>
            <Heading as={'h1'} size={'3xl'} letterSpacing={'tighter'}>
              Store
            </Heading>
          </Link>
          <Spacer />
          <Link href={'/about'}>
            <Heading as={'h1'} size={'3xl'} letterSpacing={'tighter'}>
              About
            </Heading>
          </Link> 
          </Show>
          <Hide above="md">
          <Spacer />
          <IconButton 
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          </Hide>
        </Flex>

        {isOpen ? (
          <Box pb={4} justifyContent={'center'}>
            <Stack as={'nav'} spacing={5} justify={'center'}>
              <Center>
              <Link href={'/'}>
                <Heading as={'h1'} size={'xl'} letterSpacing={'tighter'}>
                  Home
                </Heading>
              </Link>
              </Center>
              <Center>
              <Link href={'/store'}>
                <Heading as={'h1'} size={'xl'} letterSpacing={'tighter'}>
                  Store
                </Heading>
              </Link>
              </Center>
              <Center>
              <Link href={'/about'}>
                <Heading as={'h1'} size={'xl'} letterSpacing={'tighter'}>
                  About
                </Heading>
              </Link>
              </Center>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar;