import React from 'react';
import Tags from './Tags';

const data = require('../../data/data.json');

export default function Hosting() {
  const host = data.host;
  return (
    <div className="hosting">
      <div className="hosting-left">
        <h3>{data.title}</h3>
        <span className="location">{data.location}</span>
        <Tags />
      </div>
      <div className="hosting-right">
        <div className="host">
          <span className="host-name">{host.name}</span>
          <img src="" alt="" />
        </div>
        <div className="rating">{/* stars */}</div>
      </div>
    </div>
  );
}