import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyForm from './MyForm';
// import RadiumButton from './RadiumButton';
// import UserProfile from './Userprofile';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';
import App from './App';
// import App from './App';

// import SetTimeout from './SetTimeout';
// import BasicButtons from './components/Button';
// import Layout from './Layout';
// <Layout>
// <div className='flexBox'>
//   <BasicButtons text="Click Me" variant="contained" size="large" bgColor="black" hColor="grey" font="5px"/>
//   <BasicButtons text="Click Me" variant="contained" size="medium" color="success" font="15px"/>
//   <BasicButtons text="Click Me" variant="contained" size="small" color="secondary" font="25px"/>
// </div>
// </Layout>
// <SetTimeout/>
// <RadiumButton text="Radium">Radium Button</RadiumButton>
// <UserProfile name="John Doe" age={30} bio="Developer and tech enthusiast." />
// <UserProfile name="Jane Smith" />

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flexBox'>
  <ErrorBoundary>
    <App/>
  </ErrorBoundary>
  </div>
);
