import { FC } from 'react';
import styles from './MainPage.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import PriceSection from './components/PriceSection/PriceSection';
import FaqPage from './components/FaqSection/FaqSection';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<PortfolioPage />
			<BenefitsSection />
			<PriceSection />
			<FaqPage />
			<ContactsSection />
		</main>
	);
};

export default MainPage;
