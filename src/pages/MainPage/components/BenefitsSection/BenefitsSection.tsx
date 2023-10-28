import { FC } from 'react';
import styles from './BenefitsSection.module.scss';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	return (
		<section className={styles.benefitsSection}>
			<div className={styles.innerBox}></div>
		</section>
	);
};

export default BenefitsSection;
