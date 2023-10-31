import { FC } from 'react';
import styles from './HeroSection.module.scss';

interface IHeroSectionProps {}

const HeroSection: FC<IHeroSectionProps> = ({}) => {
	return (
		<section className={styles.heroSection}>
			<video className={styles.videoTag} autoPlay loop muted>
				<source src="/src/assets/video/about.mp4" type="video/mp4" />
			</video>
			<div className={styles.contentBox}>
				<div className={styles.headingAndDescriptionBox}>
					<div className={styles.heading}>Заголовок</div>
					<div className={styles.description}>
						Описание под заголовком, должно помещаться много и
						казаться нормально
					</div>
				</div>
				<div className={styles.blankDiv} />
			</div>
		</section>
	);
};

export default HeroSection;
