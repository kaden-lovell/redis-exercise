import { createCar } from '../../lib/redis';

export default async function handler(request, response) {
    const id = await createCar(request.body);
    response.status(200).json({ id });
}