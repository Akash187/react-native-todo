import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const TodoItem = ({item, pressHandler}) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <AntDesign style={styles.icon} name="delete" size={20} color="black" onPress={() => pressHandler(item.key)}/>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10
  },
  text: {
    marginRight: 24
  },
  icon: {
    position: "absolute",
    right: 16
  }
});

export default TodoItem;
