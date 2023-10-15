import {IAPIResponse} from '../types/API';

export default async function fetchAPIData(user: string) {
    const data = await fetch(`/users/${user}.json`);
    const res = await data.text();

    return JSON.parse(res);
}