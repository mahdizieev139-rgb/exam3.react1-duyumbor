import { Button } from "@mui/material";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative w-[95%] h-[520px] mb-30! m-auto! mt-10!">
        <YMaps>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            width="100%"
            height="520px"
          />
        </YMaps>
        <div className="absolute top-15 left-10 sm:left-70 bg-[#2c2c2c]/80  w-[300px] sm:w-[380px] p-10 text-white shadow-2xl">
          <h2 className="text-3xl font-bold"> Dubai, <span className="text-yellow-400">UAE</span></h2>
          <p className="text-gray-400 text-sm mt-6! leading-6">
            {t('contact.address')}
          </p>
          <h3 className="text-xl font-bold mt-5!">+99 (0) 344 956 4050</h3>
          <div className="mt-5! space-y-6">
            <div><p className="font-semibold text-sm">{t('contact.email')}</p><p className="text-gray-400 text-sm">{t('contact.email_value')}</p></div><br />
            <div><p className="font-semibold text-sm">{t('contact.follow')}</p></div><br />
            <div><p className="font-semibold text-sm">{t('contact.work_hours')}</p><p className="text-gray-400 text-sm">{t('contact.work_hours_value')}</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-5xl font-bold w-[70%] m-auto! mb-20!"><span className="text-yellow-400">{t('contact.be_in_touch')}</span> <br/> {t('contact.with_us')}</p>

      <div className="w-[70%] m-auto!">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <input className="border border-gray-400 px-5 py-4 w-[300px]" type="text" placeholder={t('contact.name_ph')}/>
          <input className="border border-gray-400 px-5 py-4 w-[300px]" type="text" placeholder={t('contact.email_ph')}/>
          <input className="border border-gray-400 px-5 py-4 w-[300px]" type="text" placeholder={t('contact.subject_ph')}/>
        </div><br />
        <textarea className="border border-gray-400 px-5 py-4 w-[100%] sm:w-[88.2%]" cols="10" rows="10" placeholder={t('contact.message_ph')}></textarea><br /><br />
        <Button variant="contained" size="large" sx={{color:"black", backgroundColor:'#FCD54C', padding:'10px 40px', }}>{t('contact.submit')}</Button>
      </div>
    </>
  )
}
