import axios from 'axios';

export async function GET_PHOTO_LIST(date) {
    const result = await axios.get(base + '/api/list?date=' + date)
    return result.data
}

export const base = 'http://exp.sondeokhyeon.site:4000'