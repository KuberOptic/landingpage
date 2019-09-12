import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Download Today"
      description="KuberOptic is currently in Alpha, but feel free to download and help test."
    />
    <Button>Subscribe</Button>
  </div>
)

export default CallToAction
