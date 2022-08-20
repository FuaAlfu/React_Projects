import { useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation, EffectFade} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import styles from '../styles/Home.module.css';
export default function Home() {
    return (
      <div className={styles.container}>
        <Swiper
          modules={[
            Navigation,
            EffectFade
          ]}
          navigation
          effect
          speed={999}
          slidesPerView={1}
          loop
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.Swiperslide}>
             <img src="" alt="" />
          </SwiperSlide>
          {/*End of ..*/}
          <SwiperSlide className={styles.Swiperslide}>
             <img src="" alt="" />
          </SwiperSlide>
          {/*End of ..*/}
          <SwiperSlide className={styles.Swiperslide}>
             <img src="" alt="" />
          </SwiperSlide>
          {/*End of ..*/}
        </Swiper>
      </div>
    )
  }

