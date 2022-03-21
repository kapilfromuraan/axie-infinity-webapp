const CheckboxItem = ({ color, name, outline, value, onChange }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className='my-2'>
            <input checked={value} onChange={onChange} type='checkbox' />
            <div style={{ fontSize: '12px', border: `1px solid ${color}`, paddingLeft: '10px', paddingRight: '10px', paddingTop: '1px', paddingBottom: '1px', borderRadius: '6px', marginLeft: '10px', color: outline ? color : 'white', backgroundColor: outline ? 'transparent' : color }}>{name}</div>
        </div>
    );
}

export default CheckboxItem;