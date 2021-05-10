// TODO
var GroceryList = (prop) => (
  <ul>
    {prop.groceries.map((item, i) =>
      <GroceryList key={i} item={item}/>
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceries={['Eggs', 'Veggies']}/>
  </div>
);