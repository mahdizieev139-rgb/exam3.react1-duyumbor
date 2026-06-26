import img2 from "./assets/Vector (2).png"
import img3 from "./assets/Vector (3).png"
import img4 from "./assets/youtube (1).png"
import img5 from "./assets/instagram.png"
import img6 from "./assets/Vector (4).png"
import { Outlet } from "react-router"
import img1 from "./assets/Logo (7).png"
import Button from "@mui/material/Button"
import Header from "./pages/Header"
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <hr className="mt-20! border-gray-400" />
      <footer className="w-[95%] m-auto! py-10">
        <img className="ml-[42%]!" src={img1} alt="" /><br />
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <div>
            <p>{t('footer.buy')}</p><br /><br />
            <p className="mb-3!">{t('footer.buy_links.apartment')}</p>
            <p className="mb-3!">{t('footer.buy_links.house')}</p>
            <p className="mb-3!">{t('footer.buy_links.apartments')}</p>
            <p className="mb-3!">{t('footer.buy_links.loft')}</p>
            <p className="mb-3!">{t('footer.buy_links.penthouse')}</p>
            <p>{t('footer.buy_links.villa')}</p>
          </div>
          <div>
            <p>{t('footer.services')}</p><br /><br />
            <p className="mb-3!">{t('footer.services_links.management')}</p>
            <p className="mb-3!">{t('footer.services_links.sell')}</p>
            <p className="mb-3!">{t('footer.services_links.rent')}</p>
            <p className="mb-3!">{t('footer.services_links.investments')}</p>
            <p className="mb-3!">{t('footer.services_links.crypto')}</p>
            <p>{t('footer.services_links.moving')}</p>
          </div>
          <div>
            <p>{t('footer.information')}</p><br /><br />
            <p className="mb-3!">{t('footer.info_links.video')}</p>
            <p className="mb-3!">{t('footer.info_links.house')}</p>
            <p className="mb-3!">{t('footer.info_links.podcasts')}</p>
            <p className="mb-3!">{t('footer.info_links.laws')}</p>
            <p className="mb-3!">{t('footer.info_links.qa')}</p>
            <p className="mb-3!">{t('footer.info_links.books')}</p>
            <p>{t('footer.info_links.articles')}</p>
          </div>
          <div>
            <p>{t('footer.about_company')}</p><br /><br />
            <p className="mb-3!">{t('footer.about_links.jobs')}</p>
            <p className="mb-3!">{t('footer.about_links.story')}</p>
            <p className="mb-3!">{t('footer.about_links.licenses')}</p>
            <p className="mb-3!">{t('footer.about_links.why')}</p>
            <p>{t('footer.about_links.agency')}</p>
          </div>
          <div>
            <p>{t('footer.contact')}</p><br /><br />
            <p className="mb-3!">964 Worthington Drive <br /> Dubai, UAE</p>
            <p>dubairealty@mail.com</p><br /><br />
            <Button variant="contained" sx={{ backgroundColor: 'yellow', color: 'black' }}>{t('footer.book_consultation')}</Button>
          </div>
        </div>
      </footer><hr className="border-gray-400" />
      <div className="flex items-center justify-between mt-8!">
        <p>{t('footer.copyright')}</p>
        <div className="flex items-center gap-5">
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
      </div>
    </>
  )
}
