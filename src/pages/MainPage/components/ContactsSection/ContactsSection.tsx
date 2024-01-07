import { FC, useEffect } from 'react';
import styles from './ContactsSection.module.scss';
import { FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa6';
import { spawnBugs } from 'fairy-anims/src';

interface IContactsSectionProps {}

const ContactsSection: FC<IContactsSectionProps> = () => {
	useEffect(() => {
		spawnBugs(10, styles.bugContainer);
	}, []);
	return (
		<section className={styles.contactsSection} id="contacts">
			<div className={styles.innerBox}>
				<div className={styles.contactBox}>
					<div className={styles.title}>Контакты</div>
					<div className={styles.phone}>
						Телефон: 8 (999) 999 99-99
					</div>
					<div className={styles.email}>Почта: text@gmail.com</div>
					<div className={styles.awayLinksBox}>
						<a className={`${styles.outLink} ${styles.telegram}`}>
							<FaTelegram />
						</a>
						<a className={`${styles.outLink} ${styles.youTube}`}>
							<FaYoutube />
						</a>
						<a className={`${styles.outLink} ${styles.instagram}`}>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className={styles.image}>
					<div className={styles.bugContainer} />
				</div>
			</div>
		</section>
	);
};

export default ContactsSection;
