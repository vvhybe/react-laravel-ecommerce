import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router.jsx'
// SASS Styles
import './styles/app.scss';
import './styles/dashboard.scss';
import './styles/user.scss';
import './styles/userList.scss';
import './styles/featuredInfo.scss';
import './styles/sidebar.scss';
import './styles/topbar.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
