import Header from '../../components/Header/Header';

import {Routes,Route} from 'react-router-dom'
import routesConfig from '../../routes/routesConfig';

import styles from './App.module.css'

function App() {
  return (
    <div className="App">
			<Header></Header>
			<Routes>
				{routesConfig.map(route => {
					return <Route path={route.path} element={route.element} key={route.element}></Route>
				})}
			</Routes>
    </div>
  );
}

export default App;
