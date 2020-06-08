import React from 'react';
import { Tabs } from 'antd';

import 'antd/dist/antd.css';
import './index.css';

import RouteCostCalculator from './components/RouteCostCalculator';
import PossibleRoutesFinder from './components/PossibleRoutesFinder';
import CheapestRouteFinder from './components/CheapestRouteFinder';

function App() {
  const graph = {
    A: { B: 1, C: 4, D: 10 },
    B: { E: 3 },
    C: { D: 4, F: 2 },
    D: { E: 1 },
    E: { B: 3, A: 2 },
    F: { D: 1 },
  };

  return (
    <div style={{ width: 800, margin: 25 }}>
      <h1>Delivery Service</h1>
      <Tabs >

        <Tabs.TabPane tab="Calculate Route Cost" key="1">
          <RouteCostCalculator graph={graph} />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Find Possible Routes" key="2">
          <PossibleRoutesFinder graph={graph} />
        </Tabs.TabPane>

        <Tabs.TabPane tab="Find Cheapest Route" key="3">
          <CheapestRouteFinder graph={graph} />
        </Tabs.TabPane>

      </Tabs>
    </div>
  );
}

export default App;
