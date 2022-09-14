import { useState } from 'preact/hooks';
import CarsList from '../../components/cars/list';
import style from './style.css';

const Home = () => {
	const [search, setSearch] = useState('');

	return (
		<div class={style.home}>
			<div class={style.homeInputContainer}>
				<label for="carsSearch" class={style.homeInputLabel}>
					Zoeken
				</label>
				<input class={style.homeInput} placeholder="zoeken..." onChange={e => setSearch(e.target.value)} />
			</div>
			<div class={style.homeList}>
				<CarsList search={search} />
			</div>
		</div>
	);
};
export default Home;
