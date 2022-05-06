import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Garfish from 'garfish';


const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>Main App</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/">React-App</Link> | 
          <Link to="/vite-App">Vite-App</Link> |{' '}
        </nav>
        <Routes>
          <Route path="/" element={<ReactApp />} />
          <Route path="vite-App" element={<ViteApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

function ReactApp () {
  useEffect(async () => {
    // docs: https://garfish.top/
    const app = await Garfish.loadApp('react-app', {
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
    app.mounted ? app.show() : await app.mount();
    return ()=>{
      app.hide();
    }
  });
  return <div id="container"></div>
}

function ViteApp () {
  useEffect(async () => {
    // docs: https://garfish.top/
    const app = await Garfish.loadApp('vite-app', {
      entry: 'http://localhost:3003',
      basename: '/',
      domGetter: '#container',
      sandbox: false,
      props: {
        msg: 'hello world',
      },
    });
    app.mounted ? app.show() : await app.mount();
    return ()=>{
      app.hide();
    }
  });
  return <div id="container"></div>
}

export default App;
