import { useState } from 'react';

export default function CarForm() {
    const [hits, setHits] = useState([]);

    async function search(event) {
        const q = event.target.value;

        // only search if greater than 2 to reduce noise
        if(q.length > 2) {
            const params = new URLSearchParams({ q })
            const response = await fetch('/api/search?' + params);
            
            const result = await response.json();

            setHits(result['cars']);
        }
    };

    return (
    <div>
        <input className="form-control" onChange={search} type="text"/>
        <ul>
            <h3>Search Matches:</h3>
            {hits.map((hit) => (
                <li key={hit.entityId}>
                    Make: {hit.make}, Model: {hit.model}, Description: {hit.description}
                </li>
            ))}
        </ul>
    </div>)
}