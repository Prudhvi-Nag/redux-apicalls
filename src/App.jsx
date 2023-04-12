import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/action';
import Table from './components/table';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>API Calls in Table Using React-Redux</h1>
      <Table />
    </div>
  );
};

export default App;