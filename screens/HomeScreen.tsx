import { View, Text, StyleSheet, FlatList } from 'react-native'
import Navigation from '../navigation'
import data from '../data.json'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Workout } from '../types/data'
import WorkoutItem from '../components/WorkoutItem'
// import { MontserratText } from '../components/styled/MontserratText'

const HomeScreen = ({ navigation }: NativeStackHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout List</Text>
      {/* <MontserratText style={styles.header}>New Text</MontserratText> */}
      <FlatList
        data={data as Workout[]}
        renderItem={WorkoutItem}
        keyExtractor={item => item.slug}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'montserrat-bold',
  },
})

export default HomeScreen
