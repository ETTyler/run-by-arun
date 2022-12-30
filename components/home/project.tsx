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
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";
import Image from 'next/image';
import { Key } from 'react';

//Ukiyo-e Style Jacket
const Project = ({project}) => {
  return (
    <>
    <Flex justifyContent={'center'} p={3}>
    <Stack spacing={3} align='center'>
      <Box maxW='8xl' borderWidth='0px' borderRadius='lg' p='3' align='center'>
        <Stack spacing={5}>
          <Text as='b' fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>{project.name} </Text>
          <Swiper
            navigation={true}
            grabCursor={true}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={5}
            loop={true}
            modules={[Navigation]}
          >
            {project.images.map((image: string, index: Key) => (
              <SwiperSlide key={index}>
                <Image src={image} width={300} height={300} alt={''}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Box>
      <Button w={200} colorScheme='blue'  size='lg'>See More</Button>
    </Stack>
    </Flex>
    </>
  )
}

export default Project;