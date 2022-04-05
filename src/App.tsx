import SearchComponent from 'components/mainpage/search'
import TokensComponent from 'components/mainpage/tokens'
import { Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/navbar'

function App() {
  return (
    <div className="app">
      <NavbarComponent />
      <Routes>
        <Route element={<TokensComponent />} path="/" caseSensitive={true} />
        <Route element={<SearchComponent />} path="/search" />
      </Routes>
    </div>
  )
}

export default App
