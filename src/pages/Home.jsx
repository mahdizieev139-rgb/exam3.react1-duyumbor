import img1 from "../assets/shutterstock_1319580020 1.png"
import img2 from "../assets/placeholder (3).png"
import img3 from "../assets/9b3f1bcf4b1d53a45df0ba8927669d4f4eba34e7.png"
import Card from "./shared/Card"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import CardFooter from "./shared/CardFooter";
import SwiperFooter from "./shared/SwiperFooter";
import Accordions from "./shared/Accordions";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };
  return (
    <>
      <div className="mt-10!" style={{ backgroundImage: `url(${img1})`, margin: '0 auto', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100%' }}>
        <div className="relative z-10 flex flex-col justify-center min-h-screen pl-2 md:pl-24 max-w-2xl">
          <div className=" border-l-2 border-t-2 border-b-2 border-yellow-300/70 p-8 pt-12 pb-12 relative">
            <span className="text-xs tracking-widest uppercase opacity-60 block mb-2">Lorem Ipsum</span>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('home.welcome')} <br />
              <span className="text-yellow-400">{t('home.to')}</span> {t('home.luxury')}
            </h1>
            <a href="#" className="inline-block mt-6 text-sm font-semibold tracking-wider hover:text-yellow-400 transition-colors">
              {t('home.book_consultation')} &rarr;
            </a>
          </div>

          <div className="mt-6 flex gap-4 text-xs font-bold tracking-widest opacity-80">
            <button className="hover:text-yellow-400">{t('home.prev')}</button>
            <span>|</span>
            <button className="hover:text-yellow-400">{t('home.next')}</button>
          </div>
        </div>

        <div className="absolute bottom-0 top-130 mt-38! sm:mt-45! right-0 left-0 md:left-auto md:w-3/6 bg-black z-10 grid grid-cols-3 p-12  gap-4 border-t border-neutral-800">
          <div className="flex items-start gap-3">
            <span className="text-3xl font-bold text-yellow-400">01</span>
            <div>
              <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
              <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl font-bold text-white">02</span>
            <div>
              <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
              <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-3xl font-bold text-white">03</span>
            <div>
              <h4 className="text-sm font-semibold">Lorem Ipsum</h4>
              <p className="text-xs text-gray-400 mt-1">Dolorem apset</p>
            </div>
          </div>
        </div>
      </div>

      <Card />

      <div className="mt-20! ml-5! sm:ml-[30%]!">
        <p className="text-yellow-500">{t('home.our_expertise')}</p><br />
        <p className="text-4xl sm:text-6xl font-medium">{t('home.best_apartment')}</p><br />
        <p className="w-[350px] sm:w-[600px]">{t('home.desc1')}</p>
      </div><br /><br /><br />


      <div className="w-full text-white font-sans">
        <div className="relative w-full h-screen overflow-hidden">
          {!showVideo && (
            <>
              <img
                src="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=80"
                alt="City"
                className="w-[95%] m-auto! h-full "
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <IconButton
                  onClick={handlePlay}
                  sx={{
                    color: "#f1c40f",
                    fontSize: { xs: 70, sm: 100 },
                    transition: "transform 0.2s",
                    "hover": { transform: "scale(1.1)", color: "#f39c12" }
                  }}
                >
                  <PlayCircleFilledWhiteIcon fontSize="inherit" />
                </IconButton>
              </div>
            </>
          )}
          {showVideo && (
            <iframe
              className="w-full h-full object-cover border-none"
              src="https://www.youtube.com/embed/ysjl6A6eNcY?autoplay=1&mute=0&loop=1&playlist=ysjl6A6eNcY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <div className="w-[300px] sm:w-[750px] m-auto! my-12! p-8 md:p-14 border border-[#fcd34d]/40 rounded-sm">
        <p className="text-white text-base md:text-xl font-normal leading-relaxed tracking-wide text-left">
          {t('home.quote')}
          <span className="text-[#fcd34d] ml-2 font-medium">
            {t('home.mary')}
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 justify-center ml-5! sm:ml-0!">
        <div>
          <img className="w-[350px] sm:w-[550px]" src={img2} alt="" /><br />
          <p className="w-[350px] sm:w-[550px]">{t('home.desc2')}</p>
        </div>
        <div>
          <img className="w-[350px] sm:w-[550px]" src={img2} alt="" /><br />
          <p className="w-[350px] sm:w-[550px]">{t('home.desc2')}</p>
        </div>
      </div><br /><br />

      <div style={{
        backgroundImage: `url(${img3})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '95%',
        height: '400px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className="relative pt-20! z-100 w-[70000%] text-center h-[400px] sm:h-[400px] bg-yellow-500/80">
          <p className='w-[300px] sm:w-[700px] font-medium m-auto! text-black'>{t('home.questions')}</p>
          <h1 className='w-[300px] sm:w-[700px] m-auto! text-6xl sm:text-8xl font-bold text-black'>{t('home.contact_us')}</h1><br />
          <div>
            <input type="text" className="bg-white text-black py-5 px-5 w-[370px]" placeholder={t('home.enter_mail')} />
            <Button variant="contained" sx={{ backgroundColor: 'black', py: 2.5, marginTop: '-5px', px: 5 }}>{t('home.send')}</Button>
          </div>
        </div>
      </div><br /><br /><br />

      <div className='flex flex-col sm:flex-row items-center justify-between w-[100%] sm:w-[50%] m-auto!'>
        <p className="text-5xl">{t('home.useful_articles')}</p>
        <p>{t('home.view_all')} <ArrowForwardIosIcon /></p>
      </div>

      <CardFooter />
      <SwiperFooter/><br /><br /><br />
      <Accordions />

    </>
  )
}
