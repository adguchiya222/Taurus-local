import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './DashboardLayoutBootstrap.css';

const NAVIGATION = [
  { kind: 'header', title: 'Main Items' },
  { segment: 'dashboard', title: 'Dashboard', icon: 'bi bi-speedometer2' },
  { segment: 'orders', title: 'Orders', icon: 'bi bi-cart-fill' },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  {
    segment: 'reports',
    title: 'Reports',
    icon: 'bi bi-bar-chart',
    children: [
      { segment: 'sales', title: 'Sales', icon: 'bi bi-graph-up' },
      { segment: 'traffic', title: 'Traffic', icon: 'bi bi-activity' },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: 'bi bi-link-45deg',
    children: [
      { segment: 'report', title: 'Report', icon: 'bi bi-file-earmark-bar-graph' },
      { segment: 'function', title: 'Function', icon: 'bi bi-function' },
    ],
  },
  { segment: 'document', title: 'Document', icon: 'bi bi-file-earmark-text' },
];

export default function DashboardLayoutBootstrap() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPath, setCurrentPath] = useState('/dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const navigate = (path) => setCurrentPath(path);

  return (
    <div className={`d-flex ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'open' : ''} bg-dark text-light p-3`}>
        <button
          className="btn btn-link text-light sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {sidebarOpen ? <i className="bi bi-chevron-left"></i> : <i className="bi bi-chevron-right"></i>}
        </button>
        <div>
          {NAVIGATION.map((item, index) => {
            if (item.kind === 'header') {
              return <h6 key={index} className="mt-3">{item.title}</h6>;
            }
            if (item.kind === 'divider') {
              return <hr key={index} className="text-light" />;
            }
            if (item.children) {
              return (
                <div key={item.segment} className="mb-3">
                  <h6>{item.title}</h6>
                  <ul className="nav flex-column">
                    {item.children.map((child) => (
                      <li key={child.segment} className="nav-item">
                        <button
                          className={`btn btn-link nav-link text-light ${currentPath === child.segment ? 'active' : ''}`}
                          onClick={() => navigate(child.segment)}
                        >
                          <i className={child.icon}></i> {child.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return (
              <button
                key={item.segment}
                className={`btn btn-link nav-link text-light ${currentPath === item.segment ? 'active' : ''}`}
                onClick={() => navigate(item.segment)}
              >
                <i className={item.icon}></i> {item.title}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <div className={`flex-grow-1 ${sidebarOpen ? 'content-open' : 'content-closed'}`}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
          <button className="btn btn-outline-primary" onClick={toggleTheme}>
            {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>} Toggle Theme
          </button>
          <span className="navbar-brand ms-3">Dashboard</span>
        </nav>

        {/* Page Content */}
        <div className="container mt-4">
          <h2>{currentPath === '/dashboard' ? 'Welcome to the Dashboard' : `Viewing: ${currentPath}`}</h2>
          <div className="row g-3">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card {index + 1}</h5>
                    <p className="card-text">This is a placeholder for content.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
