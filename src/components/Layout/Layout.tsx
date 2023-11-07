import { FC, PropsWithChildren, memo } from 'react';
import styles from './layout.module.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import FloatButton from './components/FloatButton/FloatButton';

const Layout: FC<PropsWithChildren> = memo(({ children }) => {
	const links = [
		{ heading: 'О нас', link: '#about' },
		{ heading: 'Наши преимущества', link: '#benefits' },
		{ heading: 'Контакты', link: '#contacts' },
	];
	const contacts = {
		phones: ['+7 (999) 999 99-99'],
		emails: ['test@gmail.com'],
	};

	return (
		<div className={styles.layout}>
			<div className={styles.mainLayoutBox}>
				<Header links={links} />
				{children}
				<Footer links={links} contacts={contacts} />
				<FloatButton />
			</div>
		</div>
	);
});

export default Layout;
