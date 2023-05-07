
import { FlexContent, Footer, Hero, Navbar, Sales, Stories} from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker , story, footerAPI, } from "./data/data.js";


function App() {


  return (
    <>
      <main className='flex flex-col gap-16 relative'>
          <Navbar />
          <Hero heroapi ={heroapi}   />
          {/* Neden 2 kere Sales kullandık ? Çünkü tek template üstünden 
          2 ayrı şey göstermek istiyoruz. Tekrar altta ayrı bir template oluşturmak istemiyoruz*/}
          <Sales endpoint = {popularsales} ifExists />
          {/* Yukarıda ki ifexists in sebebi: Bunu bi prop olarak gönderip,
           eğer papularsaleslar farklı bir biçimde olacaksa  if metoduna alıp ona göre ayarlayabiliriz */}
          <FlexContent endpoint={highlight } ifExists />

          <Sales endpoint = {toprateslaes }/>
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
          <Footer footerAPI={footerAPI} />

    </main>
        </>
  )
}

export default App;
