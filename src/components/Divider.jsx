const Divider = ({ width = "200px", color = "#040677", style = "dotted", thickness = "7.8px", centered = true}) => (
  <div
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