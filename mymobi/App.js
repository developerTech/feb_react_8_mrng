import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Alert ,Button } from 'react-native';
import DisplayComponent from './component/displayComponent';

const url = "https://zomatoajulypi.herokuapp.com/restaurant"

export default function App() {

  const [title,setTitle] = useState('Developer Button Clicked')
  const [rest,setRest] = useState();

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  },[])

  const updateTitle = () => {
    setTitle('New Title Added')
  }

  return (
    <View style={styles.container}>
      <Text>React Native App</Text>
      <Text>{title}</Text>
      <Button title="Click Me" onPress={updateTitle} />
      <Button title="Revert Me" onPress={() => {setTitle('Developer Button Clicked')}} />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <DisplayComponent restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
