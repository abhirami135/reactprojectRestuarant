
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RestuarantLists  from './components/RestuarantLists';
import RestuarantDetails from './components/RestuarantDetails';
import { Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
<Routes>
{/* path for RestuarantLists */}
     <Route path='/' element={ <RestuarantLists/>} />
   {/* path for RestuarantDetails */}
   <Route path='restdetails/:id' element={ <RestuarantDetails/> }/>
   </Routes>
      <Footer/>
    </div>
  );
}

export default App;


