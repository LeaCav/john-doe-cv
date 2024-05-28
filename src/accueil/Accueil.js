import Header from '../Header'
import MainAccueil from '../accueil/MainAccueil';

function Accueil() {
  return (
    <div className="Accueil">
      <header className="Acc-header">
        <Header/>
      </header>
      <main className="Acc-main">
        <MainAccueil/>
      </main>
    </div>
  );
}

export default Accueil;
