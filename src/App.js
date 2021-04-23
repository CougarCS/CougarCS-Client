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
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		</QueryClientProvider>
	);
};

export default App;
