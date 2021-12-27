const Button = ({ text, icon, clicked, filled }) => {
  return (
    <div
      onClick={clicked}
      style={{
        border: "1px solid #AB4E68",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 5,
        margin: 10,
        width: 200,
        height: 40,
        backgroundColor: filled ? "#FF595E" : "transparent",
        color: filled ? "#ffffff" : "#AB4E68",
      }}
    >
      <h5>{text}</h5>
      {icon}
    </div>
  );
};

export default Button;
