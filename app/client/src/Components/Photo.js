import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useDataDispatch, useDataState, getPhotoList} from '../Others/Store'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { base } from '../Others/Api'
import DATE_CONTROLLER from './DateController';

const PHOTO_CONTAINER = styled.div`
    width:95%;
    margin:0 auto;

    @media screen and (min-width:1100px) {
        width:35%;
    }
`;

const NONE_CONTAINER = styled.div`
    width:95%;
    margin : 0 auto;
    height: 100vh;
    
    @media screen and (min-width:1100px) {
        width:35%;
    }
`;

const DATA_CONTAINER = styled.div`
    & + &{
        margin-top:35px;
    }
    &:nth-child(2) {
        margin-top:15px;
    }
`;

const NOTI = styled.div`
    text-align:center;
    height: 50vh;
    line-height: 50vh;
`;

const Photo = () => {
    const nowYearMonth = new Date();
    let year = nowYearMonth.getFullYear(); 
    let month = nowYearMonth.getMonth() + 1 < 10 ? `0${nowYearMonth.getMonth() + 1}` : nowYearMonth.getMonth() + 1

    const [date, setDate] = useState(`${year}-${month}`);
    const state = useDataState();
    const dispatch = useDataDispatch(); 

    function upDate() {
        const ref = new Date(date)
        let year = ref.getFullYear() 
        let month = ref.getMonth() + 1

        month = month + 1 < 10 ? `0${month + 1}` : month + 1
        if(month === 13) {
            year += 1;
            month = '01'
        }
        setDate(year+'-'+month)
    }
    
    function downDate() {
        const ref = new Date(date)
        let year = ref.getFullYear() 
        let month = ref.getMonth() + 1

        month = month - 1 < 10 ? `0${month - 1}` : month - 1
        if(month === '00') {
            year -= 1;
            month = 12;
        }
        setDate(year+'-'+month)
    }

    useEffect( () => {
        getPhotoList(dispatch, date)
    }, [dispatch, date])

    async function photoDelte(idx) {
        if(window.confirm('삭제하실껀가유?') === true) {
            await axios.delete(base + `/api/${idx}`)
                  .then(res => {
                      if(res.data.result === 'success') {
                        alert('삭제가 되었네용~ㅇ')
                        getPhotoList(dispatch, date)
                      } else {
                        alert('오류가 발생했어요...')
                        console.log(res.data.error)
                        return
                      }
                  })
        } 
    
    }

    const {loading, data, error} = state
    if(loading) return(<div>       
                            <NONE_CONTAINER>
                                <NOTI style={{'textAlign':'center'}}>Loading...</NOTI>
                            </NONE_CONTAINER>
                        </div>)
    if(error) return <div>Error</div>
    if(data.length === 0 ) return  (
        <NONE_CONTAINER>
            <DATE_CONTROLLER downDate={downDate} date={date} upDate={upDate}/>
            <NOTI style={{'textAlign':'center'}}>데이터가 없네유</NOTI>
        </NONE_CONTAINER>
    )

    return (
        <PHOTO_CONTAINER>
            <DATE_CONTROLLER downDate={downDate} date={date} upDate={upDate}/>
            {data.map((photos, index) => 
                <DATA_CONTAINER key={index} style={{'paddingBottom' : '12px', 'borderBottom' : '1px solid #ccc'}}>
                    <LazyLoadImage 
                        width='100%'
                        src= {base+'/photo/'+photos.filename}
                        alt='미누'   
                        effect="opacity"
                        delayTime={300} 
                    />
                    <div style={{ 'width':'100%', 'textAlign': 'right'}}>
                        <button onClick={() => {photoDelte(photos.idx)}}>삭제</button>
                    </div>
                </DATA_CONTAINER>
            )}
        </PHOTO_CONTAINER>        
    )
}

export default Photo;