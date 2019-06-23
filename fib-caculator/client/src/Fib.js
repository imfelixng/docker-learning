import React from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = React.useState([]);
  const [values, setValues] = React.useState({});
  const [index, setIndex] = React.useState('');

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  }

  const fetchIndexes = async () => {
    const seenIndexes = await axios.get('/api/values/all');
    setSeenIndexes(seenIndexes.data);
  }

  React.useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const renderSeenIndexes = () => {
    return seenIndexes.map(({number}) => number).join(', ')
  }

  const rendervalues = () => {
    const entries = [];
    for (let key in values) {
      entries.push(
        (
          <div key = { key }>
            For index { key } I calculated { values[key] }
          </div>
        )
      )
    }
    return entries;
  }

  const handleChange = e => {
    setIndex(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/values', { index });
    setIndex('');
  }

  return (
    <div>
      <form
        onSubmit = { handleSubmit }
      >
        <label>Enter your index: </label>
        <input type = "number"
          value = { index }
          onChange = { handleChange }
        />
        <button type = "submit">Submit</button>
      </form>
      <h3>Indexes I have seen: </h3>
      {
        renderSeenIndexes()
      }
      <h3>Calculated values:</h3>
      {
        rendervalues()
      }
    </div>
  )
};

export default Fib;