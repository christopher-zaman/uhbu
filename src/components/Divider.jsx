const Divider = ({
  width = "200px",
  color = "#040677",
  style = "dotted",
  thickness = "7.8px",
  centered = true,
  aos = "",
  aosDelay = "",
  aosDuration = "",
  customClass = "" // 👈 new prop
}) => (
  <div
    data-aos={aos || undefined}
    data-aos-delay={aosDelay || undefined}
    data-aos-duration={aosDuration || undefined}
    className={customClass}
    style={{
      borderBottom: `${thickness} ${style} ${color}`,
      width,
      marginTop: "10px",
      marginBottom: "10px",
      marginLeft: centered ? "auto" : 0,
      marginRight: centered ? "auto" : 0,
    }}
  />
);

export default Divider;
