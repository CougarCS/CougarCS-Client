<<<<<<< HEAD
import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Membership from './pages/Membership/Membership';
import NotFound from './pages/NotFound/NotFound';
import UserRegister from './components/UserRegister/UserRegister';
import Insights from './pages/Insights/Insights';
import Privacy from './pages/Policy/Privacy';

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
				<Route path='/contactus/' component={ContactUs} />
				<Route path='/register/' component={UserRegister} />
				<Route path='/insights' component={Insights} />
				<Route path='/privacy-policy/' component={Privacy} />
				<Route component={NotFound} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
=======
import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Membership from './pages/Membership/Membership';
import NotFound from './pages/NotFound/NotFound';
import UserRegister from './components/UserRegister/UserRegister';
import Hackathon from './pages/Hackathon/Hackathon';
import Privacy from './pages/Policy/Privacy';
import Gallery from './pages/Gallery/Gallery';
import GalleryEvent from './pages/Gallery/GalleryEvent';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { QueryClient, QueryClientProvider } from 'react-query';
import FourOFour from './components/404/FourOFour';

const queryClient = new QueryClient();

function initializeReactGA() {
	ReactGA.initialize('UA-155177558-1');
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const App = () => {
	initializeReactGA();
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<ScrollTop />
				<NavBar />
				<Switch>
					<Route path='/' exact={true} component={Home} />
					<Route path='/about/' component={About} />
					<Route path='/membership/' component={Membership} />
					<Route path='/calendar/' component={Events} />
					<Route path='/contactus/' component={ContactUs} />
					<Route path='/register/' component={UserRegister} />
					<Route path='/hackathons/' component={Hackathon}></Route>
					<Route path='/privacy-policy/' component={Privacy} />
					<Route path='/gallery/' component={Gallery} exact={true} />
					<Route
						path='/gallery/:event'
						render={(props) => <GalleryEvent {...props} />}
					/>
					<Route path='/404/' component={NotFound} />
					<Route component={FourOFour} />
				</Switch>
				<Footer />
			</Router>
		</QueryClientProvider>
	);
};

export default App;
>>>>>>> ca2be908c8e70cae95018c5f1711965126bf2e35
