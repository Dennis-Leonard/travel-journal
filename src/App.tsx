import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import data from './data';
import { TravelLogData } from './models/travel-log-data';

function App() {
  const entryElements = data.map((entry: TravelLogData) => {
    return <Entry key={entry.id} {...entry} />;
  });

  return (
    <>
      <Header />
      <main className='container'>{entryElements}</main>
    </>
  );
}

export default App;

