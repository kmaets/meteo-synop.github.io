import { Text } from '@react-three/drei';

export const HeaderText = () => {
	const textProps: Record<string, number | string> = {
		fontSize: 0.15,
		color: '#fff',
		anchorX: 'center',
		anchorY: -0.55,
	};

	return (
		// <Text color='#fff' anchorX='center' anchorY={-0.5} {...fontProps}>
		<Text {...textProps}>
			MeteoSynop!
		</Text>
	);
};
