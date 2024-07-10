import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Importa tu archivo CSS personalizado

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda de medias!" stock={10} />
    </div>
  );
}

export default App;