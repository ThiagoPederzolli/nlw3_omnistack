import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HeaderProps {
  title: string,
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container:  {
    alignItems: 'center',
    backgroundColor: '#F9FAFC',
    borderBottomWidth: 1,
    borderColor: '#DDE3F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 44,
  },
  title: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  }
})
