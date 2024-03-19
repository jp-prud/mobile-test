import axios from 'axios';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
export default function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customer');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>teste</Text>
    </SafeAreaView>
  );
}
