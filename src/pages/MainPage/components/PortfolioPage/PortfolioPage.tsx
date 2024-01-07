import { FC } from 'react';
import styles from './PortfolioPage.module.scss';

interface IPortfolioPageProps {}

const PortfolioPage: FC<IPortfolioPageProps> = () => {
	const links = [
		{
			link: 'https://www.youtube.com/embed/MGQNGQkvnCY?si=O-g4l1pnq4bZs6EY',
			heading: 'asd',
		},
		{
			link: 'https://www.youtube.com/embed/MGQNGQkvnCY?si=O-g4l1pnq4bZs6EY',
			heading: 'asd',
		},
		{
			link: 'https://www.youtube.com/embed/MGQNGQkvnCY?si=O-g4l1pnq4bZs6EY',
			heading: 'asd',
		},
		{
			link: 'https://www.youtube.com/embed/MGQNGQkvnCY?si=O-g4l1pnq4bZs6EY',
			heading: 'asd',
		},
	];
	return (
		<div className={styles.portfolioPage}>
			<div className={styles.innerBox}>
				<div className={styles.heading}>Наши работы</div>
				<div className={styles.portfolioBox}>
					{links.map((link) => {
						return (
							<div className={styles.link}>
								<div className={styles.videoBox}>
									<div className={styles.description}>
										{link.heading}
									</div>
									<iframe
										aria-controls="0"
										loading="lazy"
										className={styles.video}
										src={`${link.link}&rel=0`}
										frameBorder={0}
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PortfolioPage;
