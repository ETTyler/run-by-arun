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
import jacketPic from '../../../images/jacket/1.jpg';

const Project = () => {

  return (
    <>
    <Flex justifyContent={'center'}>
      <Box maxW='4xl' borderWidth='1px' borderRadius='lg' p='5'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        >
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={jacketPic} width={300} height={300} alt={''} />
        </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
    </>
  )
}

export default Project;