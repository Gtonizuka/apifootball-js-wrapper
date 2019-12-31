import axios from 'axios'

import {MainService} from '../index'
import { ENDPOINT } from '../static/endpoint';

async function getRequest(action: string) {
    const url: string = `${ENDPOINT}action=${action}&APIkey=${MainService.APIKEY}`
    return axios.get(url)
}

export default getRequest