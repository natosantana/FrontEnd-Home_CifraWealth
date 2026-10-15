import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Wealthy } from './pages/Wealthy';
import { Produtos } from './pages/Produtos';
import { Duvidas } from './pages/Duvidas';
import { SiteHeader } from './components/site/SiteHeader';
import { SiteFooter } from './components/site/SiteFooter';
import './styles/App.css';

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
      <SiteHeader />
      <div id="conteudo-principal" className="site-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wealthy" element={<Wealthy />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="*" element={<main className="not-found section-frame"><span className="section-kicker">PÁGINA NÃO ENCONTRADA</span><h1>Este caminho não está disponível.</h1><p>Volte ao início ou explore os recursos da CifraWealth.</p><div><Link to="/" className="button-quiet">Voltar ao início <span aria-hidden="true">→</span></Link><Link to="/produtos" className="button-primary">Conhecer recursos <span aria-hidden="true">↗</span></Link></div></main>} />
        </Routes>
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
