import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Careerfair from './pages/CareerFair/Careerfair';
import ContactUs from './pages/ContactUs/ContactUs';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Membership from './pages/Membership/Membership';
import NotFound from './pages/NotFound/NotFound';
import UserRegister from './components/UserRegister/UserRegister';
import Gallery from './pages/Gallery/Gallery';
import EventInfo from './pages/EventInfo/EventInfo';

function initializeReactGA() {
	ReactGA.initialize('UA-155177558-1');
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => {
	initializeReactGA();
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/about/' component={About} />
				<Route path='/membership/' component={Membership} />
				<Route path='/calendar/' component={Events} />
				<Route path='/careerfair/' component={Careerfair} />
				<Route path='/contactus/' component={ContactUs} />
				<Route path='/register/' component={UserRegister} />
				<Route path='/gallery/' component={Gallery} exact={true}/>
				<Route path='/gallery/:event' render={(props) => <EventInfo {...props} /> } />
				<Route component={NotFound} />

			</Switch>
		</Router>
	);
};

export default App;
