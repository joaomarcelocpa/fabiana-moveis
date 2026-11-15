import { useState } from 'react'
import { PedidoProvider } from './context/PedidoContext'
import { CatalogoDialog } from './components/CatalogoDialog'
import { CreditosDialog } from './components/CreditosDialog'
import { ActionBar } from './components/layout/ActionBar'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Ambientes } from './components/sections/Ambientes'
import { ComoComprar } from './components/sections/ComoComprar'
import { FaixaCta } from './components/sections/FaixaCta'
import { Hero } from './components/sections/Hero'
import { Pagamento } from './components/sections/Pagamento'
import { Produtos } from './components/sections/Produtos'
import { Sobre } from './components/sections/Sobre'
import { WhatsApp } from './components/sections/WhatsApp'

export default function App() {
  const [creditosAbertos, setCreditosAbertos] = useState(false)

  return (
    <PedidoProvider>
      <div className="tablet:pb-[76px]">
        <a
          href="#conteudo"
          className="absolute -top-[60px] left-4 z-[100] rounded-lg bg-ink px-4 py-2.5 text-white focus:top-3"
        >
          Ir para o conteúdo
        </a>

        <Header />
        <main id="conteudo">
          <Hero />
          <Produtos />
          <Sobre />
          <Ambientes />
          <ComoComprar />
          <Pagamento />
          <WhatsApp />
          <FaixaCta />
        </main>
        <Footer aoAbrirCreditos={() => setCreditosAbertos(true)} />
        <ActionBar />
      </div>

      <CatalogoDialog />
      <CreditosDialog aberto={creditosAbertos} aoFechar={() => setCreditosAbertos(false)} />
    </PedidoProvider>
  )
}
