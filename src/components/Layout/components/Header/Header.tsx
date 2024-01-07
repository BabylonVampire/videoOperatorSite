import { FC, useState } from 'react';
import styles from './Header.module.scss';
import { HiMenu } from 'react-icons/hi';
interface IHeaderProps {
	links: { heading: string; link: string }[];
}

const Header: FC<IHeaderProps> = ({ links }) => {
	const [burger, setBurger] = useState<boolean>(false);
	const changeBurger = () => {
		setBurger((prev) => !prev);
	};
	return (
		<div className={styles.header}>
			<div
				className={styles.burgerField}
				style={{
					pointerEvents: burger ? 'all' : 'none',
					opacity: burger ? '0.4' : '0',
				}}
				onClick={changeBurger}
			/>
			<div
				className={styles.burgerMenu}
				style={{
					right: burger ? '0' : '-100%',
				}}
			>
				<div className={styles.burgerLinks}>
					{links.map((link) => {
						return (
							<a
								key={link.link + link.heading}
								className={styles.link}
								href={link.link}
								onClick={changeBurger}
							>
								{link.heading}
							</a>
						);
					})}
				</div>
				<div className={styles.burgerPhone}>+7 999 999 99 99</div>
			</div>
			<div className={styles.pcDisplay}>
				<div className={styles.logo} />
				<div className={styles.phone}>+7 999 999 99 99</div>
				<div className={styles.linkBox}>
					{links.map((link) => {
						return (
							<a
								className={styles.link}
								href={link.link}
								key={`burger${link.link + link.heading}`}
							>
								{link.heading}
							</a>
						);
					})}
				</div>
				<div className={styles.burgerBtn} onClick={changeBurger}>
					<HiMenu />
				</div>
			</div>
		</div>
	);
};

export default Header;
