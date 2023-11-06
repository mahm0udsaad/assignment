import './App.css'
import MaterialUIForm from './components/form'
import { Dashboard } from './components/main'
import { NavBar } from './components/navBar'

function App() {

  return (
    <>
    <div className="bg-slate-50">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <NavBar />
        <Dashboard />       
      </div>
    </div>
    </>
  )
}

export default App
