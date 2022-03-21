import './bundle.css';
import Slider from '@mui/material/Slider';
import images from '../../../constants/images';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { useState } from 'react';
import CheckboxItem from '../../../components/checkbox';

const FilterHeading = ({ heading }) => <span style={{ color: '#a1a6b6', fontFamily: 'venir Next,Muli,sans-serif', marginTop: '10px', fontSize: '10px', letterSpacing: '1px', lineHeight: '14px' }}>{heading}</span>

const LandPlot = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ padding: '10px', border: '1px solid #3a3f50', borderRadius: '10px' }}>
            <div onClick={() => setOpen(!isOpen)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}>
                <div>
                    <img src={images.tabLand} alt='tab land' width='24' />
                    <span style={{ color: '#fff', marginLeft: '10px' }}>Land Plot</span>
                </div>
                {isOpen ? <AiOutlineCaretUp color='#fff' /> : <AiOutlineCaretDown color='#fff' />}
            </div>
            {
                isOpen ?
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center', marginTop: '10px' }}>
                        <CheckboxItem color='orange' name='Savannah' />
                        <CheckboxItem color='green' name='Forest' />
                        <CheckboxItem color='red' name='Arctic' />
                        <CheckboxItem color='skyblue' name='Mystic' />
                        <CheckboxItem color='lightblue' name='Genesis' />
                    </div>
                    :
                    null
            }
        </div>
    );
}

const LandItem = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ padding: '10px', border: '1px solid #3a3f50', borderRadius: '10px', marginTop: '10px' }}>
            <div onClick={() => setOpen(!isOpen)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center' }}>
                <div>
                    <img src={images.tabLand} alt='tab land' width='24' />
                    <span style={{ color: '#fff', marginLeft: '10px' }}>Land Plot</span>
                </div>
                {isOpen ? <AiOutlineCaretUp color='#fff' /> : <AiOutlineCaretDown color='#fff' />}
            </div>
            <div>
                {
                    isOpen ?
                        <div>
                            <FilterHeading heading='ENVIRONMENT' />
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', cursor: 'pointer', alignItems: 'center', marginTop: '10px' }}>
                                <CheckboxItem color='orange' name='Savannah' />
                                <CheckboxItem color='green' name='Forest' />
                                <CheckboxItem color='red' name='Arctic' />
                                <CheckboxItem color='skyblue' name='Mystic' />
                                <CheckboxItem color='lightblue' name='Genesis' />
                            </div>
                            <FilterHeading heading='RARITY' />
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', cursor: 'pointer', justifyContent:'space-between', alignItems: 'center', marginTop: '10px' }}>
                                <CheckboxItem outline color='gray' name='Common' />
                                <CheckboxItem outline color='green' name='Rare' />
                                <CheckboxItem outline color='orange' name='Epic' />
                                <CheckboxItem outline color='purple' name='Mystic' />
                            </div>
                            <FilterHeading heading='NAME' />
                        </div>
                        :
                        null}
            </div>
        </div>
    );
}

const BundleFilter = () => {
    return (
        <div className='bundle-filter-container p-3'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className='heading'>Filter (0)</div>
                <div className='link'>Clear Filter</div>
            </div>
            <FilterHeading heading='TOTAL ITEMS' />
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={[10, 50]}
                onChange={() => { }}
                valueLabelDisplay="auto"
                getAriaValueText={''}
            />
            <LandPlot />
            <LandItem />
        </div>
    );
}

export default BundleFilter;