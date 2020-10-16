import React from 'react';
import { Link } from 'react-router-dom';

import { Bar } from './styles';

export default function Barra(props) {
  return (
    <Bar>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        {props.categoria && <li>/</li>}
        {props.categoria && (
          <li>
            <Link to="/dashboard">{props.categoria}</Link>
          </li>
        )}
        {props.modulo && <li>/</li>}
        {props.modulo && <li>{props.modulo}</li>}
        {props.tipo && <li>/</li>}
        {props.tipo && <li>{props.tipo}</li>}
        {/* {props.exercicio && <li>/</li>}
        {props.exercicio && <li>{props.exercicio}</li>} */}
        {props.pg && <li>/</li>}
        {props.pg && (
          <li>
            <Link to={`/${props.pgRota}`}>{props.pg}</Link>
          </li>
        )}
      </ul>
      <h3>Total: {props.nota ? props.nota.toFixed(1) : 0}%</h3>
    </Bar>
  );
}
