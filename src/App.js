import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Calculator from './components/Calculator';

const App =()=> {
  return (
    <Provider store={store}>
      <section className="App">
        <div>
          <h1>Calculator Application</h1>
        </div>
        <Calculator/>
      </section>
    </Provider>
  );
}

export default App;
