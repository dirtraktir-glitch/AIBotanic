import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const YieldChart = () => {
	return (
		<LineChart
			data={{
				labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
				datasets: [{ data: [10, 14, 13, 18, 21, 24] }],
			}}
			width={screenWidth - 64}
			height={180}
			chartConfig={{
				backgroundColor: '#ffffff',
				backgroundGradientFrom: '#e8f5e9',
				backgroundGradientTo: '#c8e6c9',
				color: (opacity = 1) => `rgba(46, 125, 50, ${opacity})`,
				labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
				propsForDots: { r: '4' },
			}}
			bezier
			style={{ borderRadius: 12 }}
		/>
	);
};

export default YieldChart;