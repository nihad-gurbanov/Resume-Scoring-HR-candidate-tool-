import './App.css'
import { GenerateReportComponent } from './components/GenerateReportComponent'
import { GetReportsComponent } from './components/GetReportsComponent'
import { UserReportsComponent } from './components/UserReportsComponent'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/HomeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent'
import SignInComponent from './components/SignInComponent'
import SignUpComponent from './components/SignUpComponent'
import ScoreResume from './components/ScoreResume'
import CardsComponent from './components/CardsComponent'
import UserCardsComponent from './components/UserCardsComponent'
import HrCardsComponent from './components/HrCardsComponent'
import UpdateResumeComponent from './components/UpdateResumeComponent'

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
        <Route path="/sign-in" element={<SignInComponent />}/>
        <Route path="/sign-up" element={<SignUpComponent />}/>
        <Route path="/score-resume" element={<ScoreResume />}/>
        <Route path="/profile" element={<CardsComponent />}/>
        <Route path="/user-features" element={<UserCardsComponent />}/>
        <Route path="/hr-features" element={<HrCardsComponent/>}/>
        <Route path="/update-resume" element={<UpdateResumeComponent />} />

      </Routes>
      <FooterComponent />

    </BrowserRouter>

    </>
  )
}

export default App
