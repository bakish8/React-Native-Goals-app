import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import React from 'react'

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#6495ed' }} //android efect on press
        onPress={props.deleteGoal.bind(this, props.id)} //bind this to delete item
        style={({ pressed }) => pressed && styles.ItemPressed}
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalItemText: {
    padding: 8,
    color: 'white',
  },
  ItemPressed: {
    backgroundColor: '#6495ed',
  },
})
