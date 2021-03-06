'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'

class MenuItemDrink extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  toggleDrink(drinkItem) {
    if (this.props.drinkItem.drink) {
      if (this.props.drinkItem.drink.name === this.props.item.name)
        this.props.clearDrink()
      else this.props.selectDrink(drinkItem)
    }
    else this.props.selectDrink(drinkItem)
  }

  getStyle(){
    if (this.props.item.name == null || this.props.drinkItem.drink == null)
      return styles.itemNotSelected
    else if (this.props.drinkItem.drink.name === this.props.item.name)
      return styles.itemSelected
    else return styles.itemNotSelected
  }

  render() {
    return (
      <TouchableOpacity style={this.getStyle()} onPress={() => {this.toggleDrink(this.props.item)}}>
        <Text style={styles.text}>{this.props.item.menuName}</Text>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    drinkItem: state.drinkItem
  }
}

const styles = StyleSheet.create({
    menuItem: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,

    },
    itemSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "black",
      borderWidth: 1.5,
      backgroundColor: "blue",
    },
    itemNotSelected: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
      padding: 10,
      borderColor: "green",
      borderWidth: 1.5,
      backgroundColor: "beige",
    },
    text: {
        textAlign: "center",
        fontSize: 25
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenuItemDrink)
