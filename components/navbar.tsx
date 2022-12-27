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
  Center
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react'

const Links = ['Home', 'Shop', 'About']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
)

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={40} alignItems={'center'} padding={8} >
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
          <IconButton 

            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
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