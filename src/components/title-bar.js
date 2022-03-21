import { Link, Outlet, useNavigate } from 'react-router-dom';
import images from '../constants/images';
import routes from '../constants/routes';
import { useLocation } from 'react-router-dom'
import { RiDashboardFill } from 'react-icons/ri';
import { IoTicketSharp } from 'react-icons/io5';
import { GiShop, GiHamburgerMenu } from 'react-icons/gi';
import '../styles/title-bar.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Tab = ({ name, isActive, route, icon }) => (
    <Link to={route} className={`mx-1 px-3 tab-container ${isActive ? 'tab-bar-container-active' : ''}`}>
        {icon}
        {name}
    </Link>
);

const CollapsibleMenuTab = ({ name, isActive, icon, onClick }) => (
    <div onClick={onClick} className='mx-3 my-3 d-flex align-items-center' style={{ color: isActive ? '#046cfc' : '#fff' }}>
        {icon}
        {name}
    </div>
);

const TitleBar = () => {

    const { pathname } = useLocation();
    const { isMobileDevice } = useSelector(state => state.appDetails);
    const navigate = useNavigate();

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    return (
        <div className='page-container'>
            <div id="mySidebar" className="sidebar">
                <div className="closebtn" onClick={closeNav}>×</div>
                <CollapsibleMenuTab icon={<RiDashboardFill size={16} className='mx-2' />} onClick={() => {navigate(`/${routes.dashboard}`); closeNav()}} name='Dashboard' isActive={pathname === `/${routes.dashboard}`} />
                <CollapsibleMenuTab icon={<GiShop size={16} className='mx-2' />} onClick={() => {navigate(`/${routes.marketplace}/${routes.axies}`); closeNav()}} name='Marketplace' isActive={pathname.includes(`/${routes.marketplace}`)} />
                <CollapsibleMenuTab icon={<IoTicketSharp size={16} className='mx-2' />} onClick={() => {navigate(`/${routes.lunacianExpress}`); closeNav()}} name='Lunacian Express' isActive={pathname === `/${routes.lunacianExpress}`} />
            </div>
            <div className='title-bar-container'>
                <img src={images.logo} className='my-2 mx-2 logo' alt='logo' />
                {
                    isMobileDevice ?
                        <div onClick={openNav} className='d-flex justify-content-center align-items-center px-2' >
                            <GiHamburgerMenu size={20} color='#fff' />
                        </div>
                        :
                        <>
                            <Tab icon={<RiDashboardFill size={16} className='mx-2' />} route={`/${routes.dashboard}`} name='Dashboard' isActive={pathname === `/${routes.dashboard}`} />
                            <Tab icon={<GiShop size={16} className='mx-2' />} route={`/${routes.marketplace}/${routes.axies}`} name='Marketplace' isActive={pathname.includes(`/${routes.marketplace}`)} />
                            <Tab icon={<IoTicketSharp size={16} className='mx-2' />} route={`/${routes.lunacianExpress}`} name='Lunacian Express' isActive={pathname === `/${routes.lunacianExpress}`} />
                        </>
                }
            </div>
            <Outlet />
        </div>
    );
}

export default TitleBar;