import React, { useEffect, Suspense } from 'react';
import Garfish from 'garfish';

const App = () => {
  useEffect(async () => {
    // docs: https://garfish.top/
    const app = await Garfish.loadApp('app2', {
      entry: 'http://localhost:3002',
      basename: '/',
      domGetter: '#container',
      sandbox: {
        fixBaseUrl: true,
      },
      props: {
        msg: 'hello world',
      },
    });
    await app.mount();
  });

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'greenyellow',
      }}
    >
      <h1>Main App</h1>
      <div id="container"></div>
    </div>
  );
};

export default App;
