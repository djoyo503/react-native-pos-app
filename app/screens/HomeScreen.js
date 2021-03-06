'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as orderActions from '../actions/orderActions'
import RootContainer from '../containers/RootContainer'
import AppContainer from '../containers/AppContainer'
import MainContainer from '../containers/MainContainer'
import OrderContainer from '../containers/OrderContainer'

//import IphoneContainer from '../containers/IphoneContainer'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    {/*this.props.fetchMenu()*/}
  }

  render() {
    return (
      <RootContainer>
        <AppContainer>
          <MainContainer />
          {/*<View style={{flex: 1, backgroundColor: "white"}} />
          <IphoneContainer />
          <View style={{flex: 1, backgroundColor: "white"}} />*/}
          <OrderContainer order={this.props.order} />
        </AppContainer>
      </RootContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order,
  }
}

const styles = StyleSheet.create({

})

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
