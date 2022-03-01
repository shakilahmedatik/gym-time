import { View, Text, Button } from 'react-native'

const PlannerScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>I am Planner component</Text>
      <Button title='Go To Home' onPress={() => navigation.push('Home')} />
    </View>
  )
}

export default PlannerScreen
