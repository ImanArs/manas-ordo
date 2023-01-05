import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Archive.module.scss'

import Header from '../../components/header/Header'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ArchiveData } from '../../common/archiveData';



const Archive = () => {
    
	const [info, setInfo] = useState()
	const [slide, setSlide] = useState(1)
  const { t } = useTranslation()

  const getWindowSize = () => {
    if (window.innerWidth > 640) {
      setSlide(2);
    } else {
      setSlide(1)
    }
  }

  useEffect(() => {
    getWindowSize()
  })

  return (
    <>
      <Header setInfo={setInfo} info={info} />
      <div className="content">
        <div className={styles.archive}>
          <div>
            <h1>{t("archive.title")}</h1>
            <p>{t("archive.desc")}</p>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={slide}
            className={styles.Swiper}
          >
            {ArchiveData.map((item, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <img src={item} alt="archive" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Archive