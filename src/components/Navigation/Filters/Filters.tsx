import React, { useState, useMemo, useEffect } from 'react'
import useToggleNodeTree from '../../../hooks/useToggleNodeTree';
import './Filters.scss';
export default function Filters() {
    const [value, setValue] = useState();
    const [toggleApplications, setFilterValue] = useToggleNodeTree((state: any) => [state.toggleApplications, state.setFilterValue]);
    const min = useMemo(() => {
        if (toggleApplications?.length) {
            const spendAmount = toggleApplications?.map((item:any) => item?.spend);
            return Math.min(...spendAmount);
        }
        return 0
    }, [toggleApplications])
    const max = useMemo(() => {
        if (toggleApplications?.length) {
            const spendAmount = toggleApplications?.map((item:any) => item?.spend);
            return Math.max(...spendAmount);
        }
        return 100;
    }, [toggleApplications])
    const handleChange = (value: any) => setValue(value);
    useEffect(() => {
        if (value) {
            setFilterValue(Number(value));
        }
    }, [value]);
  return (
    <div className='cmp-filters'>
        <div className='title'>Filters</div>
        <div>Spending</div>
        <input type='range' min={min} max={max} value={value} title={value} onChange={({target}) => handleChange(target?.value)}/>
        <div className='min-max'>
            <span>${min}</span>
            <span>${max}</span>
        </div>
    </div>
  )
}
