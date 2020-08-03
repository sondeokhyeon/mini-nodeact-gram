import axios from 'axios';

export async function GET_PHOTO_LIST() {
    const result = await axios.get('/api/list')
    return result.data
    
}