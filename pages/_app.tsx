import '../css/styles.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
import { Lang, LangContext } from '../hooks/useLang'
import { getTitle } from '../utils/getTitle';

function MyApp({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<Lang>(Lang.en);
  const title = getTitle(lang);
  return (
    <LangContext.Provider value={[lang, setLang]}>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description"
            content="Federal election results for Canada displayed visually in a cartogram map which emphasizes population distribution rather than vast, empty spaces. Each electoral district is represented by a single hexagon of the same size."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    </LangContext.Provider>
  )
}

export default MyApp
