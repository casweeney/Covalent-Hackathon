import Dao from './components/pages/Dao';
import Defi from './components/pages/Defi';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-900">
        <Switch>
            <Route path='/' exact>
                <Defi />
            </Route>

            <Route path='/dao'>
                <Dao />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
