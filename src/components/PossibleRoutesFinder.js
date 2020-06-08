import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import findPossibleRoutes from '../controllers/findPossibleRoutes';

const PossibleRoutesFinder = ({ graph }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [maxStops, setMaxStops] = useState('');
  const [maxRepeats, setMaxRepeats] = useState(1);
  const [maxCost, setMaxCost] = useState('');
  const [possibleRoutes, setPossibleRoutes] = useState([]);

  const find = () => {
    const options = {
      maxStops: maxStops === '' ? undefined : maxStops,
      maxRepeats: maxRepeats === '' ? undefined : maxRepeats,
      maxCost: maxCost === '' ? undefined : maxCost,
    };

    const resultRoutes = findPossibleRoutes(graph, from, to, options);
    console.log(resultRoutes);
    setPossibleRoutes(resultRoutes);
  }

  return (
    <>
      <h2>Find Possible Routes</h2>
      <Form.Item label="From">
        <Input style={{ width: 200 }} value={from} onChange={e => setFrom(e.target.value)}/>
      </Form.Item>
      <Form.Item label="To">
        <Input style={{ width: 200 }} value={to} onChange={e => setTo(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Max Stops (0 means Infinity)">
        <Input style={{ width: 200 }} value={maxStops} onChange={e => setMaxStops(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Max Repeats">
        <Input style={{ width: 200 }} value={maxRepeats} onChange={e => setMaxRepeats(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Max Cost (0 means Infinity)">
        <Input style={{ width: 200 }} value={maxCost} onChange={e => setMaxCost(e.target.value)}/>
      </Form.Item>
      <Button onClick={find}>Calculate</Button>
      <h1>Total Numbers: {possibleRoutes.length}</h1>
    </>
  )
}

export default PossibleRoutesFinder;
