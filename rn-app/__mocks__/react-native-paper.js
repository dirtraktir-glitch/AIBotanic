const React = require('react');

const Provider = ({ children }) => React.createElement(React.Fragment, null, children);
const Text = ({ children }) => React.createElement('span', null, children);
const Button = ({ children, onPress }) => React.createElement('button', { onClick: onPress }, children);

const CardBase = ({ children, style }) => React.createElement('div', { style }, children);
CardBase.Title = ({ title, subtitle }) => React.createElement('div', null, `${title}${subtitle ? ' - ' + subtitle : ''}`);
CardBase.Content = ({ children }) => React.createElement('div', null, children);
CardBase.Actions = ({ children }) => React.createElement('div', null, children);

module.exports = {
	Provider,
	Text,
	Button,
	Card: CardBase,
};