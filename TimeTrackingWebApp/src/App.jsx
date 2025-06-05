
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import OrgLogin from './Organization/js/01-orgLogin.jsx';
import OrgReg from './Organization/js/02-orgReg.jsx';
import Org from './Organization/js/03-orgDashboard.jsx';
import Dashboard from './Organization/js/04-dashboard.jsx';
import People from './Organization/js/05-people.jsx';
import AddEmp from './Organization/js/06-newEmp.jsx';
import Start from './Employee/js/Start.jsx';
import FaceDetect from './Employee/js/FaceDetect.jsx';
import EmpProfile from './Employee/js/EmpProfile.jsx';
import LiveTrack from './Employee/js/livetrack-pro.jsx';
import EmpLogin from './Employee/js/EmpLogin.jsx';


function Rout() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
      <>
      <BrowserRouter basename='final-year-project'>
        <Routes>
      <Route exact path="/" element={<Start/>} />
      <Route exact path="/orgDashboard" element={isAuthenticated ?<Org /> : <OrgLogin />}/>
        <Route exact path="/orgLogin" element={<OrgLogin />} />
        <Route exact path="/orgReg" element={<OrgReg />} />
        <Route exact path="/orgDashboard" element={<Org />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/people" element={<People />}/>
        <Route exact path="/newEmp" element={<AddEmp />} />
        <Route exact path="/Face-Detect" element={<FaceDetect />} />
        <Route exact path="/EmpProfile" element={<EmpProfile />} />
        <Route exact path="/liveTrack-pro" element={<LiveTrack />} />
        <Route exact path="/EmpLogin" element={<EmpLogin />} />
    </Routes>
    </BrowserRouter>
</>
  );
}

export default Rout;




