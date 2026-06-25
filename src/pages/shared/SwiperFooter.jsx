import img4 from "../../assets/about10 1.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper/modules';

export default function SwiperFooter() {
    return (
        <>
            <Swiper
                modules={[Pagination]}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true}}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-[70%] mt-30!"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="relative w-[525px] m-auto mt-16 pt-12 px-6 pb-8 border border-[#fcd34d]/50 rounded-sm">
                        <div className="relative top-[-40px] bottom-[-50px] w-24 h-24 rounded-full border-2 border-[#fcd34d] overflow-hidden bg-[#333]">
                            <img src={img4} alt="Paul" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-6 right-6 text-[#fcd34d] text-8xl font-serif select-none leading-none">”</div>
                        <div className="space-y-2 mt-4">
                            <h3 className="text-white text-2xl font-bold tracking-wide">Paul</h3>
                            <p className="text-sm font-medium text-gray-400">Owner in <span className="text-[#fcd34d]">Paul.com</span> </p>
                            <p className="text-gray-400 text-sm md:text-base pt-4">
                                Projects for many large domestic and foreign corporations,
                                enterprises in many fields such as finance, banking, F&B,
                                education, communication.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[525px] m-auto mt-16 pt-12 px-6 pb-8 border border-[#fcd34d]/50 rounded-sm">
                        <div className="relative top-[-40px] bottom-[-50px] w-24 h-24 rounded-full border-2 border-[#fcd34d] overflow-hidden bg-[#333]">
                            <img src={img4} alt="Paul" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-6 right-6 text-[#fcd34d] text-8xl font-serif select-none leading-none">”</div>
                        <div className="space-y-2 mt-4">
                            <h3 className="text-white text-2xl font-bold tracking-wide">Paul</h3>
                            <p className="text-sm font-medium text-gray-400">Owner in <span className="text-[#fcd34d]">Paul.com</span> </p>
                            <p className="text-gray-400 text-sm md:text-base pt-4">
                                Projects for many large domestic and foreign corporations,
                                enterprises in many fields such as finance, banking, F&B,
                                education, communication.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[525px] m-auto mt-16 pt-12 px-6 pb-8 border border-[#fcd34d]/50 rounded-sm">
                        <div className="relative top-[-40px] bottom-[-50px] w-24 h-24 rounded-full border-2 border-[#fcd34d] overflow-hidden bg-[#333]">
                            <img src={img4} alt="Paul" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-6 right-6 text-[#fcd34d] text-8xl font-serif select-none leading-none">”</div>
                        <div className="space-y-2 mt-4">
                            <h3 className="text-white text-2xl font-bold tracking-wide">Paul</h3>
                            <p className="text-sm font-medium text-gray-400">Owner in <span className="text-[#fcd34d]">Paul.com</span> </p>
                            <p className="text-gray-400 text-sm md:text-base pt-4">
                                Projects for many large domestic and foreign corporations,
                                enterprises in many fields such as finance, banking, F&B,
                                education, communication.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                    
                <SwiperSlide>
                    <div className="relative w-[525px] m-auto mt-16 pt-12 px-6 pb-8 border border-[#fcd34d]/50 rounded-sm">
                        <div className="relative top-[-40px] bottom-[-50px] w-24 h-24 rounded-full border-2 border-[#fcd34d] overflow-hidden bg-[#333]">
                            <img src={img4} alt="Paul" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-6 right-6 text-[#fcd34d] text-8xl font-serif select-none leading-none">”</div>
                        <div className="space-y-2 mt-4">
                            <h3 className="text-white text-2xl font-bold tracking-wide">Paul</h3>
                            <p className="text-sm font-medium text-gray-400">Owner in <span className="text-[#fcd34d]">Paul.com</span> </p>
                            <p className="text-gray-400 text-sm md:text-base pt-4">
                                Projects for many large domestic and foreign corporations,
                                enterprises in many fields such as finance, banking, F&B,
                                education, communication.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative w-[525px] m-auto mt-16 pt-12 px-6 pb-8 border border-[#fcd34d]/50 rounded-sm">
                        <div className="relative top-[-40px] bottom-[-50px] w-24 h-24 rounded-full border-2 border-[#fcd34d] overflow-hidden bg-[#333]">
                            <img src={img4} alt="Paul" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-6 right-6 text-[#fcd34d] text-8xl font-serif select-none leading-none">”</div>
                        <div className="space-y-2 mt-4">
                            <h3 className="text-white text-2xl font-bold tracking-wide">Paul</h3>
                            <p className="text-sm font-medium text-gray-400">Owner in <span className="text-[#fcd34d]">Paul.com</span> </p>
                            <p className="text-gray-400 text-sm md:text-base pt-4">
                                Projects for many large domestic and foreign corporations,
                                enterprises in many fields such as finance, banking, F&B,
                                education, communication.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
