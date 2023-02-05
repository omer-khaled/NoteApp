import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Body from './Body';
import { Routes,Route } from 'react-router-dom';
import Add from './Compnonets/Add';
import Deleted from './Compnonets/Deleted';
import Done from './Compnonets/Done';
import Notes from './Compnonets/Notes';
import { Provider } from 'react-redux';
import { store } from './Context';
import UpdatedNote from './Compnonets/UpdatedNote';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Body>
          <Sidebar />
          <Routes>
              <Route exact path="/" element={<Notes />} />
              <Route path='/:id' element={<UpdatedNote />} />
              <Route path="/add" element={<Add />}/>
              <Route path="/Done" element={<Done />}/>
              <Route path="/Deleted" element={<Deleted />}/>
          </Routes>
        </Body>
      </div>
    </Provider>
  );
}

export default App;
