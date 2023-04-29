// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
import './App.css';
// import Login from './pages/login/Login';
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
// import SwitchLanguage from './components/switchLanguage/SwitchLanguage';
// import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext';
import Layout from './components/Layout/layout';
import SignUp from './pages/sign-up/signUp';
import SignIn from './pages/sign-in/signIn';
import MainPage from './pages/main-page/mainPage';
import {  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/signin" element={(
          <Layout>
        <SignIn />
        </Layout>
        )
        } />
        <Route path="/signup" element={(
        <Layout>
        <SignUp/>
        </Layout>
        )
        } />
  
        <Route path="/" element={(
          <Layout>
        <MainPage /> 
        </Layout>
        
        )}
        />

      </>
    )
  );


  function App() {

    // const [language, setLanguage] = useState('ge');
    const [theme, setTheme] = useState('light');
  
    return (
    
      <ThemeContext.Provider value = {{theme, setTheme}}>
  
        <RouterProvider router={router} />;
      </ThemeContext.Provider>
  
    );
  }
  
  export default App;
  
