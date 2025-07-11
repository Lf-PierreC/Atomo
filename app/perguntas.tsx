import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import perguntas from '../assets/perguntas.json';
import { AntDesign } from '@expo/vector-icons';


export default function PerguntasDiversas() {
  const { categoria } = useLocalSearchParams();

  // Pega as perguntas da categoria escolhida
  const [perguntasDaCategoria, setPerguntasDaCategoria] = useState([]);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const perguntasOriginais = perguntas[categoria] || [];
    setPerguntasDaCategoria(embaralharArray(perguntasOriginais));
  }, [categoria]);

  const router = useRouter();

  function proximaPergunta() {
    if (indice < perguntasDaCategoria.length - 1) {
      setIndice(indice + 1);
    }
  }

  function perguntaAnterior() {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={28} color="#fff" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.pergunta}>{perguntasDaCategoria[indice]}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao1, indice === 0 && styles.botaoDesabilitado]}
          onPress={perguntaAnterior}
          disabled={indice === 0}
        >
          <Text style={styles.textoBotao}>Anterior</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao2, indice === perguntasDaCategoria.length - 1 && styles.botaoDesabilitado]}
          onPress={proximaPergunta}
          disabled={indice === perguntasDaCategoria.length - 1}
        >
          <Text style={styles.textoBotao}>Próxima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function embaralharArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 16,
    padding: 32,
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
  pergunta: {
    fontSize: 22,
    color: '#222',
    textAlign: 'center',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  botao1: {
    backgroundColor: '#EF3548',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  botao2: {
    backgroundColor: '#059010',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  botaoDesabilitado: {
    backgroundColor: '#aaa',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
});