import CarForm from '../lib/CarForm';
import SearchForm from '../lib/SearchForm';

export default function Home(props) {
  return (
    <main>
      <h1>Create a Auction</h1>
      <CarForm />
      <hr />
      <h1>Find a Auction</h1>
      <SearchForm />
    </main>
  );
}
