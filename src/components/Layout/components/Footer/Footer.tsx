import { FC, memo } from 'react';
import styles from './Footer.module.scss';
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa6';

interface IFooterProps {
	links: { heading: string; link: string }[];
	contacts: {
		phones: string[];
		emails: string[];
	};
}

const Footer: FC<IFooterProps> = memo(({ links, contacts }) => {
	const date = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div className={styles.FooterContainer}>
				<div className={styles.mainBox}>
					<ul className={styles.optionsCol}>
						<div className={styles.colHeading}>Навигация</div>
						<div className={styles.divider} />
						{links.map((link) => {
							return (
								<li className={styles.option}>
									<a href={link.link} className={styles.link}>
										{link.heading}
									</a>
								</li>
							);
						})}
					</ul>

					<ul className={styles.contactsCol}>
						<div className={styles.colHeading}>Контакты</div>
						<div className={styles.divider} />
						{contacts.phones.map((phone) => {
							return <li className={styles.contact}>{phone}</li>;
						})}
						{contacts.emails.map((email) => {
							return <li className={styles.contact}>{email}</li>;
						})}
					</ul>
					<ul className={styles.linksCol}>
						<div className={styles.colHeading}>Наши соцсети</div>
						<div className={styles.divider} />
						<li className={styles.outLink}>
							<FaTelegram />
						</li>
						<li className={styles.outLink}>
							<FaYoutube />
						</li>
						<li className={styles.outLink}>
							<FaInstagram />
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.copyright}>
				<p>
					© {date} Все права защищены. Сделано компанией Gafurov
					digital Production
				</p>
			</div>
		</footer>
	);
});

export default Footer;
