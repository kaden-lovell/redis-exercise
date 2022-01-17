import { searchCars } from '../../lib/redis';

export default async function handler(request, response) {
    const q = request.query.q;
    const cars = await searchCars(q);
    response.status(200).json({cars});
}