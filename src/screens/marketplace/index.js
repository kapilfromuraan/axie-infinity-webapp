import { Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';
import Axies from './axies';
import Land from './land';
import Items from './items';
import Bundles from './bundles';
import '../../styles/marketplace.css'
import PageNotFound from '../page-not-found';
import images from '../../constants/images';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {toggleFilter} from '../../redux/actions/app';
import AxieDetails from './axies/details';

const Tab = ({ name, isActive, route, image }) => {
    return (
        <Link to={route} className={`marketplace-tab-bar px-3 py-3 ${isActive ? 'marketplace-tab-bar-active' : ''}`}>
            <img style={{ marginRight: '14px' }} width='24px' src={image} alt='sasdas' />
            {name}
        </Link>
    );
}

const HeaderBar = () => {

    const { pathname } = useLocation();
    const [showDropDown, setShowDropDown] = useState(false);
    const [activeTab, setActiveTab] = useState('Axies')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isMobileDevice } = useSelector(state => state.appDetails);

    return isMobileDevice ?
        <div>
            <div className='d-flex flex-row align-items-start justify-content-between py-2 px-2' style={{ borderBottom: '1px solid #242735' }}>
                <div className="dropdown">
                    <button onClick={() => setShowDropDown(!showDropDown)} className="btn btn-sm btn-secondary dropdown-toggle" type="button" >
                        {activeTab}
                    </button>
                    <div className={`dropdown-menu${showDropDown ? '-show' : ''}`}>
                        <div onClick={() => { setShowDropDown(false); setActiveTab('Axies'); navigate(routes.axies) }} style={{ color: '#fff' }} className="dropdown-item">Axies</div>
                        <div onClick={() => { setShowDropDown(false); setActiveTab('Land'); navigate(routes.land) }} style={{ color: '#fff' }} className="dropdown-item">Land </div>
                        <div onClick={() => { setShowDropDown(false); setActiveTab('Items'); navigate(routes.items) }} style={{ color: '#fff' }} className="dropdown-item">Items</div>
                        <div onClick={() => { setShowDropDown(false); setActiveTab('Bundles'); navigate(routes.bundles) }} style={{ color: '#fff' }} className="dropdown-item">Bundles</div>
                    </div>
                </div>
                <button onClick={() => dispatch(toggleFilter()) } className="btn btn-sm btn-primary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filters
                </button>
            </div>
            <Outlet />
        </div>
        : (
            <div className='marketplace-container'>
                <div className="marketplace-tabbar-container">
                    <Tab image={images.tabAxie} route={routes.axies} name='Axies' isActive={pathname.includes(routes.axies)} />
                    <Tab image={images.tabLand} route={routes.land} name='Land' isActive={pathname.includes(routes.land)} />
                    <Tab image={images.tabItem} route={routes.items} name='Items' isActive={pathname.includes(routes.items)} />
                    <Tab image={images.tabBundle} route={routes.bundles} name='Bundles' isActive={pathname.includes(routes.bundles)} />
                </div>
                <Outlet />
            </div>
        );
};

const MarketPlace = () => {
    return (
        <Routes>
            <Route path="/" element={<HeaderBar />}>
                <Route path={routes.axies} element={<Axies />} />
                <Route path={`${routes.axies}/:id`} element={<AxieDetails />} />
                <Route path={routes.land} element={<Land />} />
                <Route path={routes.items} element={<Items />} />
                <Route path={routes.bundles} element={<Bundles />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default MarketPlace;