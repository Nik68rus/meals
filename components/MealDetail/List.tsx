import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  data: string[];
}

const List = ({ data }: Props) => {
  return (
    <>
      {data.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
export default List;
