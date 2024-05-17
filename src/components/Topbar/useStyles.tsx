const useStyles = () => {
	const styles = {
		main_container: `cursor-default select-none fixed top-0 flex flex-row justify-between items-center
      bg-[rgb(11,11,11)] w-screen
      shadow-1 hover:shadow-1-hover transition-all duration-700
      h-[27px] hover:h-[52px]
      border-b-[1px] border-b-gray-400/20
       `,

		left_container: 'ml-7',
		sergio_diaz: 'font-mono text-3xl text-gray-400 mt-2',

		center_container: '',
		right_container: 'mr-10',
	};
	return styles;
};

export default useStyles;
