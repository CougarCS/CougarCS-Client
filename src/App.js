import React, { lazy, Suspense } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import FourOFour from './components/404/FourOFour';
import Loading from './components/Loading/Loading';

const NavBar = lazy(() => import('./components/Navbar/Navbar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ScrollTop = lazy(() => import('./components/ScrollTop/ScrollTop'));
const About = lazy(() => import('./pages/About/About'));
const Tutoring = lazy(() => import('./pages/Tutoring/Tutoring'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const Events = lazy(() => import('./pages/Events/Events'));
const Home = lazy(() => import('./pages/Home/Home'));
const Membership = lazy(() => import('./pages/Membership/Membership'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const UserRegister = lazy(() =>
	import('./components/UserRegister/UserRegister')
);
const Hackathon = lazy(() => import('./pages/Hackathon/Hackathon'));
const Privacy = lazy(() => import('./pages/Policy/Privacy'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const GalleryEvent = lazy(() => import('./pages/Gallery/GalleryEvent'));

const queryClient = new QueryClient();

function initializeReactGA() {
	const snap = navigator.userAgent !== 'ReactSnap';
	if (snap) {
		ReactGA.initialize('UA-155177558-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
}

const App = () => {
	initializeReactGA();
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Suspense fallback={<Loading />}>
					<ScrollTop />
					<NavBar />
					<Switch>
						<Route path='/' exact={true} component={Home} />
						<Route path='/about' component={About} />
						<Route path='/membership' component={Membership} />
						<Route path='/calendar' component={Events} />
						<Route path='/contactus' component={ContactUs} />
						<Route path='/register' component={UserRegister} />
						<Route path='/hackathons' component={Hackathon}></Route>
						<Route path='/privacy-policy' component={Privacy} />
						<Route path='/gallery' component={Gallery} exact={true} />
						<Route path='/tutoring' component={Tutoring} />
						<Route
							path='/gallery/:event'
							render={(props) => <GalleryEvent {...props} />}
						/>
						<Route path='/404' component={NotFound} />
						<Route component={FourOFour} />
					</Switch>
					<Footer />
				</Suspense>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
