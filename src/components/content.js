import React from "react"
import imageOne from "../images/imageOne.png"
import imageTwo from "../images/imageTwo.png"
import gcp from "../images/gcp.png"
import aws from "../images/aws.png"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div className="features" style={{ textAlign: "center" }}>
    <SectionHeader
      title="Features"
    />
    <content
      style={{
        display: "grid",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>WebGL Visualization</h3>
        <p style={{ color: COLORS.gray }}>
          Unleash the performance of WebGL to obtain a revoloutionary understanding of your Kubernetes architecture. 
        </p>
      </div>
      <div>
        <img src={imageOne} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Monitor Your Cluster Health</h3>
        <p style={{ color: COLORS.gray }}>
         KuberOptic provides descriptive analytics concerning the health of your clusters and contiainerized application. 
        </p>
      </div>
      <div>
        <img src={imageTwo} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Cloud Agnostic</h3>
        <p style={{ color: COLORS.gray }}>
          View your application no matter where it is deployed. 
        </p>
      </div>
      <div>
        <img src={aws} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Deployment Tool</h3>
        <p style={{ color: COLORS.gray }}>
          KuberOptic allows you to deploy new clusters onto Amazon Web Services and Google Cloud Platform
        </p>
      </div>
      <div>
        <img src={gcp} alt="a blank card floating over colorful graphics" />
      </div>
      <div>
        <h3>Realtime</h3>
        <p style={{ color: COLORS.gray }}>
          View your cluster health and architecture in realtime, simplifying your DevOps workflow. 
        </p>
      </div>
    </content>
  </div>
)

export default Content
