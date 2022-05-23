import { View, Text, Button } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { useEffect } from 'react'

const PlannerScreen = ({ navigation }: NativeStackHeaderProps) => {
  useEffect(() => {
    console.log('Rendering Planner Screen')

    return () => console.log('Unmounting Planner Screen')
  }, [])

  return (
    <View>
      <Text>I am Planner component</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default PlannerScreen






