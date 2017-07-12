import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'redux-form'

import { SecondaryButton } from 'components/generic/Button'
import { Form, TextArea } from 'components/generic/Form'
import { Text } from 'components/generic/Text'
import { CoinConvertor, DropdownAddresses } from 'components/shared/Form'
import CopyClipboard from './CopyClipboard'

const Separator = styled.div`
  flex-grow: 10;
  height: 1px;
  width: 100%;
  background-color: #EFEFEF;
`
const SeparatorContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  padding: 15px 0;
  & :first-child { margin-right: 5px; }
  & :last-child { margin-left: 5px; }
`

const FirstStep = (props) => {
  const { nextAddress, next, handleClickCode } = props

  return (
    <Form>
      <Text id='modals.requestbitcoin.firststep.share' text='Copy & share address:' small medium />
      <CopyClipboard handleClickCode={handleClickCode} address={nextAddress} />
      <SeparatorContainer>
        <Separator />
        <Text id='modals.requestbitcoin.firststep.or' text='Or' small light uppercase />
        <Separator />
      </SeparatorContainer>
      <Text id='modals.requestbitcoin.firststep.amount' text='Enter amount:' small medium />
      <Field name='amount' component={CoinConvertor} />
      <Text id='modals.requestbitcoin.firststep.to' text='Receive to:' small medium />
      <Field name='address' component={DropdownAddresses} includeAll={false} />
      <Text id='modals.requestbitcoin.firststep.description' text='Description:' small medium />
      <Field name='info' component={TextArea} placeholder="What's this transaction for?" fullwidth />
      <SecondaryButton fullwidth onClick={next}>
        <Text id='modals.requestbitcoin.firststep.next' text='Next' small medium uppercase white />
      </SecondaryButton>
    </Form>
  )
}

export default FirstStep
