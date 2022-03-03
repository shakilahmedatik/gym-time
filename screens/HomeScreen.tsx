import { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import Navigation from '../navigation'

const HomeScreen = ({ navigation }: any) => {
  useEffect(() => {
    console.log('Rendering Home Screen')

    return () => console.log('Unmounting Home Screen')
  }, [])
  return (
    <View>
      <Text>I am home component</Text>
      <Button
        title='Go to Planner'
        onPress={() => navigation.navigate('Planner')}
      />
    </View>
  )
}

export default HomeScreen
