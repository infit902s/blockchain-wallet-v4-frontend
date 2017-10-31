import React from 'react'
import { connect } from 'react-redux'

import { selectors } from 'data'
import { SelectInput } from 'blockchain-info-components'

class SelectBoxFeeContainer extends React.Component {
  render () {
    const { fee, regularFee, priorityFee, ...rest } = this.props

    const elements = [{
      group: '',
      items: [{ text: 'Regular', value: regularFee }, { text: 'Priority', value: priorityFee }]
    }]

    return <SelectInput elements={elements} searchEnabled={false} {...rest} />
  }
}

const mapStateToProps = (state) => ({
  regularFee: selectors.core.data.bitcoin.getFeeRegular(state),
  priorityFee: selectors.core.data.bitcoin.getFeePriority(state)
})

export default connect(mapStateToProps)(SelectBoxFeeContainer)
