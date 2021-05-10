import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  margin-bottom: 22px;
`

const Check = () => <span style={{ marginRight: 12 }}>✔</span>

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          About Us
        </Heading>
        <Row>
          <Check /> Rug-pull safe
        </Row>
        <Row>
          <Check /> High APYs thanks to multi-edition schema
        </Row>
        <Row>
          <Check /> Fair launch (no dev allocation, no stealth launch)
        </Row>
        <Row>
          <Check /> No migrator code
        </Row>
        <Row>
          <Check /> 24hs Timelock
        </Row>
        <Row>
          <Check /> Deposits fees can never be increased
        </Row>
        <Row>
          <Check /> Emission rate cannot be changed
        </Row>
        <Row>
          <Check /> Multipliers cannot be changed
        </Row>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
