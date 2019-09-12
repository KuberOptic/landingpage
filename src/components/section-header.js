import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <h1>{title}</h1>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </>
)

export default SectionHeader
