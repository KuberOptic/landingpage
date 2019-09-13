import React from "react"
import { FaApple, FaLinux, FaWindows }  from "react-icons/fa";
import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{textAlign: "center", paddingBottom: "4em" }}>
    <SectionHeader
      title="Download Today"
      description="KuberOptic is currently in Alpha, but feel free to download and help test."
    />
    <div>
      <span><a download="Download mac object" href="https://s3.amazonaws.com/kuberoptic.com/kuberoptic.dmg"><FaApple size={150} color={"#555555"}/></a></span>
    </div>
  </div>
)

export default CallToAction
