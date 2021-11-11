import './App.css';
import {Provider} from "react-redux"
import { store } from './redux/store';
import {BrowserRouter,Route,Switch } from "react-router-dom"
import UserList from './pages/UserList';
import Home from './pages/Home';
import UserAdd from './pages/UserAdd';
import UserEdit from './pages/UserEdit';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/user"><UserList/></Route>
            <Route exact path="/user/add"><UserAdd/></Route>
            <Route exact path="/user/:id"><UserEdit/></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
