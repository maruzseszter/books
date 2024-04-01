import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getBooks } from './services/bookService';

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((data) => {
      console.log(data)
      setBooks(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Könyvek</Text>

      <FlatList 
      data={books}
      renderItem={({ item }) => (
        <View style={styles.items}>
          <Text>{item.author}</Text>
          <Text>{item.title}</Text>
          <Text>{item.year}</Text>
          <Text style={styles.priceText}>LIT: {item.price}</Text>
        </View>
        )}    
       // contentContainerStyle={{ paddingRight: 20 }} 
        // Hozzáadott padding a jobb oldalon  
      />

      <StatusBar style="auto" />
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
  items: {
    border: 'solid 1px navy',
    marginTop: 10,
    padding: '5',
    borderRadius: 8,
    //paddingHorizontal: 25,
    //paddingVertical: 5,
    //margin: 5,
    backgroundColor: 'lightblue',
    boxShadow: '5px 5px 5px black'
  },
  priceText: {
    color: '#fff',
    fontSize: 20,
  },

  // footer: {
  //   flexDirection: 'row',
  // },
});