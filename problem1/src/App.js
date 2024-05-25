import React, { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [windowPrevState, setWindowPrevState] = useState('');
  const [windowCurrState, setWindowCurrState] = useState('');
  const [average, setAverage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE2NjE1MTA4LCJpYXQiOjE3MTY2MTQ4MDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIyNTFjNGJiLTg5YmYtNDAzNi04YzQzLTg0YWQ1NmJkNTc2ZSIsInN1YiI6InZlbWFuYWpheWFrcmlzaG5hY2hhbmRyYUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTcmkgVmVua2F0ZXN3YXJhIENvbGxlZ2Ugb2YgRW5naW5lZXJpbmciLCJjbGllbnRJRCI6IjIyNTFjNGJiLTg5YmYtNDAzNi04YzQzLTg0YWQ1NmJkNTc2ZSIsImNsaWVudFNlY3JldCI6IkpYVVVWSXNVZ0N0SmVYcUoiLCJvd25lck5hbWUiOiJWZW1hbmEgSmF5YSBLcmlzaG5hIGNoYW5kcmEiLCJvd25lckVtYWlsIjoidmVtYW5hamF5YWtyaXNobmFjaGFuZHJhQGdtYWlsLmNvbSIsInJvbGxObyI6IjIxQkYxQTA1SDYifQ.UTQYK7xPlU9EDo4uhTP3yNQUoIlVruYpjB2TgD7jDTw';

  const fetchNumbers = (numberType) => {
    setLoading(true);
    fetch(`http://20.244.56.144/test/${numberType}`, { 
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWindowPrevState(data.windowPrevState || '');
        setWindowCurrState(data.windowCurrState || '');
        setNumbers(data.numbers || []);
        setAverage(data.avg || 0);
        setError('');
      })
      .catch((error) => {
        setError('Error fetching data from server.');
        console.error('Fetch Error:', error);
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberType = event.target.elements.numberType.value;
    fetchNumbers(numberType);
  };

  return (
    <div className="App">
      <h1>Average Calculator Microservice</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Fetch Numbers:
          <select name="numberType">
            <option value="primes">Prime</option>
            <option value="fibo">Fibonacci</option>
            <option value="even">Even</option>
            <option value="rand">Random</option>
          </select>
        </label>
        <button type="submit" disabled={loading}>
          Fetch
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ResponseDisplay
          windowPrevState={windowPrevState}
          windowCurrState={windowCurrState}
          numbers={numbers}
          average={average}
        />
      )}
    </div>
  );
};

const ResponseDisplay = ({ windowPrevState, windowCurrState, numbers, average }) => (
  <div>
    <h2>Response</h2>
    <h3>Window Previous State:</h3>
    <pre>{JSON.stringify(windowPrevState, null, 2)}</pre>
    <h3>Window Current State:</h3>
    <pre>{JSON.stringify(windowCurrState, null, 2)}</pre>
    <h3>Numbers:</h3>
    <pre>{JSON.stringify(numbers, null, 2)}</pre>
    <h3>Average:</h3>
    <p>{average}</p>
  </div>
);

export default App;
