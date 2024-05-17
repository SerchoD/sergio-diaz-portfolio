import useStyles from './useStyles';

const Topbar = () => {
	const s = useStyles();
	return (
		<div className={s.main_container}>
			<div className={s.left_container}>
				<p className={s.sergio_diaz}>
					<span className='font-bold text-white'>S</span>ERGIO
					<span className='font-bold text-white'>D</span>ÍAZ
				</p>
			</div>
			<div className={s.center_container}>center</div>
			<div className={s.right_container}>rigth</div>
		</div>
	);
};

export default Topbar;
