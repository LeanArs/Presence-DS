import React, { useEffect, useState } from "react";
import { Div } from "./styled";
import { Text, View, StyleSheet } from "react-native";
import { Checkbox } from 'react-native-paper';
import Inputs from "../../components/inputs";
import Pressables from "../../components/pressables";
import InputsS from "../../components/inputsenha";


export default function Form({ navigation }) {

  // Criação das States para serem enviadas ao Banco de Dados:
  const [name, setName]=useState(null);
  const [matricula, setMatricula]=useState(null);
  const [email, setEmail]=useState(null);
  const [password, setPassword]=useState(null);
  const [passwordConfirm, setPasswordConfirm]=useState(null);
  const [checked, setChecked]=useState(false);
  const [message, setMessage]=useState(null);

  // Criação da função para envio para o Backend:
  async function Registro(){
    if (password === passwordConfirm && name != '' && matricula != '' && email != '' && password != ''){
      let reqs = await fetch('http://192.168.0.10:3000/cad', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: null,
        matricula: matricula,
        nome: name,
        emailInstitucional: email,
        senha: password,
        tipoUsuario: checked,
      })
    });
    let res= await reqs.json();
    if (res === 'error'){
      setMessage('Preencha os Campos corretamente!');
      setTimeout(() => {
      setMessage(null);
    }, 5000);
    }
    else{
      setMessage(res);
    setTimeout(() => {
      setMessage(null);
      navigation.navigate('Login');
    }, 2000);
    }
    
    }
    else if (password != passwordConfirm) {
      setMessage('Senhas Diferentes!');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
    else{
      setMessage('Todos os campos são obrigatórios!');
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }

  }

return (
<Div>
  
  {message && (
    <Text>{message}</Text>
  )}
  
  <Text style={{fontFamily:'poppinsr', fontSize:16}}>Ei!</Text>
  <Text style={{fontFamily:'poppinsb', fontSize:20, marginBottom:20}}>Crie uma conta</Text>
  <Inputs place='Nome' iconeO='person' onChange={(text) => setName(text)}/>
  <Inputs place="Matrícula" iconeMC='smart-card-outline' onChange={(text) => setMatricula(text)}/>
  <Inputs place="Email" iconeF='mail' onChange={(text) => setEmail(text)}/>
  <InputsS place="Senha" senha={true} iconeMC='lock-outline' onChange={(text) => setPassword(text)}/>
  <Inputs place="Confirmação de Senha" senha={true} iconeMC='lock-plus-outline' onChange={(text) => setPasswordConfirm(text)}/>
  <View style={styles.container}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text style={{fontFamily:'poppinsr', fontSize:16}}>Sou professor</Text>
  </View>

  
  <Text style={{marginTop:30}}></Text>
    <Pressables texto='Registre-se' click={Registro}>
      <Text>Registre-se</Text>
    </Pressables>
</Div>
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: 'center',
    position: 'relative',
    right: 85,
  }
})

