import './App.css'
import { GenerateReportComponent } from './components/GenerateReportComponent'
import { GetReportsComponent } from './components/GetReportsComponent'
import { UserReportsComponent } from './components/UserReportsComponent'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/HomeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />}/>
        <Route path="/generate-report" element={<GenerateReportComponent />}/>
        <Route path="/reports" element={<GetReportsComponent />}/>
        <Route path="/user-reports" element={<UserReportsComponent />}/>
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
