import styles from './App.module.scss';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';

const App = () => {
	return (
		<div className={styles.App}>
			<Layout>
				<MainPage />
			</Layout>
		</div>
	);
};

export default App;
