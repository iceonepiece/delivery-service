import React, { useState } from 'react';
import { Form, Button, Input, InputNumber, Switch } from 'antd';

import findPossibleRoutes from '../controllers/findPossibleRoutes_2';

const PossibleRoutesFinder = ({ graph }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [maxStops, setMaxStops] = useState(10);
  const [maxRepeats, setMaxRepeats] = useState(1);
  const [maxCost, setMaxCost] = useState(100);
  const [useMaxStops, setUseMaxStops] = useState(false);
  const [useMaxCost, setUseMaxCost] = useState(false);
  const [possibleRoutes, setPossibleRoutes] = useState([]);

  const find = () => {
    const options = { maxRepeats };

    if (useMaxStops) options.maxStops = maxStops;
    if (useMaxCost) options.maxCost = maxCost;

        console.log('options', options);

    const resultRoutes = findPossibleRoutes(graph, from, to, options);
    console.log(resultRoutes);
    setPossibleRoutes(resultRoutes);
  }

  return (
    <>
      <h2>Find Possible Routes</h2>
      <Form.Item label="From">
        <Input style={{ width: 200 }} value={from} onChange={e => setFrom(e.target.value.toUpperCase())}/>
      </Form.Item>
      <Form.Item label="To">
        <Input style={{ width: 200 }} value={to} onChange={e => setTo(e.target.value.toUpperCase())}/>
      </Form.Item>
      <Form.Item label="Max Repeats">
        <InputNumber defaultValue={1} value={maxRepeats} onChange={value => setMaxRepeats(value)}/>
      </Form.Item>
      <Form.Item label="Max Stops">
        <Switch onChange={value => setUseMaxStops(value)}/>
        <InputNumber disabled={!useMaxStops} defaultValue={10} value={maxStops} onChange={value => setMaxStops(value)}/>
      </Form.Item>
      <Form.Item label="Max Cos">
        <Switch onChange={value => setUseMaxCost(value)}/>
        <InputNumber disabled={!useMaxCost} defaultValue={100} value={maxCost} onChange={value => setMaxCost(value)}/>
      </Form.Item>
      <Button onClick={find}>Calculate</Button>
      <h1>Total Numbers: {possibleRoutes.length}</h1>
    </>
  )
}

export default PossibleRoutesFinder;
