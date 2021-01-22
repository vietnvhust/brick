import StyledGlobals from 'assets/css/styledGlobals';
import Header from 'components/ui/header/Header';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import MainRouter from 'routers/Main.router';
const App = () => {
  return (
    <Router>
      <StyledGlobals />
      <Header />
      <main>
        <MainRouter />
      </main>
    </Router>
  );
}
export default App;