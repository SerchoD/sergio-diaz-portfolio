import { Section_1 } from '../../components/Section_1/Section_1';
import Topbar from '../../components/Topbar/Topbar';
import useStyles from './useStyles';

const MainPage = () => {
	const s = useStyles();
	return (
		<div className={s.main_container}>
			<Topbar />
			<Section_1 />
		</div>
	);
};

export default MainPage;
