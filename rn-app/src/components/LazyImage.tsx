import React from 'react';
import { Image } from 'expo-image';

type Props = {
	uri: string;
	width: number;
	height: number;
};

const LazyImage: React.FC<Props> = ({ uri, width, height }) => {
	return (
		<Image
			source={{ uri }}
			style={{ width, height, borderRadius: 12 }}
			transition={250}
			placeholder={{ blurhash: 'LEHV6nWB2yk8pyo0adR*.7kCMdnj' }}
			contentFit="cover"
		/>
	);
};

export default LazyImage;