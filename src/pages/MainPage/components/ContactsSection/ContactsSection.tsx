import { FC } from 'react';
import styles from './ContactsSection.module.scss';

interface IContactsSectionProps {}

const ContactsSection: FC<IContactsSectionProps> = ({}) => {
	return (
		<section className={styles.contactsSection}>
			<div className={styles.innerBox}></div>
		</section>
	);
};

export default ContactsSection;
