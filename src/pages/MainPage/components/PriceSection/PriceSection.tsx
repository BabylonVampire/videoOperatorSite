import styles from './PriceSection.module.scss';

const PriceSection = () => {
	return (
		<section className={styles.priceSection} id="price">
			<div className={styles.innerBox}>
				<div className={styles.textBox}>
					<div className={styles.heading}>Стоимость</div>
					<div className={styles.text}>
						Pinkerton — второй студийный альбом американской
						рок-группы Weezer, выпущенный 24 сентября 1996 года на
						лейбле DGC Records. Отказавшись от планов по созданию
						рок-оперы Songs from the Black Hole, коллектив записал
						альбом в тот же период, когда автор песен, фронтмен
						Риверс Куомо, обучался в Гарвардском университете.
						Отказавшись от найма продюсера, Weezer
					</div>
				</div>
			</div>
		</section>
	);
};

export default PriceSection;
