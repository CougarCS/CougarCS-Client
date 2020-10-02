import React, { useState, useEffect } from 'react';
import './DarkMode.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const useLocalState = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue === null ? defaultValue : JSON.parse(storedValue);
	});

	useEffect(() => {
		const listener = (e) => {
			if (e.storageArea === localStorage && e.key === key) {
				setValue(JSON.parse(e.newValue));
			}
		};
		window.addEventListener('storage', listener);

		return () => {
			window.removeEventListener('storage', listener);
		};
	}, [key]);

	const setValueInLocalStorage = (newValue) => {
		setValue((currentValue) => {
			const result =
				typeof newValue === 'function' ? newValue(currentValue) : newValue;
			localStorage.setItem(key, JSON.stringify(result));
			return result;
		});
	};

	return [value, setValueInLocalStorage];
};

const DarkMode = () => {
	const [theme, setTheme] = useLocalState('theme', 'light');

	return (
		<HelmetProvider>
			<Helmet>
				<body data-theme={theme} />
			</Helmet>
			<button
				className='toggle-theme'
				onClick={() => setTheme((cur) => (cur === 'light' ? 'dark' : 'light'))}>
				Test
			</button>
		</HelmetProvider>
	);
};

export default DarkMode;
