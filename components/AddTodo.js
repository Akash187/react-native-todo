import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button} from 'react-native'

const AddTodo = ({submitHandler}) => {

  const [text, setText] = useState('')
  const changeHandler = (val) => {
    setText(val)
  }

  const addTodo = () => {
    let response = submitHandler(text)
    if (response) setText('')
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Button title='add todo' color='coral' onPress={addTodo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})

export default AddTodo
