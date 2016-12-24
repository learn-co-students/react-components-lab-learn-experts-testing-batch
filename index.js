const el = React.createElement

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  name: 'Grannies',
  render() {
    return (
      el('div', {className: 'oldercoaster'},
        el('p', {key: 0}, 'Two grannies having the time of their life!'), 
        el('p', {key: 1}, 'Passengers:'), 
        el('ul', {key: 2}, 
          el('li', {key: 3}, 'Agnes'), 
          el('li', {key: 4}, 'Muriel')
        )
      )
    )
  }
})


class InFrontOfYou extends React.Component {
  render() {
    return (
      el('div', {}, 
        el('p', {key: 0}, "You shouldn't look too far."), 
        el('p', {key: 1}, 
          'Sometimes, the solution is ', 
          el('strong', {key:2}, 'right in front of you.')
        )
      )
    )
  }
}

class ButcherShop extends React.Component {
  render() {
    return (
      el('div', {className: 'butcher-shop'}, 
        el('p', {key: 0}, 'Hello! We have the following products for sale today:'),
        el('ul', {key: 1}, 
          BUTCHER_PRODUCTS.map(function(meat, index){
            return el('li', {key: index + 2}, meat)
          })
        )
      )
    )
  }
}

ReactDOM.render(
  el('div', {}, [
    el(OlderCoaster, {key: 0}),
    el(InFrontOfYou, {key: 1}),
    el(ButcherShop, {key: 2})
  ]),
  document.getElementById('main')
);
