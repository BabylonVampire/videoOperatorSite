import styles from './PartnersSection.module.scss';

const PartnersSection = () => {
	const partners = [
		{
			pic: '/src/assets/pics/partners/user.png',
			name: 'Сбербанк',
			text: 'Asad asd asdasdas asdas asdas asdasdas ads',
		},
		{
			pic: '/src/assets/pics/partners/user.png',
			name: 'Альфа Банк',
			text: 'Asad asd asdasdas asdas asdas asdasdas ads',
		},
		{
			pic: '/src/assets/pics/partners/user.png',
			name: 'Путин',
			text: 'Asad asd asdasdas asdas asdas asdasdas ads',
		},
	];
	return (
		<div className={styles.partnersSection}>
			<div className={styles.innerBox}>
				<div className={styles.heading}>Наши партнеры</div>
				<div className={styles.partnersBox}>
					{partners.map((partner) => {
						return (
							<div className={styles.partner}>
								<div className={styles.picBox}>
									<div className={styles.picWrapper}>
										<div
											className={styles.pic}
											style={{
												backgroundImage: `url(${partner.pic})`,
											}}
										/>
									</div>
									<div className={styles.partnerName}>
										{partner.name}
									</div>
								</div>
								<div className={styles.textBox}>
									<div className={styles.text}>
										{partner.text}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default PartnersSection;
