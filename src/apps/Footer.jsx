function Footer() {
  return (
    <footer style={footer}>
      <p style={footerp}>©2023 REACT CRM APP</p>
    </footer>
  );
}

// Style

const footer = {
  position: "relative",
  padding: "10px 50px",
  background: "#201a30",
};

const footerp = {
  color: "#ecd800",
  textAlign: "center",
  marginTop: "15px",
  fontSize: "1.1em",
};

export default Footer;
