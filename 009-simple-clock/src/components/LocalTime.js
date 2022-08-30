import React, { useState, useEffect } from 'react'
import {Wrapper, Time} from '../styles/style';
import PropsManage from './PropsManage';
import Props from '../props';
export default function LocalTime(){
    const [timeState,setTimeState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTimeState(date.toLocaleTimeString());
        },1000);
    },[]);
    return (
      <Wrapper>
      {Props.map((item) => 
        // return note that contains props
        <PropsManage title={item.title} content={item.content} />
      )}
        <Time>{timeState}</Time>
      </Wrapper>
    )
}
