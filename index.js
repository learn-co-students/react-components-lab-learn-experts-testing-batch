const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

class OlderCoaster extends React.Component {
    render() {
        const elements = React.createElement('div', {className: 'oldercoaster'}, [
            React.createElement('p', {}, 'Two grannies having the time of their life!'),
            React.createElement('p', {}, 'Passengers:'),
            React.createElement('ul', {}, [
                React.createElement('li', {}, 'Agnes'),
                React.createElement('li', {}, 'Muriel')
            ])
        ]);

        return elements;
    }
}

class InFrontOfYou extends React.Component {
    render() {
        const elements = React.createElement('div', {}, [
            React.createElement('p', {}, `You shouldn't look too far.`),
            React.createElement('p', {}, [
                'Sometimes, the solution is ',
                React.createElement('strong', {}, 'right in front of you.')
            ])
        ]);

        return elements;
    }
}

class ButcherShop extends React.Component {
    render() {
        const list = BUTCHER_PRODUCTS.map(item => React.createElement('li', {}, item));

        const elements = React.createElement('div', {className: 'butcher-shop'}, [
            React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
            React.createElement('ul', {}, list)
        ]);

        return elements;
    }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
