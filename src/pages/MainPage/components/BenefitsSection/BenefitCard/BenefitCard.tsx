import { FC } from 'react';
import styles from './BenefitCard.module.scss';

interface IBenefitCardProps {
	heading: string;
	text: string;
	image: string;
}

const BenefitCard: FC<IBenefitCardProps> = ({ heading, text, image }) => {
	return (
		<div className={styles.benefitCard}>
			<div
				className={styles.slideImage}
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<div className={styles.heading}>{heading}</div>
			</div>
			<div className={styles.innerBox}>
				<div className={styles.title}>{heading}</div>
				<div className={styles.description}>{text}</div>
			</div>
		</div>
	);
};

export default BenefitCard;
