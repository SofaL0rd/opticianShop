// @ts-nocheck
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import  {WelcomePage}  from './pages/Welcome/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import Footer from './components/Footer.jsx';
import { Products } from './pages/Products/index.jsx';
import { ProductProvider } from './pages/Products/ProductProvider.jsx';

export function App() {
	return (
        <ProductProvider>
		<LocationProvider >
			<Header />
			<main >
				<Router>
                    <Route path="/" component={Products}/>
					<Route default component={NotFound} />
				</Router>
			</main>
			<Footer/>
		</LocationProvider>
        </ProductProvider>
	);
}

render(<App />, document.getElementById('app'));
