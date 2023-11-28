import React from 'react'
import localFont from 'next/font/local'
import './global.css'

const zichtbaar = localFont({
  src: [
    {
      path: '../fonts/Zichtbaar-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Zichtbaar-Medium.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
})

const App = ({ Component, pageProps }) => {
  return (
    <main className={zichtbaar.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
