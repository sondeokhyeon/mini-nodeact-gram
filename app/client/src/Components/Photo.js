import React, {useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useDataDispatch, useDataState, getPhotoList} from '../Others/Store'

const PHOTO_CONTAINER = styled.div`
    width:100%;

    @media screen and (min-width:1100px) {
        width:50%;
        margin:0 auto;
    }
    div + div{
            margin-top:35px;
    }
`;

const IMG = styled.img`

`;

const Photo = () => {
    const state = useDataState();
    const dispatch = useDataDispatch(); 

    useEffect( () => {
        getPhotoList(dispatch)
    }, [dispatch])

    async function photoDelte(idx) {
        if(window.confirm('삭제하실껀가유?') === true) {
            await axios.delete(`/api/${idx}`)
                  .then(res => {
                      if(res.data.result === 'success') {
                        alert('삭제가 되었네용~ㅇ')
                        getPhotoList(dispatch)
                      } else {
                        alert('오류가 발생했어요...')
                        console.log(res.data.error)
                        return
                      }
                  })
        } 
    
    }

    const {loading, data, error} = state

    if(loading  || data.length === 0 ) return <div>Loading...</div>
    if(error) return <div>Error</div>
    if(data.length > 0 ) 

    return (
        <PHOTO_CONTAINER>
            {data.map((photos, index) => 
                <div key={index} style={{'paddingBottom' : '12px', 'borderBottom' : '1px solid #ccc'}}>
                    <IMG id={photos.idx} style={{ 'width':'100%' }}  src={photos.filename}></IMG>
                    <div style={{ 'width':'100%', 'textAlign': 'right'}}><button onClick={() => {photoDelte(photos.idx)}}>삭제</button></div>
                </div>
            )}
        </PHOTO_CONTAINER>        
    )
}

export default Photo;