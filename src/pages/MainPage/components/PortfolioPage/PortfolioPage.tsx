import { FC } from 'react';
import styles from './PortfolioPage.module.scss';

interface IPortfolioPageProps {}

const PortfolioPage: FC<IPortfolioPageProps> = () => {
	const links = [
		{
			link: 'https://www.youtube.com/embed/tGD_Ge4LlfA?si=xoWWF2_Bnjz78qc7',
			heading: 'asd',
			description: 'бла бла бла',
		},
		{
			link: 'https://www.youtube.com/embed/ZfXriCVhyeU?si=nzmlJLZ0VRNHCaq8',
			heading: 'asd',
			description: 'бла бла бла',
		},
		{
			link: 'https://www.youtube.com/embed/VeQH6avE3IM?si=rY5nCx-us0RbSrh7',
			heading: 'asd',
			description: 'бла бла бла',
		},
		{
			link: 'https://www.youtube.com/embed/dEqdCDw0w0k?si=PPRXCf5GcCiDdLDm',
			heading: 'asd',
			description: 'бла бла бла',
		},
		{
			link: 'https://www.youtube.com/embed/aC5nytcwT7U?si=RQaUARFoarIfPUvH',
			heading: 'asd',
			description: 'бла бла бла',
		},
		{
			link: 'https://www.youtube.com/embed/Gcb5FUNaCc4?si=3KVkiQgDKNBpHz9G',
			heading: 'asd',
			description: 'бла бла бла',
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
									<div className={styles.title}>
										{link.heading}
									</div>
									<div className={styles.description}>
										{link.description}
									</div>
									<iframe
										aria-controls="0"
										loading="lazy"
										className={styles.video}
										src={`${link.link}?controls=0&showinfo=0`}
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
