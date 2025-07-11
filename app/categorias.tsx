import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; // ou qualquer outro pacote de ícones

export default function Categorias() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/')}>
        <AntDesign name="arrowleft" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>Escolha uma categoria:</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.item} onPress={() => router.push('/perguntas?categoria=diversas')}>
          <Text style={styles.itemText}>Diversas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => router.push('/perguntas?categoria=desafios')}>
          <Text style={styles.itemText}>Com Desafios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => router.push('/perguntas?categoria=profundas')}>
          <Text style={styles.itemText}>Profundas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  grid: {
    width: '100%', 
    marginTop: 10,
    alignItems: 'center',
  },
  item: {
    width: '80%',         
    backgroundColor: '#EF3548',
    marginBottom: 30,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});