import { useState } from 'react';
import RotateIcon from './main/RotateIcon';
import SpeedButton from './main/SpeedButton';
import '../StyleSheet/ControlPanel.css';

//HTML要素が返される。
function ControlPanel() {
  const [speed, setSpeed] = useState(1);
  return (
    <div className="control-panel">
      <RotateIcon speed={speed}/>
      <SpeedButton onSpeedUp={() => setSpeed(prev => prev + 1)}/>
    </div>
  );
}

export default ControlPanel;