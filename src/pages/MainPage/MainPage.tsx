import { FC } from 'react';
import styles from './MainPage.module.scss';
import BenefitsSection from './components/BenefitsSection/BenefitsSection';
import ContactsSection from './components/ContactsSection/ContactsSection';
import FaqPage from './components/FaqSection/FaqSection';
import HeroSection from './components/HeroSection/HeroSection';
import PartnersSection from './components/PartnersSection/PartnersSection';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import PriceSection from './components/PriceSection/PriceSection';

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {
	return (
		<main className={styles.mainPage}>
			<HeroSection />
			<PortfolioPage />
			<PartnersSection />
			<BenefitsSection />
			<PriceSection />
			<FaqPage />
			<ContactsSection />
		</main>
	);
};

export default MainPage;
