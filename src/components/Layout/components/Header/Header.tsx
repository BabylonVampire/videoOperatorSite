import { FC } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
	links: { heading: string; link: string }[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
	return (
		<div className={styles.header}>
			<div className={styles.pcDisplay}>
				<div className={styles.logo}></div>
				<div className={styles.linkBox}>
					{links.map((link) => {
						return (
							<a className={styles.link} href={link.link}>
								{link.heading}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Header;
