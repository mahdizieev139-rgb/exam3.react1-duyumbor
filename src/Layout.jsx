import img2 from "./assets/Vector (2).png"
import img3 from "./assets/Vector (3).png"
import img4 from "./assets/youtube (1).png"
import img5 from "./assets/instagram.png"
import img6 from "./assets/Vector (4).png"
import { Outlet } from "react-router"
import img1 from "./assets/Logo (7).png"
import Button from "@mui/material/Button"
import Header from "./pages/Header"

export default function Layout() {
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
            <p>Buy</p><br /><br />
            <p className="mb-3!">Apartment in Dubai</p>
            <p className="mb-3!">House in Dubai</p>
            <p className="mb-3!">Apartments in Dubai</p>
            <p className="mb-3!">Loft in Dubai</p>
            <p className="mb-3!">Penthouse in Dubai</p>
            <p>Villa in Dubai</p>
          </div>
          <div>
            <p>Services</p><br /><br />
            <p className="mb-3!">Property management in Dubai, UAE</p>
            <p className="mb-3!">Sell property in Dubai, UAE</p>
            <p className="mb-3!">Rent property in Dubai, UAE</p>
            <p className="mb-3!">Investments in Dubai, UAE</p>
            <p className="mb-3!">Real estate for cryptocurrency in Dubai</p>
            <p>Moving to Dubai, UAE</p>
          </div>
          <div>
            <p>Information</p><br /><br />
            <p className="mb-3!">Video</p>
            <p className="mb-3!">House in Dubai</p>
            <p className="mb-3!">Podcasts</p>
            <p className="mb-3!">Laws</p>
            <p className="mb-3!">Questions and answers</p>
            <p className="mb-3!">Books</p>
            <p>Articles</p>
          </div>
          <div>
            <p>About company</p><br /><br />
            <p className="mb-3!">Jobs</p>
            <p className="mb-3!">Story</p>
            <p className="mb-3!">Licenses</p>
            <p className="mb-3!">Why are we</p>
            <p>Real estate agency</p>
          </div>
          <div>
            <p>Contact</p><br /><br />
            <p className="mb-3!">964 Worthington Drive <br /> Dubai, UAE</p>
            <p>dubairealty@mail.com</p><br /><br />
            <Button variant="contained" sx={{ backgroundColor: 'yellow', color: 'black' }}>Book a consultation</Button>
          </div>
        </div>
      </footer><hr className="border-gray-400" />
      <div className="flex items-center justify-between mt-8!">
        <p>Copyright © 2022 Dubai Realty</p>
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
