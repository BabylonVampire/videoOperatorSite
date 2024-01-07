import { Collapse, CollapseProps } from 'antd';
import { CSSProperties, FC } from 'react';
import styles from './FaqSection.module.scss';

interface IFaqSectionProps {}
const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
	panelStyle
) => [
	{
		key: '1',
		label: 'This is panel header 1',
		children: <p className={styles.answer}>Ответ</p>,
		style: panelStyle,
	},
	{
		key: '2',
		label: 'This is panel header 2',
		children: <p className={styles.answer}>Ответ</p>,
		style: panelStyle,
	},
	{
		key: '3',
		label: 'This is panel header 3',
		children: <p className={styles.answer}>Ответ</p>,
		style: panelStyle,
	},
];
const FaqSection: FC<IFaqSectionProps> = () => {
	const panelStyle: React.CSSProperties = {
		marginBottom: 24,
		background: '#111111',
		borderRadius: '7px',
		border: 'none',
		fontSize: 'var(--font-size-m)',
	};
	return (
		<div className={styles.faqSection} id="faq">
			<div className={styles.innerBox}>
				<div className={styles.heading}>FAQ</div>
				<div className={styles.faqContainer}>
					<Collapse
						bordered={false}
						items={getItems(panelStyle)}
						expandIcon={() => <></>}
					/>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
