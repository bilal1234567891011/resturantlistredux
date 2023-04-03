import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';
import Restuarant from './components/Restuarant';
import RestView from './components/RestView';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
<Header />

<Routes>
<Route path='/' element={<Restuarant></Restuarant>}/>
<Route path='/view-restuarant/:id' element={<RestView></RestView>}></Route>

</Routes>



    <Footer />
    </div>
  );
}

export default App;
