// @ts-nocheck
import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Header } from './components/Header.jsx';
import { WelcomePage } from './pages/Welcome/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import Footer from './components/Footer.jsx';
import { Products } from './pages/Products/index.jsx';
import { ProductDetail } from './pages/ProdutDetail/index.jsx';
import { ProductProvider } from './providers/ProductProvider.jsx';
import { Basket } from './pages/Basket/index.jsx';
import { BasketProvider } from './providers/BasketProvider.jsx';
import { UserProvider } from './providers/UserProvider.jsx';

export function App() {
	return (
		<UserProvider>
		<ProductProvider>
			<BasketProvider>
			<LocationProvider >
				<Header />
				<main >
					<Router>
							<Route path="/products/frames" component={() => <Products types={['frame_metal', 'frame_plastic']} />} />
							<Route path="/products/contact" component={() => <Products types={['lense_contact'] } />} />
							<Route path="/products" component={() => <Products types={[]} />} />
							<Route path="/" component={WelcomePage} /> 
							<Route path="/basket" component={Basket} />
							<Route default component={NotFound} />
							<Route path='/product/:productId' component={ProductDetail}/>
					</Router>
				</main>
				<Footer />
				</LocationProvider>
			</BasketProvider>
			</ProductProvider>
		</UserProvider>
	);
}

render(<App />, document.getElementById('app'));
