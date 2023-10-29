import { FC } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ContactsSection from './components/ContactsSection/ContactsSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = ({}) => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<AboutSection />
			<BenefitsSection />
			<ContactsSection />
		</main>
	);
};

export default MainPage;
