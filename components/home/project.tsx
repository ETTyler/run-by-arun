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

interface Project {
  name: string;
  images: string[];
}

const Project = (props: {project: Project}) => {
  return (
    <>
    <Flex justifyContent={'center'} p={3}>
    <Stack spacing={3} align='center'>
      <Box maxW='80vw' borderWidth='0px' borderRadius='lg' p='3' align='center'>
        <Stack spacing={5}>
          <Text as='b' fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>{props.project.name} </Text>
          <Swiper
            navigation={true}
            grabCursor={true}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={5}
            loop={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20
              },    
              // when window width is >= 640px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30
              },
              1440: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1920: {
                slidesPerView: 6,
                spaceBetween: 20
              }
            }}
            modules={[Navigation]}
          >
            {props.project.images.map((image: string, index: Key) => (
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