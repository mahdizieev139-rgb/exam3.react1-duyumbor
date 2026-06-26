import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import { useState, useId } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import imgFirst from "../assets/Logo (7).png";
import ModalOfHeader from "../components/ModalOfHeader";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();

    const id = useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileBuyOpen, setIsMobileBuyOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <header className="text-white py-4 w-[95%] m-auto! relative z-50">
                <nav className="flex items-center w-[95%] m-auto justify-between">
                    <div className="list-none">
                        <NavLink to="/"><img src={imgFirst} alt="Logo" /></NavLink>
                    </div>
                    <ul className="hidden lg:flex items-center gap-5 list-none">
                        <li>
                            <div>
                                <Button sx={{ color: 'yellow' }} id={buttonId} aria-controls={open ? menuId : undefined} aria-haspopup="true" aria-expanded={open} onClick={handleClick}>
                                    {t('nav.buy')} <ArrowDropDownIcon sx={{ color: 'white' }} />
                                </Button>
                                <Menu id={menuId} anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <NavLink to="/categoryNumberOne" className="no-underline text-black"><MenuItem onClick={handleClose}>{t('nav.cat1')}</MenuItem></NavLink>
                                    <NavLink to="/apartmentsInDubai" className="no-underline text-black"><MenuItem onClick={handleClose}>{t('nav.apartments_dubai')}</MenuItem></NavLink>
                                    <NavLink className="no-underline text-black"><MenuItem onClick={handleClose}>{t('nav.cat25')}</MenuItem></NavLink>
                                </Menu>
                            </div>
                        </li>
                        <li><NavLink to="/blog" className="text-white no-underline">{t('nav.blog')}</NavLink></li>
                        <li className="cursor-pointer">{t('nav.about')}</li>
                        <li><NavLink to="/contact" className="text-white no-underline">{t('nav.contact')}</NavLink></li>
                    </ul>
                    <div className="hidden lg:flex items-center gap-15">
                        {/* <Button variant="contained" sx={{ backgroundColor: 'yellow', color: 'black', '&:hover': { backgroundColor: '#e6e600' } }}>Book a consultation</Button> */}
                        <ModalOfHeader/>
                        <div className="flex gap-2 cursor-pointer text-sm font-semibold">
                            <span onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? "text-yellow-300" : "hover:text-yellow-300 text-gray-500"}>EN</span>
                            <span onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? "text-yellow-300" : "hover:text-yellow-300 text-gray-500"}>RU</span>
                        </div>
                        <span className="text-sm font-medium">+7 (212) 674-25-10</span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden text-white hover:text-yellow-400 transition-colors"
                    >
                        <MenuIcon sx={{ fontSize: 32 }} />
                    </button>
                </nav>
                <div className={`fixed inset-0 bg-[#242424] z-50 p-6 flex flex-col justify-between transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div>
                        <div className="flex justify-between items-center mb-12">
                            <div className="border-l-2 border-yellow-400 pl-2">
                                <span className="font-bold text-lg tracking-wide block">DubaiRealty</span>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest block -mt-1">Real Estate</span>
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-yellow-400">
                                <CloseIcon sx={{ fontSize: 28 }} />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-6">
                            <div>
                                <button onClick={() => setIsMobileBuyOpen(!isMobileBuyOpen)} className="text-yellow-400 text-3xl font-bold uppercase tracking-wide flex items-center gap-2 bg-transparent border-none outline-none cursor-pointer">
                                    BUY
                                    <span className={`text-sm transition-transform duration-200 ${isMobileBuyOpen ? "rotate-180" : ""}`}>▲</span>
                                </button>
                                <div className={`flex flex-col space-y-3 pl-4 mt-3 transition-all overflow-hidden ${isMobileBuyOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <NavLink to="/categoryNumberOne" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 no-underline text-sm hover:text-white">{t('nav.cat1')}</NavLink>
                                    <NavLink to="/apartmentsInDubai" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 no-underline text-sm hover:text-white">{t('nav.apartments_dubai')}</NavLink>
                                    <span className="text-gray-300 text-sm">{t('nav.cat25')}</span>
                                </div>
                            </div>
                            <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline text-3xl font-bold uppercase tracking-wide hover:text-yellow-400">{t('nav.blog')}</NavLink>
                            <span onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl font-bold uppercase tracking-wide hover:text-yellow-400 cursor-pointer">{t('nav.about')}</span>
                            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-white no-underline text-3xl font-bold uppercase tracking-wide hover:text-yellow-400">{t('nav.contact')}</NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full space-y-6 mb-4">
                        <hr className="w-full border-gray-700" />
                        <Button variant="contained" fullWidth sx={{ backgroundColor: 'yellow', color: 'black', fontWeight: 'bold', py: 1.5, '&:hover': { backgroundColor: '#e6e600' } }}>
                            Book a consultation
                        </Button>
                        <span className="text-lg font-medium tracking-wide">+7 (212) 674-25-10</span>
                        <div className="flex gap-4 text-sm font-bold">
                            <span onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? "text-yellow-300 cursor-pointer" : "text-gray-500 cursor-pointer hover:text-white"}>EN</span>
                            <span onClick={() => changeLanguage('ru')} className={i18n.language === 'ru' ? "text-yellow-300 cursor-pointer" : "text-gray-500 cursor-pointer hover:text-white"}>RU</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
