import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';


export default function App() {
  const [relatorio,setRelatorio] = useState('');
  const [pinOperador, setPinOperador] = useState('');
  

  function enviarAlerta(){
    if(relatorio !== "" && pinOperador !== ""){
      Alert.alert("Ok! Mensagem enviada!!!")
    }
    else{
      Alert.alert("FALTAM INFORMAÇÕES! POR FAVOR VERIFIQUE SE OS CAMPOS ESTÃO COMPLETOS")
    }
  }
  return (
    <View style={styles.container}>
      <Text>TechAlloy - Controle de Produção</Text>
      <Text>Relatório de Ocorrências</Text>
      <TextInput placeholder="Descreva o problema nesta linha..."
      value={relatorio}
      onChangeText={setRelatorio}
      />
      <Text>O valor da variável estado relatorio é: {relatorio}:</Text>
      <Text>PIN de Segurnaça</Text>
      <TextInput placeholder="Digite o PIN"
      value={pinOperador}
      onChangeText={setPinOperador}
      secureTextEntry={true}
      />
      <Button value={enviarAlerta}>OK</Button>
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
});
