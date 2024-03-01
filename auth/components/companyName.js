import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const CompanySelect = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const options = [
    { label: 'Infosys', value: 'Infosys' },
    { label: 'Tcs', value: 'Tcs' },
    { label: 'Cognizant', value: 'Cognizant' },
    { label: 'Kpit', value: 'Kpit' },
    { label: 'Capg', value: 'Capg' },
    { label: 'pay By Near', value: 'pay By Near' },
   
  ];
  return (
    <View style={styles.container}>
       <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedCompany(value)}
        value={selectedCompany}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedCompany: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default CompanySelect;
