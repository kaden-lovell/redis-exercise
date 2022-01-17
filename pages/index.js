import CarForm from '../lib/CarForm';
import SearchForm from '../lib/SearchForm';

export default function Home() {
  return (
    <div>
       <div className="card" style={{width:18 + 'rem'}}>
      <h1>Create a Car</h1>
      <SearchForm/>
      <CarForm/>
      </div>
      </div>
  )
}