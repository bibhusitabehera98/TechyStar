import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffffff",
        height: "200px",
        width: "100%",
        color: "#2c2c2c",
        display: "grid",
        gridTemplateColumns: "4fr 1fr",
        paddingTop: "7rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "2rem",
            fontFamily: "Roboto",
            textTransform: "uppercase",
            color: "#5853ff",
          }}
        >
          TechyStar
        </h1>
        <p
          style={{
            fontWeight: "500",
            fontSize: "1.2rem",
            fontFamily: "Roboto",
          }}
        >
          @all right reserved
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h5
          style={{
            fontWeight: "300",
            fontSize: "2rem",
            fontFamily: "Roboto",
            margin: "1rem 0",
            textAlign: "center",
          }}
        >
          Follow Us
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a
            href="https://youtube.com"
            target={"_blank"}
            rel="noopener noreferrer"
            style={{
              color: "#2c2c2c",
              fontWeight: "900",
              fontSize: "1rem",
              fontFamily: "cursive",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#5853ff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2c2c2c")}
          >
            Youtube
          </a>
          <a
            href="https://instagram.com"
            target={"_blank"}
            rel="noopener noreferrer"
            style={{
              color: "#2c2c2c",
              fontWeight: "900",
              fontSize: "1rem",
              fontFamily: "cursive",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#5853ff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2c2c2c")}
          >
            Instagram
          </a>
          <a
            href="https://github.com"
            target={"_blank"}
            rel="noopener noreferrer"
            style={{
              color: "#2c2c2c",
              fontWeight: "900",
              fontSize: "1rem",
              fontFamily: "cursive",
              textDecoration: "none",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#5853ff")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2c2c2c")}
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
