function SpeedButton({ onSpeedUp }) {
  return (
    <div className="Button-container">
        <button className="Speed-button" onClick={onSpeedUp}>スピードアップ</button>
        <div className="Speed-text">スピード</div>
        <div className="Speed-value">1.0x</div>
    </div>
  );
}


export default SpeedButton;