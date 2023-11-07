import { FC } from 'react';
import styles from './FloatButton.module.scss';
import { AiFillPhone } from 'react-icons/ai';

interface IFloatButtonProps {}

const FloatButton: FC<IFloatButtonProps> = ({}) => {
	return (
		<div className={styles.FloatButton}>
			<a className={styles.phoneIcon}>
				<AiFillPhone />
			</a>
		</div>
	);
};

export default FloatButton;
