import { Header } from './components/header'
import { DataProvider } from './hooks/use-data'
import { Home } from './views/home'

function App() {
  return (
    <DataProvider>
      <Header />
      <Home />
    </DataProvider>
  )
}

export default App
