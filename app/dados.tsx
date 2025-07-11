import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import dados from '../assets/dados.json';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const categoriasDado = [
  "Beijo",
  "Contar um Segredo",
  "Fazer uma Declaração",
  "Pergunta",
  "Desafio",
  "Abraço"
];

const emojis = ["💋", "🤫", "💌", "🧠", "🎯", "🤗"];

export default function JogoDados() {
  const router = useRouter();
  const [numero, setNumero] = useState(null);
  const [categoria, setCategoria] = useState('');
  const [pergunta, setPergunta] = useState('');

  function jogarDado() {
    const sorteado = Math.floor(Math.random() * 6); // 0 a 5
    const cat = categoriasDado[sorteado];
    const perguntasCat = dados[cat];
    const perguntaSorteada = perguntasCat[Math.floor(Math.random() * perguntasCat.length)];
    setNumero(sorteado + 1);
    setCategoria(cat);
    setPergunta(perguntaSorteada);
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.replace('/')}>
            <AntDesign name="arrowleft" size={28} color="#fff" />
        </TouchableOpacity>
      <Text style={styles.title}>Jogo do Dado 🎲</Text>
      <TouchableOpacity style={styles.botao} onPress={jogarDado}>
        <Text style={styles.textoBotao}>JOGAR DADO</Text>
      </TouchableOpacity>
      {numero && (
        <View style={styles.resultado}>
          <Text style={styles.numero}>{emojis[numero-1]} {categoria} ({numero})</Text>
          <Text style={styles.pergunta}>{pergunta}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#EF3548',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 30,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  numero: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pergunta: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});