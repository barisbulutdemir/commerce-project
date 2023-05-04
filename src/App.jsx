
import './App.css'
import { Hero, Sales} from './components'
import { heroapi, popularsales, toprateslaes } from "./data/data.js";


function App() {


  return (
    <>
      <main className='flex flex-col gap-16 relative'>
          <Hero heroapi ={heroapi}   />

          {/* Neden 2 kere Sales kullandık ? Çünkü tek template üstünden 
          2 ayrı şey göstermek istiyoruz. Tekrar altta ayrı bir template oluşturmak istemiyoruz*/}
          <Sales endpoint = {popularsales} ifExists />
          {/* Yukarıda ki ifexists in sebebi: Bunu bi prop olarak gönderip,
           eğer papularsaleslar farklı bir biçimde olacaksa  if metoduna alıp ona göre ayarlayabiliriz */}

          <Sales endpoint = {toprateslaes }/>

    </main>
        </>
  )
}

export default App;
