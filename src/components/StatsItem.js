import React from "react"
import styled from "styled-components"
import H1 from "../styles/H1"

const StatsItem = ({top, bottom}) => {
    return (
        <H1 center white>
            <div>{top}</div>
            <div>{bottom}</div>
        </H1>
    )
}

export default StatsItem
