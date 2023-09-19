import { Link } from 'react-router-dom';
import './NavBar.css'

import logo from './assets/navbar/logo.svg';
import arrow_right from './assets/navbar/arrow_right.svg';
import arrow_left from './assets/navbar/arrow_left.svg';
import search from './assets/navbar/search.svg';
import home from './assets/navbar/home.svg';
import organization from './assets/navbar/organization.svg';
import coordinator from './assets/navbar/coordinator.svg';
import assessments from './assets/navbar/assessments.svg';
import question_bank from './assets/navbar/question_bank.svg';
import upload_image from './assets/navbar/upload_image.svg';
import calendar from './assets/navbar/calendar.svg';
import faq_questions from './assets/navbar/faq_questions.svg';
import settings from './assets/navbar/settings.svg';
import avatar from './assets/navbar/avatar.svg';
import logout from './assets/navbar/logout.svg';

export default function NavBar({ isOpen, setIsOpen, children }) {

    const navContent = [
        { img: home, alt: 'Home', title: 'Home', link: '/home' },
        { img: organization, alt: 'Organization', title: 'Organization', link: '/organization' },
        { img: coordinator, alt: 'Coordinator', title: 'Coordinator', link: '/coordinator' },
        { img: assessments, alt: 'Assessments', title: 'Assessments', link: '/assessments' },
        { img: question_bank, alt: 'Question Bank', title: 'Question Bank', link: '/question_bank' },
        { img: upload_image, alt: 'Upload Image', title: 'Upload Image', link: '/upload_image' },
        { img: calendar, alt: 'Calendar', title: 'Calendar', link: '/calendar' },
        { img: faq_questions, alt: 'FAQ Questions', title: 'FAQ Questions', link: '/faq_questions' },
    ];

    const handleSetIsOpen = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }

    return (
        <div className='flex h-screen'>
            <nav className={`flex flex-col justify-between h-full bg-primaryBlue text-white ${!isOpen && "items-center"}`}>
                <div className='w-full'>
                    <div className={`h-[8vh] flex items-center gap-4 px-4 bg-secondaryBlue ${!isOpen && "justify-center"}`}>
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='h-10' />
                        </Link>
                        {isOpen && <p className='text-2xl font-semibold'>Sisyphus</p>}
                    </div>
                    <div className={`h-[70vh] flex flex-col gap-3 px-2 pt-4 overflow-y-auto ${!isOpen && "items-center"}`}>
                        <div className={`flex flex-col ${isOpen ? "gap-3" : "gap-6"}`}>
                            <button onClick={handleSetIsOpen} className={`flex w-full ${isOpen ? "justify-end" : " justify-center"}`}>
                                {isOpen ? (
                                    <img src={arrow_left} alt="Expand" className='h-4' />
                                ) : (
                                    <img src={arrow_right} alt="Expand" className='h-4' />
                                )}
                            </button>
                            <Link to='/expand'>
                                {isOpen ? (
                                    <input type="text" className='rounded-md py-1 px-2' placeholder={`Search`} />
                                ) : (
                                    <img src={search} alt="" />
                                )}
                            </Link>
                        </div>
                        {navContent.map((item, index) => (
                            <Link key={index} to={item.link} className='flex items-center gap-3 hover:bg-navBarHoverBlue py-2 px-2 rounded-md'>
                                <img src={item.img} alt={item.alt} className='h-5' />
                                {isOpen && <p>{item.title}</p>}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={`h-[22vh] flex flex-col justify-end pb-4 px-2 ${!isOpen ? "items-center gap-3" : "gap-1"}`}>
                    <div className='flex flex-col gap-2'>
                        <Link to='/settings' className='flex items-center gap-4 py-2 px-2 hover:bg-navBarHoverBlue rounded-md'>
                            <img src={settings} alt="Settings" className='h-5' />
                            {isOpen && <p>Settings</p>}
                        </Link>

                        <div className='bg-secondaryBlue h-[1.5px] w-full' />
                    </div>
                    <div className='flex justify-center gap-4'>
                        <Link to=''>
                            <img src={avatar} alt="Avatar" className={`${isOpen ? 'h-16' : 'h-10'}`} />
                        </Link>
                        {isOpen && (
                            <>
                                <div className='flex flex-col justify-center text-sm'>
                                    <p>Olivia Rhye</p>
                                    <p>olivia@untitledui.com</p>
                                </div>
                                <button className='h-8 mt-1'>
                                    <img src={logout} alt="Logout" className='h-full' />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav >
            {children}
        </div >
    );
}