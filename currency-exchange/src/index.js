import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import "./styles.css"
import Header from './header';
import Body from './body';

const App = () => {
    return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>Назва валюти</th>
            <th>Код валюти</th>
            <th>Вартість валюти</th>
          </tr>
        </thead>
        <tbody id="tableBody"></tbody>
      </table>
      <Body />
    </div>
    );
};

const app = ReactDOMClient.createRoot(document.getElementById('root'))

app.render(<App />)