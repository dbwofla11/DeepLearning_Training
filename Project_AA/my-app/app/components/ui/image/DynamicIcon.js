const BASE_ICON_SIZE = 48;

export const DynamicIcon = ({ icon, size = BASE_ICON_SIZE }) => {
  if (!icon) return null;

  const scale = size / BASE_ICON_SIZE;
  const style = {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    transform: `scale(${scale})`,
    transformOrigin: "50% 50%",
  };

  return (
    <div style={style}>
      <img
        src={`/assets/images/icons/${icon}`}
        alt={icon}
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default DynamicIcon;