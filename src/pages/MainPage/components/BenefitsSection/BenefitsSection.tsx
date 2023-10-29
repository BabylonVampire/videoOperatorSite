import { FC } from 'react';
import styles from './BenefitsSection.module.scss';
import BenefitCard from './BenefitCard/BenefitCard';

interface IBenefitsSectionProps {}

const BenefitsSection: FC<IBenefitsSectionProps> = ({}) => {
	return (
		<section className={styles.benefitsSection} id="benefits">
			<div className={styles.title}>Наши преимущества</div>
			<div className={styles.innerBox}>
				<div className={styles.cardBox}>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
					<BenefitCard
						heading="Заголовок"
						text="as dlkasd lkjsd kljaslkjdl alksj lkja slkjdkaj lasj lakjs dlehgj"
						image="/src/assets/pics/camera.png"
					/>
				</div>
			</div>
		</section>
	);
};

export default BenefitsSection;
