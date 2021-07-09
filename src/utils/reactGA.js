import LogRocket from 'logrocket';
import ReactGA from 'react-ga';

const snap = navigator.userAgent !== 'ReactSnap';
const isProd = process.env.REACT_APP_NODE_ENV === 'PROD';

export const initialize = () => {
	if (snap && isProd) {
		LogRocket.init('mzjohu/cougarcs');
		ReactGA.initialize('UA-155177558-1');
		ReactGA.ga('set', 'transport', 'beacon');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
};

export const eventListenersGA = (category, action) => {
	if (snap && isProd) {
		ReactGA.event({
			category,
			action,
		});
	}
};
