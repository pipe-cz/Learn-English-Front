import { HashRouter, Route, Routes } from "react-router-dom"
import Header from "./comoponents/header/Header"
import { Suspense } from "react"
import Footer from "./comoponents/footer/Footer"
import Main from "./comoponents/main/main/Main"
import Register from "./comoponents/Auth/register/Register"
import Login from "./comoponents/Auth/login/Login"
import "./App.css"
import Resources from "./comoponents/menuActions/resourcesUtil/resouserces/Resources"
// import Recommendations from "./comoponents/menuActions/recommendations/Recommendations"
import Evaluations from "./comoponents/menuActions/evaluations/Evaluations"
import MainMenu from "./comoponents/main/mainMenu/MainMenu"
import MainRight from "./comoponents/main/mainRight/MainRight"
import Stats from "./comoponents/stats/Stats"
import Contact from "./comoponents/contact/Contact"
import AboutUs from "./comoponents/aboutUs/AboutUs"
import { publics, privates } from "./routes/routes"
import Words from "./comoponents/menuActions/words/words/Words"
import Read from "./comoponents/menuActions/resourcesUtil/read/Read"
import Listen from "./comoponents/menuActions/resourcesUtil/listen/Listen"
import Exersices from "./comoponents/menuActions/exercises/exercises/Exercises"
import MemoryGame from "./comoponents/menuActions/exercises/memoryGame/MemoryGame"
import RelationGame from "./comoponents/menuActions/exercises/relationGame/RelationGame"
import WriteGame from "./comoponents/menuActions/exercises/writeGame/WriteGame"
import Translator from "./comoponents/menuActions/resourcesUtil/translator/Translator"
import AuthGuardPrivate from "./guards/auth.guard"
import Profile from "./comoponents/main/profile/Profile"
// const Footer = lazy(() => import("./components/footer/Footer"))
// const Main = lazy(() => import("./components/main/Main"))
// const Register = lazy(() => import("./components/Auth/register/Register"))
// const Login = lazy(() => import("./components/Auth/login/Login"))

function App() {
  return (
    <div className="page-container">
      <Suspense fallback={<>Cargando...</>}>
        <HashRouter>
          <main className="content-wrap">
            <Header />
            <div className="main-container">
              <MainMenu />
              <Routes>
                <Route element={<AuthGuardPrivate />}>
                  <Route
                    path={privates.EVALUATIONS}
                    element={<Evaluations />}
                  />
                  <Route path={privates.PROFILE} element={<Profile />} />
                  <Route path={privates.STATS} element={<Stats />} />
                </Route>

                <Route path={publics.HOME} element={<Main />} />
                <Route path={publics.ABOUTUS} element={<AboutUs />} />
                <Route path={publics.CONTACT} element={<Contact />} />
                <Route path={publics.LOGIN} element={<Login />} />
                <Route path={publics.REGISTER} element={<Register />} />
                <Route path={publics.EXERSICES} element={<Exersices />} />
                <Route
                  path={publics.EXERSICES + publics.MEMORY}
                  element={<MemoryGame />}
                />
                <Route
                  path={publics.EXERSICES + publics.RELATION}
                  element={<RelationGame />}
                />
                <Route
                  path={publics.EXERSICES + publics.WRITE}
                  element={<WriteGame />}
                />
                {/* <Route
                  path={privates.RECOMMENDATIONS}
                  element={<Recommendations />}
                /> */}
                <Route path={publics.RESOURCES} element={<Resources />} />
                <Route
                  path={publics.RESOURCES + publics.READ}
                  element={<Read />}
                />
                <Route
                  path={publics.RESOURCES + publics.LISTEN}
                  element={<Listen />}
                />
                <Route
                  path={publics.RESOURCES + publics.TRANSLATE}
                  element={<Translator />}
                />
                <Route path={publics.WORDS} element={<Words />} />
              </Routes>
              <MainRight />
            </div>
          </main>
        </HashRouter>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
