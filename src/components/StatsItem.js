import React from "react"
import styled from "styled-components"
import H1 from "../styles/H1"
import {device} from "../styles/Global"

const StatsItem = ({ top, bottom }) => {
    return (
        <StyledStatsItem>
            <H1 center white>
                <div>{top}</div>
                <div>{bottom}</div>
            </H1>
        </StyledStatsItem>
    )
}

export default StatsItem

const StyledStatsItem = styled.div`
    @media ${device.maxTablet} {
        margin: 3%;
    }
    padding: 2% 0 2% 0;
`