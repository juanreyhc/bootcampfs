

import Header from './components/Header.jsx';
import JobsSearch from './components/JobsSearch.jsx';
import JobsResult from './components/JobsResult.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <>
      <Header />

      <main>
        <JobsSearch />
        <JobsResult />
      </main>

      <Footer />
    </>
  )
}

export default App