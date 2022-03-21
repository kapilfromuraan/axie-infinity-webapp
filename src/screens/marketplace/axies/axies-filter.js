import './axies.css';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import Checkbox from '../../../components/checkbox';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const AxiesClass = ({ updateClasses, initialClasses }) => {

    return (
        <div className='d-flex flex-row flex-wrap my-3'>
            {initialClasses.map((item, index) => <div onClick={() => updateClasses(initialClasses.map((item, innerIndex) => {
                if (innerIndex === index) { item.selected = !item.selected; return item; }
                else return item;
            }))} className=' px-3 py-1 my-1' style={{ color: 'white', backgroundColor: item.selected ? '#046cfc' : '#3a3f50', borderRadius: '4px', marginRight: '8px', textTransform: 'capitalize', fontSize: '14px', cursor: 'pointer' }}>{item.label}</div>)}
        </div>
    );
}

const BreedSelection = ({ value, setValue }) => {

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < 1) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 10 - 1);
                setValue([clamped, clamped + 1]);
            } else {
                const clamped = Math.max(newValue[1], 1);
                setValue([clamped - 1, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };

    return (
        <div className='px-2'>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value}
                max={7}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                disableSwap
            />
        </div>
    );
}

const DynamicSelection = ({ value, setValue, heading }) => {

    const handleChange2 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < 1) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 10 - 1);
                setValue([clamped, clamped + 1]);
            } else {
                const clamped = Math.max(newValue[1], 1);
                setValue([clamped - 1, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };

    return (
        <div className='px-2'>
            <span style={{ color: '#a1a6b6', fontFamily: 'venir Next,Muli,sans-serif', marginTop: '10px', fontSize: '10px', letterSpacing: '1px', lineHeight: '14px' }}>{heading}</span>
            <Slider
                getAriaLabel={() => 'Minimum distance shift'}
                value={value}
                max={100}
                onChange={handleChange2}
                valueLabelDisplay="auto"
                disableSwap
            />
        </div>
    );
}

const Section = ({ name, children, count }) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ padding: '16px 13px 16px 20px', borderBottom: '1px solid #3a3f50' }}>
            <div onClick={() => setOpen(!isOpen)} className='d-flex flex-row align-items-center justify-content-between' style={{ color: '#fff', fontSize: '16px' }}>
                <div className='d-flex flex-row align-items-center'>
                    {isOpen ? <AiOutlineCaretUp style={{ marginRight: '10px' }} color='#57627b' /> : <AiOutlineCaretDown style={{ marginRight: '10px' }} color='#57627b' />}
                    {name}
                </div>
                {count ? <div className='d-flex justify-content-center align-items-center' style={{ backgroundColor: '#3082f2', fontSize: '12px', borderRadius: '50%', color: 'white', width: '20px', height: '20px' }}>{count}</div> : null}
            </div>
            {isOpen ? children : null}
        </div>
    );
}

const AxiesFilter = ({ filters, updateFilter,fullWidth }) => {

    return (
        <div className='axies-filter-container' style={{width: fullWidth ? '100%': '280px'}}>
            <div className='px-3 py-3 d-flex flex-row align-items-center justify-content-between' style={{ borderBottom: '1px solid #3a3f50' }}>
                <div className='d-flex flex-row align-items-center'>
                    <div className='heading'>Filter</div>
                    <div className='link' style={{ paddingLeft: '18px' }}>Reset</div>
                </div>
                <AiFillHeart size={18} color='grey' />
            </div>
            <Section name='Class' count={filters.classes.filter(item => item.selected).length} ><AxiesClass initialClasses={filters.classes} updateClasses={(value) => updateFilter({ ...filters, classes: value })} /></Section>
            <Section name='Parts' ></Section>
            <Section name='Purity & Genes' ></Section>
            <Section name='Breed count' ><BreedSelection value={filters.breedCount} setValue={(value) => updateFilter({ ...filters, breedCount: value })} /></Section>
            <Section name='Stats' >
                <DynamicSelection heading='Health' value={filters.health} setValue={(value) => updateFilter({ ...filters, health: value })} />
                <DynamicSelection heading='Speed' value={filters.speed} setValue={(value) => updateFilter({ ...filters, speed: value })} />
                <DynamicSelection heading='Skill' value={filters.skill} setValue={(value) => updateFilter({ ...filters, skill: value })} />
                <DynamicSelection heading='Morale' value={filters.morale} setValue={(value) => updateFilter({ ...filters, morale: value })} />
            </Section>
            <Section name='Other' >
                <span style={{ color: '#a1a6b6', fontFamily: 'venir Next,Muli,sans-serif', marginTop: '10px', fontSize: '10px', letterSpacing: '1px', lineHeight: '14px' }}>STAGE</span>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <Checkbox value={filters.egg} onChange={() => updateFilter({ ...filters, egg: true })} name='Egg' />
                    <Checkbox value={!filters.egg} onChange={() => updateFilter({ ...filters, egg: false })} name='Adult' />
                </div>
                <span style={{ color: '#a1a6b6', fontFamily: 'venir Next,Muli,sans-serif', marginTop: '10px', fontSize: '10px', letterSpacing: '1px', lineHeight: '14px' }}>STATUS</span>
                <div className='d-flex flex-row align-items-center justify-content-between'>
                    <Checkbox value={filters.for_sale} onChange={() => updateFilter({ ...filters, for_sale: true })} name='For Sale' />
                    <Checkbox value={!filters.for_sale} onChange={() => updateFilter({ ...filters, for_sale: false })} name='Not For Sale' />
                </div>
            </Section>
        </div>
    );
}

export default AxiesFilter;