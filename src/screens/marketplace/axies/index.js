import './axies.css';
import AxiesFilter from './axies-filter';
import { AiOutlineHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { BsGridFill, BsListUl } from 'react-icons/bs';
import { GoChevronDown } from 'react-icons/go';
import { useEffect, useState } from 'react';
import axiesDummyData from '../../../constants/axies-dummy-data';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import routes from '../../../constants/routes';

const AxiesCard = ({ axie }) => {

    const { isMobileDevice } = useSelector(state => state.appDetails)
    const navigate = useNavigate();

    return isMobileDevice ?
        <div onClick={() => navigate(axie.id, { state: axie })} style={{ border: '1px solid #3a3f50', marginBottom: '20px', borderRadius: '6px' }}>
            <div className='d-flex flex-row align-items-center'>
                <img width='150px' src={axie.image} alt='axies' />
                <div>
                    <div className='d-flex px-3' style={{ backgroundColor: axie.color, textAlign: 'center', borderRadius: '5px', textOverflow: 'ellipsis' }}>{axie.id}</div>
                    <div style={{ color: '#fff', fontSize: '12px', marginTop: '5px' }}>{`Axie ${axie.id}`}</div>
                    <div style={{ fontSize: '12px', color: 'grey' }}>{`Breed count: ${axie.breed_count}`}</div>
                </div>
            </div>
            <div className='d-flex flex-row align-items-center justify-content-between px-5 py-3 flex-wrap'>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop1}</div>
                    <div>{axie.prop2}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop3}</div>
                    <div>{axie.prop4}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop5}</div>
                    <div>{axie.prop6}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.some_number}</div>
                    <div>{`$${axie.price}`}</div>
                </div>
            </div>
        </div>
        :
        (
            <div onClick={() => navigate(axie.id, { state: axie })} className={`d-flex flex-row align-items-center justify-content-between px-5 `} style={{ border: '1px solid #3a3f50', marginBottom: '20px', borderRadius: '6px', flexGrow: 1 }}>
                <img width='150px' src={axie.image} alt='axies' />
                <div style={{ color: '#fff' }}>
                    <div className='px-3' style={{ backgroundColor: axie.color, textAlign: 'center', borderRadius: '5px' }}>{axie.id}</div>
                    <div style={{ fontSize: '12px', marginTop: '5px' }}>{`Axie ${axie.id}`}</div>
                    <div style={{ fontSize: '12px', color: 'grey' }}>{`Breed count: ${axie.breed_count}`}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop1}</div>
                    <div>{axie.prop2}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop3}</div>
                    <div>{axie.prop4}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.prop5}</div>
                    <div>{axie.prop6}</div>
                </div>
                <div style={{ color: '#fff' }}>
                    <div>{axie.some_number}</div>
                    <div>{`$${axie.price}`}</div>
                </div>
            </div>
        );
};

const AxiesGridCard = ({ axie }) => {
    const { isMobileDevice } = useSelector(state => state.appDetails)
    const navigate = useNavigate();


    return isMobileDevice ?
        <div onClick={() => navigate(axie.id, { state: axie })} className='m-2 px-4 py-2 d-flex align-self-stretch flex-column' style={{ border: '1px solid #3a3f50', borderRadius: '5px' }}>
            <span className='px-2' style={{ backgroundColor: axie.color, borderRadius: '5px' }}>{axie.id}</span>
            <div style={{ color: '#fff', fontSize: '12px', marginTop: '5px' }}>{`Axie ${axie.id}`}</div>
            <div style={{ fontSize: '12px', color: 'grey' }}>{`Breed count: ${axie.breed_count}`}</div>
            <div className='d-flex justify-content-center'>
                <img width='150px' src={axie.image} alt='axies' />
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ color: '#fff', marginRight: '20px', fontSize: '20px' }}>{axie.some_number}</div>
                <div style={{ color: '#fff' }}>{`$${axie.price}`}</div>
            </div>
        </div>
        : (
            <div onClick={() => navigate(axie.id, { state: axie })} className='mx-2 my-2 p-3' style={{ width: '31%', border: '1px solid #3a3f50', borderRadius: '5px' }}>
                <span className='px-2' style={{ backgroundColor: axie.color, borderRadius: '5px' }}>{axie.id}</span>
                <div style={{ color: '#fff', fontSize: '12px', marginTop: '5px' }}>{`Axie ${axie.id}`}</div>
                <div style={{ fontSize: '12px', color: 'grey' }}>{`Breed count: ${axie.breed_count}`}</div>
                <div className='d-flex justify-content-center'>
                    <img width='150px' src={axie.image} alt='axies' />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div style={{ color: '#fff', marginRight: '20px', fontSize: '20px' }}>{axie.some_number}</div>
                    <div style={{ color: '#fff' }}>{`$${axie.price}`}</div>
                </div>
            </div>
        );
}

