"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../carousel.css';
import Image, { ImageProps } from "next/image";

export default function Carousel({ slides }: { slides: ImageProps[] }) {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                    <Image src={slide.src} alt={slide.alt} width={slide.width} height={slide.height} className="aspect-video w-full object-cover object-center" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
