import './App.css';
import Details from './Details';
import Form from './Form';
import Result from './Result';

function App() {
  return (
    <div className="container">
      <main className="app">
        <section className="app__result">
          <Result />
        </section>
        <aside className="app__aside">
          <Form />
          <Details />
        </aside>
      </main>
    </div>
  );
}

export default App;
