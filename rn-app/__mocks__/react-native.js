const React = require('react');

const Dimensions = {
	get: () => ({ width: 400, height: 800 })
};

const Platform = {
	OS: 'web',
	select: (obj) => obj.web || obj.default
};

const StyleSheet = {
	create: (styles) => styles,
	flatten: (styles) => styles,
};

module.exports = new Proxy({ Dimensions, Platform, StyleSheet }, {
	get: (target, prop) => {
		if (prop in target) return target[prop];
		if (prop === 'View' || prop === 'Text') {
			return (props) => React.createElement('div', props, props.children);
		}
		return () => null;
	}
});