import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDataDispatch, getPhotoList } from '../../Others/Store'
//import loadImage from 'blueimp-load-image';

const FORM_CONTAINER = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const UPLOAD_FORM = styled.form`
    margin:20px 0px;
    & : first-child {
        margin-left:20px;
    }
`;

const SUBMIT_BTN = styled.button`
    border: 0;
    width:150px;
    height:30px;
    color: white;
    background-color:#2e6da4;
    border-radius:50px;
    margin-right:20px;
`;

const filter = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'JPG',
    'JPEG',
    'PNG',
]

// async function test(photo, formData) {
       
//     for (let i = 0; i < photo.length; i++) {
//         const fileType = photo[i].type;
//         const item = photo[i]
//         await loadImage(item, async (img) => {
//             const cv = await convertImageToCanvas(img);
//             cv.toBlob(blob => {
//                 const newPhoto = new File([blob], item)
//                 formData.append('photo', newPhoto);
//                 console.log(formData)
//             }, fileType);
//         },
//             {
//                 orientation: true
//             }
//         );
//     }
// }
    
// function convertImageToCanvas(image) {
//     var canvas = document.createElement("canvas");
//     canvas.width = image.width;
//     canvas.height = image.height;
//     canvas.getContext("2d").drawImage(image, 0, 0);

//     return canvas;
// }



const Form = () => {
    const dispatch = useDataDispatch();
    const [photo, setPhoto] = useState([]);
    const inputEl = useRef(null);


    async function  Upload() {
        const {value} = inputEl.current
        if(value === '') {
            alert('파일 선택 후 업로드를 누르세요')
            return false;
        } 
        if(filter.includes(value.split('.')[1]) === false) {
            alert('현재 업로드 가능한 이미지는 jpg, png, gif만 가능합니다')
            return false;
        }
        
        // await test(photo, formData);
        // console.log(formData)

        let formData = new FormData();
        for (let i = 0; i < photo.length; i++ ) {
            formData.append('photo', photo[i])
        }
        
        await axios.post('/api/upload', formData)
                .then(res => {
                    if(res.data.result === 'success') {
                        getPhotoList(dispatch);
                    } else {
                        alert('오류가 발생했어요...')
                        console.log(res.data)
                        return
                    }
                })
        inputEl.current.value = ''
    }

    function setFile(e) {
        setPhoto(e.target.files)
    }

    return (
        <FORM_CONTAINER>
            <UPLOAD_FORM encType="multipart/form-data">
                <input type="file" 
                       name="photo" 
                       ref={inputEl} 
                       onChange={setFile.bind(this)}
                       multiple 
                />
            </UPLOAD_FORM>
            <SUBMIT_BTN onClick={Upload}>업로드</SUBMIT_BTN>
        </FORM_CONTAINER>
    )
}

export default Form;

