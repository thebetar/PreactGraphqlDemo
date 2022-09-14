import { gql, useQuery } from '@apollo/client';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../assets/lotties/search.json';
import style from '../../routes/home/style.css';

const GET_CARS = gql`
	query GetCars {
		cars {
			Brand
			Model
			Generation
			Year_Introduced
			Modification_Engine
		}
	}
`;

const List = ({ search }) => {
	const { loading, error, data } = useQuery(GET_CARS);

	if (error)
		return (
			<p>
				<b>Error:</b> {error}
			</p>
		);

	function filterCars(car) {
		return Object.values(car).some(value => value && value.includes(search || ''));
	}

	return loading ? (
		<div class={(style.home, style.homeLoading)}>
			<Player autoplay loop style={{ height: 300, width: 300 }} src={animationData} />
		</div>
	) : (
		data.cars.filter(filterCars).map(car => (
			<div class={style.homeListItem}>
				<b>
					{car.Brand} {car.Model}
				</b>
				<ul>
					{Object.entries(car).map(([key, value]) => (
						<li>
							<b>{key}:</b> {value}
						</li>
					))}
				</ul>
			</div>
		))
	);
};

export default List;
