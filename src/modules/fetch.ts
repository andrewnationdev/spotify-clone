import {IAPIResponse} from '../types/API';

export default async function fetchAPIData(user: string): Promise<IAPIResponse> {
    const data = await fetch(`/users/${user}.json`);
    const res = await data.text();

    return data.json();
}