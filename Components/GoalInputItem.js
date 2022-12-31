import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native'
import React, { useState } from 'react'

const GoalInputItem = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const GoalInputHandler = (enterdText) => {
    setEnteredGoalText(enterdText)
  }
  const addGoalHandler = () => {
    props.addGoal(enteredGoalText)
    setEnteredGoalText('')
    props.endAddGoal()
  }
  const ENDaddGoalHandler = () => {
    props.endAddGoal()
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image1}
          source={require('../assets/Images/goal.png')}
        />
        <TextInput
          value={enteredGoalText}
          onChangeText={GoalInputHandler}
          style={styles.textInput}
          placeholder='Insert Your Goals...'
        />
        <View style={styles.BTNcontainer}>
          <View style={styles.button}>
            <Button
              onPress={ENDaddGoalHandler}
              title='Cancel'
              color='#f31282'
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandler}
              title='Add Goal'
              color='#b180f0'
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInputItem
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#4b0082',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    marginRight: 8,
    padding: 8,
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  BTNcontainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image1: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