const Pagination = ({ page, setPage }) => {

    const pageString = page.split('e')[1]
    const [text, setText] = useState(pageString)

    useEffect(() => {
        if (text > 0 && text < 4) setPage(`page${text}`)
    }, [text])

    useEffect(() => {
        setText(pageString)
    }, [pageString])

    const handleChange = (e) => {
        if (e.target.value < 4)
            setText(e.target.value)
    }

    return (
        <div className='d-flex flex-row justify-content-center align-items-center' style={{ color: 'white' }}>
            <div onClick={() => pageString > 1 ? setPage(`page${parseInt(pageString) - 1}`) : null} className='px-3 py-1 justify-content-center align-items-center' style={{ border: '1px solid white', borderRadius: 6 }}>
                <AiOutlineArrowLeft color='white' size={23} />
            </div>
            <div className='mx-3' style={{ fontSize: '14px' }}>
                Page <input required value={text} onChange={(e) => e.target.value === '' || !isNaN(e.target.value) ? handleChange(e) : null} type='text' style={{ width: '40px', outline: 'none', backgroundColor: 'black', border: '0px', color: 'white' }} /> of 3
            </div>
            <div onClick={() => pageString < 3 ? setPage(`page${parseInt(pageString) + 1}`) : null} className='px-3 py-1 justify-content-center align-items-center' style={{ border: '1px solid white', borderRadius: 6 }}>
                <AiOutlineArrowRight color='white' size={23} />
            </div>
        </div>
    );
};

