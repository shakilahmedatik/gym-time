import { StatusBar } from 'expo-status-bar'
import Navigation from './navigation'
import useCachedResources from './hooks/useCachedResources'
export default function App() {
  const isLoaded = useCachedResources()
  console.log('Returning: ', isLoaded)
  if (isLoaded) {
    return (
      <>
        <Navigation />
        <StatusBar style='auto' />
      </>
    )
  } else {
    return null
  }
}

