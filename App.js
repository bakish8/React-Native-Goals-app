import { useState } from 'react'
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native'
import GoalInputItem from './Components/GoalInputItem'
import GoalItem from './Components/GoalItem'

export default function App() {
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState('false')

  const addGoalHandler = (enteredGoalText) => {
    console.log(enteredGoalText)
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ])
  }
  const deleteGoalHandler = (id) => {
    console.log(`Delete:${id}`)
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id)
    })
  }
  const ShowAddGoalModalHandler = () => {
    setShowModal(true)
  }
  const DontShowAddGoalModalHandler = () => {
    setShowModal(false)
  }
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.appContainer}>
        <Button
          color='#C18AFD'
          title='Add New Goal'
          onPress={ShowAddGoalModalHandler}
        />

        <GoalInputItem
          visible={showModal}
          addGoal={addGoalHandler}
          endAddGoal={DontShowAddGoalModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.key}
                  deleteGoal={deleteGoalHandler}
                />
              )
            }}
          ></FlatList>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
})