const Axies = () => {

    const [page, setPage] = useState('page1');
    const [axies, setAxies] = useState(axiesDummyData[page]);
    const [isListView, setListView] = useState(true);
    const [showDropDown, setShowDropDown] = useState(false);
    const [activeSort, setActiveSort] = useState({ label: 'Highest Price', value: 'high' });
    const [filters, setFilters] = useState({
        classes: [{ label: 'beast', selected: false }, { label: 'aquatic', selected: false }, { label: 'plant', selected: false }, { label: 'bug', selected: false }, { label: 'bird', selected: false }],
        breedCount: [0, 7],
        health: [0, 100],
        speed: [0, 100],
        skill: [0, 100],
        morale: [0, 100]
    })
    const { isMobileDevice, isFilterOpen } = useSelector(state => state.appDetails);

    useEffect(() => {
        let selectedFilters = filters.classes.filter(item => item.selected)
        selectedFilters = selectedFilters.map(item => item.label)

        //For Class
        let classWiseData = axiesDummyData[page].filter(item => {
            if (selectedFilters.includes(item.class)) return true
            else return false
        })

        //For Breed
        let breedWiseData = axiesDummyData[page].filter(item => item.breed_count >= filters.breedCount[0] && item.breed_count <= filters.breedCount[1])

        //For Health
        let healthWiseData = axiesDummyData[page].filter(item => item.health >= filters.health[0] && item.health <= filters.health[1])

        //For Speed
        let speedWiseData = axiesDummyData[page].filter(item => item.speed >= filters.speed[0] && item.speed <= filters.speed[1])

        //For Skills
        let skillWiseData = axiesDummyData[page].filter(item => item.skill >= filters.skill[0] && item.skill <= filters.skill[1])

        //For Morale
        let moraleWiseData = axiesDummyData[page].filter(item => item.morale >= filters.morale[0] && item.morale <= filters.morale[1])

        //For Egg
        let axieswhichAreEggs = axiesDummyData[page].filter(item => item.egg === filters.egg)

        //For Sale
        let axiesforSale = axiesDummyData[page].filter(item => item.for_sale === filters.for_sale)

        let final = [...classWiseData, ...breedWiseData, ...healthWiseData, ...speedWiseData, ...skillWiseData, ...moraleWiseData, ...axieswhichAreEggs, ...axiesforSale].filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i)

        let dataToShow = final.length ? final : axiesDummyData[page]
        dataToShow = dataToShow.sort((a, b) => a.price < b.price ? activeSort.value === 'high' ? 1 : -1 : activeSort.value === 'high' ? -1 : 1)
        setAxies(dataToShow)
    }, [filters, page, activeSort])

    return (
        <div className={`d-flex h-100 ${isMobileDevice ? 'flex-column' : ''}`}>
            {isMobileDevice ? isFilterOpen ? <AxiesFilter fullWidth filters={filters} updateFilter={setFilters} /> : null : <AxiesFilter filters={filters} updateFilter={setFilters} />}
            <div className='d-flex flex-column' style={{ width: isMobileDevice ? '100%' : 'calc(100% - 280px)' }}>
                <div className={`d-flex flex-row justify-content-between align-items-center ${isMobileDevice ? 'px-2' : 'p-4'}`} style={{ height: '100px' }}>
                    {isMobileDevice ? null : <div className='d-flex flex-row align-items-center'>
                        <div className='d-flex flex-row' style={{ fontSize: '28px', color: '#fff', marginRight: '15px' }}>{`${axies.length} Axies`}</div>
                        <AiOutlineHeart size={23} color='grey' />
                    </div>}
                    <div className={`d-flex flex-row align-items-center ${isMobileDevice ? 'justify-content-center': ''}`}>
                        <div className="dropdown mx-2">
                            <button onClick={() => setShowDropDown(!showDropDown)} className="px-3 py-2 btn btn-sm btn-secondary" style={{ backgroundColor: 'transparent' }} type="button" >
                                {activeSort.label}
                                <GoChevronDown style={{ marginLeft: '5px' }} size={20} color='#fff' />
                            </button>
                            <div style={{ position: 'absolute', backgroundColor: 'black', borderRadius: '6px' }} className={`px-2 dropdown-menu${showDropDown ? '-show' : ''}`}>
                                <div onClick={() => { setShowDropDown(false); setActiveSort({ label: 'Highest Price', value: 'high' }); }} style={{ color: '#fff', fontSize: '14px' }} className="dropdown-item">Highest Price</div>
                                <div onClick={() => { setShowDropDown(false); setActiveSort({ label: 'Lowest Price', value: 'low' }); }} style={{ color: '#fff', fontSize: '14px' }} className="dropdown-item">Lowest Price </div>
                            </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                            <div onClick={() => setListView(false)} className='px-2 d-flex justify-content-center align-items-center' style={{ cursor: 'pointer', backgroundColor: isListView ? 'transparent' : '#046cfc', opacity: isListView ? 0.5 : 1, border: '1px solid gray', borderTopLeftRadius: 4, borderBottomLeftRadius: 4, paddingTop: '9px', paddingBottom: '9px' }}><BsGridFill size={20} color='#fff' /></div>
                            <div onClick={() => setListView(true)} className='px-2 d-flex justify-content-center align-items-center' style={{ cursor: 'pointer', backgroundColor: isListView ? '#046cfc' : 'transparent', opacity: isListView ? 1 : 0.5, border: '1px solid gray', borderTopRightRadius: 4, borderBottomRightRadius: 4, paddingTop: '9px', paddingBottom: '9px' }}><BsListUl size={20} color='#fff' /></div>
                        </div>
                    </div>
                </div>
                {isListView ?

                    <div style={{ overflow: 'scroll' }} className='flex-column d-flex px-4' >
                        {axies.map((item, index) => <AxiesCard key={index} axie={item} />)}
                        <Pagination page={page} setPage={setPage} />
                    </div>
                    :
                    <>
                        <div style={{ overflow: 'scroll' }} className='flex-row d-flex flex-wrap px-4 justify-content-center' >
                            {axies.map((item, index) => <AxiesGridCard key={index} axie={item} />)}
                        </div>
                        <Pagination page={page} setPage={setPage} />
                    </>
                }
            </div>
        </div>
    );
}

export default Axies;