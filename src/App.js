import { Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Sidebar from 'components/Sidebar';
import Lists from 'pages/Lists';
import Details from 'pages/Details';
import { store } from './app/store';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Provider store={store}>
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Lists} />
                    <Route exact path="/details/:id" component={Details} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Provider>
        </>
    );
}

export default App;
