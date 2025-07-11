// app/index.tsx
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo aos {'\n'}jogos de casal ❤️</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.item1} onPress={() => router.push('/categorias')}>
          <Text style={styles.itemText}>JOGAR PERGUNTAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item2} onPress={() => router.push('/dados')}>
          <Text style={styles.itemText}>JOGAR DADOS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    width: '100%', 
    marginTop: 30,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  item1: {
    width: '80%',         
    backgroundColor: '#059010',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  item2: {
    width: '80%',         
    backgroundColor: '#EF3548',
    marginBottom: 10,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
