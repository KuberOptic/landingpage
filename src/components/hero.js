import React from "react"
import PropTypes from "prop-types"
import Button from "../components/button"
import headerImage from "../images/header.png"
import maingif from "../images/kubernatiGif.gif"
import MockupContent from "./image"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>KuberOptic</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      KuberOptic helps you visualize your Kubernetes cluster health and structure, 
      while allowsing you to deploy new clusters from within the same application. Saving you time and money.
    </p>

    <div style={{ margin: 50, position: "relative", textAlign: "center" }}>
      <div style={{ width: '50rem', height: 'auto'}}>
      <img style={{width: "auto", height: "150%"}} src={maingif} alt="kuberoptic graphic" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
