import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform} from 'react-native';


export default function App() {
  const [relatorio,setRelatorio] = useState('');
  const [pinOperador, setPinOperador] = useState('');
  
  function enviarAlerta(){
    const MSG_OK = "Ok! Mensagem Enviada!!!"
    const MSG_ERRO = "ERRO!! Campos vazios encontrados!"
    if(relatorio !== "" && pinOperador !== ""){
      if(Platform.OS === "web"){
        alert(MSG_OK)
      }
      else{
        Alert.alert(MSG_OK)
      }
    }
    else{if(Platform.OS === "web"){
      alert(MSG_ERRO)
    }
      else{
        Alert.alert(MSG_ERRO)
      }
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
      <Text>O valor da variável estado relatorio é: {relatorio}</Text>
      <Text>PIN de Segurnaça</Text>
      <TextInput placeholder="Digite o PIN"
      value={pinOperador}
      onChangeText={setPinOperador}
      secureTextEntry={true}
      />
      <Button title ="ENVIAR ALERTA DE MANUTENÇÃO"
      onPress={enviarAlerta}/>
      <StatusBar style="auto" />

      <Text>Carga Cromo (kg)</Text>
      <Text>Carga Niquel (kg)</Text>
      <Text>Total de Metais: </Text>
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
