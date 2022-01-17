import {createIndex} from '../../lib/redis';

export default async function handler(request, response) {
    await createIndex();
    response.status(200).send('ok');
}