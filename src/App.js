import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import FourOFour from './components/404/FourOFour';
import Loading from './components/Loading/Loading';
import { initialize } from './utils/reactGA';

const NavBar = lazy(() => import('./components/Navbar/Navbar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const ScrollTop = lazy(() => import('./components/ScrollTop/ScrollTop'));
const About = lazy(() => import('./pages/About/About'));
const Tutoring = lazy(() => import('./pages/Tutoring/Tutoring'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const Events = lazy(() => import('./pages/Events/Events'));
const Home = lazy(() => import('./pages/Home/Home'));
const Join = lazy(() => import('./pages/Join/Join'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Hackathon = lazy(() => import('./pages/Hackathon/Hackathon'));
const Privacy = lazy(() => import('./pages/Policy/Privacy'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const GalleryEvent = lazy(() => import('./pages/Gallery/GalleryEvent'));
const InfoSec = lazy(() => import('./pages/InfoSec/InfoSec'));

const queryClient = new QueryClient();

const App = () => {
	initialize();
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Suspense fallback={<Loading />}>
					<ScrollTop />
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/join' element={<Join />} />
						<Route path='/events' element={<Events />} />
						<Route path='/contactus' element={<ContactUs />} />
						<Route path='/hackathons' element={<Hackathon />} />
						<Route path='/privacy-policy' element={<Privacy />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/tutoring' element={<Tutoring />} />
						<Route path='/infoSec' element={<InfoSec />} />
						<Route path='/gallery/:event' element={<GalleryEvent />} />
						<Route path='/404' element={<NotFound />} />
						<Route path='*' element={<FourOFour />} />
					</Routes>
					<Footer />
				</Suspense>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
