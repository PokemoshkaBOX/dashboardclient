import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartBar,
  faUniversity,
  faCalendarAlt,
  faUsers,
  faUserGraduate,
  faGlobe,
  faMap,
  faBars,
  faTimes,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import {
  APPLICANTS_ROUTE, DJANGO_ROUTE,
  FACULTY_ROUTE,
  HOME_ROUTE,
  MONITOR_ROUTE, RUSSIA_ROUTE,
  STUDENTS_ROUTE, WORLD_ROUTE,
  YEAR_ROUTE
} from "../../utils/consts";
const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {sidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <nav>
        <Link to={HOME_ROUTE}>
          <FontAwesomeIcon icon={faHome} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Home'}</span>
        </Link>
        <Link to={MONITOR_ROUTE}>
          <FontAwesomeIcon icon={faChartBar} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Monitor'}</span>
        </Link>
        <Link to={FACULTY_ROUTE}>
          <FontAwesomeIcon icon={faUniversity} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Faculty'}</span>
        </Link>
        <Link to={YEAR_ROUTE}>
          <FontAwesomeIcon icon={faCalendarAlt} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Year'}</span>
        </Link>
        <Link to={APPLICANTS_ROUTE}>
          <FontAwesomeIcon icon={faUsers} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Applicants'}</span>
        </Link>
        <Link to={STUDENTS_ROUTE}>
          <FontAwesomeIcon icon={faUserGraduate} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Students'}</span>
        </Link>
        <Link to={RUSSIA_ROUTE}>
          <FontAwesomeIcon icon={faGlobe} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Russia'}</span>
        </Link>
        <Link to={WORLD_ROUTE}>
          <FontAwesomeIcon icon={faMap} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'World'}</span>
        </Link>
        <Link to={DJANGO_ROUTE}>
          <FontAwesomeIcon icon={faDatabase} /><span style={{ marginLeft: '5px' }}>{sidebarOpen && 'Django'}</span>
        </Link>
      </nav>
    </div>
  );
};

export default SidebarMenu;
