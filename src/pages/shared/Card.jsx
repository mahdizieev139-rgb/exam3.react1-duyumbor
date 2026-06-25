import img1 from "../../assets/428x573 (3).png"
import img2 from "../../assets/428x573 (4).png"
import img3 from "../../assets/428x573 (5).png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';

export default function Card() {
    return (
        <>
            <div className="text-white flex flex-col sm:flex-row items-center w-[70%] mt-15! m-auto! justify-between">
                <p className="text-4xl sm:text-5xl">Latest projects</p>
                <div className="flex items-center gap-8 ">
                    <span className="hover:text-yellow-300">All</span>
                    <span className="hover:text-yellow-300">Building</span>
                    <span className="hover:text-yellow-300">Interior</span>
                    <p>View all projects</p>
                </div>
            </div><br /><br />

            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true, marginTop: "50px!" }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-[95%]"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img1} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Villas</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img2} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Dubai</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img3} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Houses</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img1} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Villas</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img2} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Dubai</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group text-black">
                        <img src={img3} alt="" className="w-full h-full" />
                        <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h3 className="font-bold text-3xl mb-10!">Houses</h3>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit.
                                <br /> Consequat molestie integer
                                <br /> aliquam consectetur. Faucibus <br /> vitae dui massa tellus magna <br /> sit.
                            </p>
                            <button className="absolute bottom-10 left-5 font-bold"> See project →</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
