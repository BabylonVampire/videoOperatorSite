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
					<ul className={styles.contactsCol}>
						<div className={styles.colHeading}>Контакты</div>
						<div className={styles.divider} />
						{contacts.phones.map((phone) => {
							return (
								<li className={styles.contact} key={phone}>
									{phone}
								</li>
							);
						})}
						{contacts.emails.map((email) => {
							return (
								<li className={styles.contact} key={email}>
									{email}
								</li>
							);
						})}
					</ul>
					<div className={styles.linksCol}>
						<div className={styles.colHeading}>Наши соцсети</div>
						<div className={styles.divider} />
						<div className={styles.awayLinksBox}>
							<a className={styles.outLink}>
								<FaTelegram />
							</a>
							<a className={styles.outLink}>
								<FaYoutube />
							</a>
							<a className={styles.outLink}>
								<FaInstagram />
							</a>
						</div>
					</div>
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
