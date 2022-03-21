import { Route, Routes } from "react-router-dom";
import routes from "../constants/routes";
import Dashboard from "../screens/dashboard";
import MarketPlace from "../screens/marketplace";
import LunacianExpress from "../screens/lunacian-express";
import PageNotFound from "../screens/page-not-found";
import TitleBar from "../components/title-bar";
import { setWindowWidth } from '../redux/actions/app';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AppIndexRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('resize', () => dispatch(setWindowWidth(window.innerWidth)))
        return () => window.removeEventListener('resize');
        //eslint-disable-next-line
    }, [])

    return (
        <Routes>
            <Route path="/" element={<TitleBar />}>
                <Route path={routes.dashboard} element={<Dashboard />} />
                <Route path={`${routes.marketplace}/*`} element={<MarketPlace />} />
                <Route path={routes.lunacianExpress} element={<LunacianExpress />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};

export default AppIndexRouter;