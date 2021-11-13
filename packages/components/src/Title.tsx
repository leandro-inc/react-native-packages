import React from 'react';
import {StyleSheet, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Title: React.FC = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.title,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Title;
