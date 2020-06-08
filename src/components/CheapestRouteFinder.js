import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import findCheapestRoute from '../controllers/findCheapestRoute';

const CheapestRouteFinder = ({ graph }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [cheapestRoute, setCheapestRoute] = useState(null);

  const find = () => {
    const route = findCheapestRoute(graph, from, to);
    setCheapestRoute(route);
  }

  return (
    <>
      <h2>Find Cheapest Route</h2>
      <Form.Item label="From">
        <Input style={{ width: 200 }} value={from} onChange={e => setFrom(e.target.value)}/>
      </Form.Item>
      <Form.Item label="To">
        <Input style={{ width: 200 }} value={to} onChange={e => setTo(e.target.value)}/>
      </Form.Item>
      <Button onClick={find}>Calculate</Button>
      {cheapestRoute && <h1>Cheapest Cost: {cheapestRoute.cost}</h1>}
    </>
  )
}

export default CheapestRouteFinder;
