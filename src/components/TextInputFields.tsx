import React from 'react';
import {ReturnKeyTypeOptions, StyleSheet, TextInput} from 'react-native';

type TextInputFieldsProps = {
  value: string;
  placeholder: string;
  returnKeyType?: ReturnKeyTypeOptions;
  onChangeText: (text: string) => void;
};

const TextInputFields = ({
  value,
  placeholder,
  returnKeyType = 'done',
  onChangeText,
}: TextInputFieldsProps) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      returnKeyType={returnKeyType}
      style={styles.inputText}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical: 18,
    borderColor: '#EFF0F6',
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
});

export default TextInputFields;
