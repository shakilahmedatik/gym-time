import { View, Text, Button } from 'react-native'
import Navigation from '../navigation'

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>I am home component</Text>
      <Button
        title='Go to Planner'
        onPress={() => navigation.push('Planner')}
      />
    </View>
  )
}

export default HomeScreen
