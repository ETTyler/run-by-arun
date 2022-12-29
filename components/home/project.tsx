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
import styles from "./Project.module.css";
import Image from 'next/image';
import jacketPic from '../../../images/jacket/1.jpg';
import { Key } from 'react';

//Ukiyo-e Style Jacket
const Project = ({project}) => {
  return (
    <>
    <Flex justifyContent={'center'} p={3}>
      <Box maxW='4xl' borderWidth='0px' borderRadius='lg' p='5'>
        <Heading as='h1' size='xl' textAlign='center' pb={5}>{project.name}</Heading>
      <Swiper
        navigation={true}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {project.images.map((image: string, index: Key) => (
          <SwiperSlide key={index}>
            <Image src={image} width={300} height={300} alt={''} className={styles.img}/>
          </SwiperSlide>
        ))}
        </Swiper>
      </Box>
    </Flex>
    </>
  )
}

export default Project;