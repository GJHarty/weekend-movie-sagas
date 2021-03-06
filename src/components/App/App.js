import { HashRouter as Router, Route, useParams, Switch } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';
import AddMovie from '../AddMovie/AddMovie';
import EditPage from '../EditPage/EditPage';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <DetailsPage />
        </Route>
        <Route path="/add_movie" exact>
          <AddMovie />
        </Route>
        <Route path="/edit" exact>
          <EditPage />
        </Route>
      </Router>
    </div>
  );
}


export default App;
