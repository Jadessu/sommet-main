import Head from 'next/head';
import
 { Analytics } 
from
 
'@vercel/analytics/react'
;
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
    <title>Sommet Digital</title>
<meta name="description" content="Agence de marketing digital au Togo offrant la conception de sites Web, le référencement, la gestion des médias sociaux, le marketing par e-mail et la création de contenu."/>

{/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content="Sommet Digital"/>
<meta itemprop="description" content="Agence de marketing digital au Togo offrant la conception de sites Web, le référencement, la gestion des médias sociaux, le marketing par e-mail et la création de contenu."/>
<meta itemprop="image" content="/images/sm.jpg"/>

{/* <!-- Facebook Meta Tags --> */}
<meta property="og:url" content="https://sommet.vercel.app"/>
<meta property="og:type" content="website"/>
<meta property="og:title" content="Sommet Digital"/>
<meta property="og:description" content="Agence de marketing digital au Togo offrant la conception de sites Web, le référencement, la gestion des médias sociaux, le marketing par e-mail et la création de contenu."/>
<meta property="og:image" content="/images/sm.jpg"/>

 {/* Twitter Meta Tags  */}
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Sommet Digital"/>
<meta name="twitter:description" content="Agence de marketing digital au Togo offrant la conception de sites Web, le référencement, la gestion des médias sociaux, le marketing par e-mail et la création de contenu."/>
<meta name="twitter:image" content="/images/sm.jpg"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    </Head>
    <Component {...pageProps} />
    <Analytics/>
  </>
);

export default MyApp;
