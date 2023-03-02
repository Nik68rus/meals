import React from 'react';
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { Affordability, Complexity } from '../types';

interface Props {
  affordability: Affordability;
  complexity: Complexity;
  duration: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MealDetails = ({
  affordability,
  complexity,
  duration,
  style,
  textStyle,
}: Props) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}м</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
  },
});

export default MealDetails;
