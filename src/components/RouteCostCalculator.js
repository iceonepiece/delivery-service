import React, { useState } from 'react';
import { Form, Button, Input } from 'antd';

import calculateRouteCost from '../controllers/calculateRouteCost';

const RouteCostCalculator = ({ graph }) => {
  const [deliveryRoute, setDeliveryRoute] = useState('');
  const [routeCost, setRouteCost] = useState(null);

  const calculate = () => {
    const cost = calculateRouteCost(graph, deliveryRoute.split(''));
    setRouteCost(cost);
  }

  return (
    <>
      <h2>Calculate Route Cost</h2>
      <Form.Item label="Enter the route e.g. (AD, EACF)">
        <Input style={{ width: 200 }} value={deliveryRoute} onChange={e => setDeliveryRoute(e.target.value.toUpperCase())}/>
      </Form.Item>
      <Button onClick={calculate}>Calculate</Button>
      {routeCost && <h1>Total Cost: {routeCost}</h1>}
    </>
  );
}

export default RouteCostCalculator;
