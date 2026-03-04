import { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, Platform} from 'react-native';


export default function App() {
  const [relatorio,setRelatorio] = useState('');
  const [pinOperador, setPinOperador] = useState('');
  const [pesoCromo, setPesoCromo] = useState('');
  const [pesoNiquel, setPesoNiquel] = useState('');
  const [pesoTotal, setPesoTotal] = useState('');
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

  function calculaPesoTotal(){
    
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
      onPress={enviarAlerta}
      color= "#ff4444"/>
      <StatusBar style="auto" />

      <Text>Carga Cromo (kg)</Text>
      <TextInput
      placeholder="0,00"
      value={pesoCromo}
      onChangeText={setPesoCromo}
      keyboardType='decimal-pad'
      />

      <Text>Carga Niquel (kg)</Text>
      <TextInput
      placeholder="0,00"
      value={pesoNiquel}
      onChangeText={setPesoNiquel}
      keyboardType='decimal-pad'
      />

      <Button
      title="Calcula Total Peso"
      onPress={calculaPesoTotal}
      color="#4444ff"
      />
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
