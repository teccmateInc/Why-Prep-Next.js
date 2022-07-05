import axios from 'axios';

const sandbox_url = 'https://api.preps.dev'

export const Prep = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URI || sandbox_url,
})