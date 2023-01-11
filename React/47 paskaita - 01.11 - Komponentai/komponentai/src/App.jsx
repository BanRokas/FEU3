import './App.css';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <>
      <Header />
      <div className="klientuSarasas">
        <h2>Klientų sąrašas</h2>
        <List 
          data = {
            ['Petras', 'Rokas', 'Jonas', 'Kamilė']
          }
        />
      </div>
      <div className="prekiuSarasas">
        <h2>Prekių sąrašas</h2>
        
      </div>
    </>
  );
}

export default App;
