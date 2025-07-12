import logo from '../../logo.svg';
import '../../StyleSheet/RotateIcon.css';
function RotateIcon({ speed }) {
  return (
    <img src={logo} className="logo" alt="logo" 
    style={{ animation: `logo-spin ${100 / speed}s linear infinite` }}/>
  );
}


export default RotateIcon;