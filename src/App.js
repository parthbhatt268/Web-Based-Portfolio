// import './App.css';

import Master from './component/master/master';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Master/>
      <ToastContainer />

    </div>
  );
}

export default App;
