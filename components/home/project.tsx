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
    <Flex justifyContent={'center'} p={2}>
    <Stack spacing={3} align='center'>
      <Box maxW='90vw' borderWidth='px' borderRadius='lg' p='3'>
        <Stack spacing={5}>
          <Text  align='center' fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}>{props.project.name} </Text>
          <Swiper
            navigation={true}
            grabCursor={true}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView='auto'
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
          <Stack spacing={5} justifyContent='center' align='center'>
          <Text fontSize={{ base: 'xs', md: 'lg', lg: '2xl' }} textAlign='center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sunt ex incidunt et quis pariatur consectetur ipsum, modi debitis nemo itaque culpa, doloremque praesentium est corrupti beatae facere exercitationem! Ab!
          </Text>
          <Button w={200} colorScheme='blue' size='lg'>See More</Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
    </Flex>
    </>
  )
}

export default Project;