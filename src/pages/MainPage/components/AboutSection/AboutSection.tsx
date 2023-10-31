import { FC } from 'react';
import styles from './AboutSection.module.scss';

interface IAboutSectionProps {}

const AboutSection: FC<IAboutSectionProps> = ({}) => {
	return (
		<section className={styles.aboutSection} id="about">
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<div className={styles.heading}>О нас</div>
					<div className={styles.text}>
						Pinkerton — второй студийный альбом американской
						рок-группы Weezer, выпущенный 24 сентября 1996 года на
						лейбле DGC Records. Отказавшись от планов по созданию
						рок-оперы Songs from the Black Hole, коллектив записал
						альбом в тот же период, когда автор песен, фронтмен
						Риверс Куомо, обучался в Гарвардском университете.
						Отказавшись от найма продюсера, Weezer
					</div>
				</div>
				<div className={styles.image}>
					<video
						className={styles.videoTag}
						controls
						autoPlay
						loop
						muted
					>
						<source
							src="/src/assets/video/about.mp4"
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
