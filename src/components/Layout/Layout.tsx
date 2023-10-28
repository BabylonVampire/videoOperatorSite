import { FC, PropsWithChildren, memo } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.mainLayoutBox}>
				<Header
					links={[
						{ heading: 'О нас', link: '#about' },
						{ heading: 'О нас', link: '#about' },
						{ heading: 'О нас', link: '#about' },
					]}
				/>
				{children}
				<Footer
					links={[
						{ heading: 'О нас', link: '#about' },
						{ heading: 'О нас', link: '#about' },
						{ heading: 'О нас', link: '#about' },
					]}
					contacts={{ phones: [], emails: [] }}
				/>
			</div>
		</div>
	);
});

export default Layout;
