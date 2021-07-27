import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


const Tela = styled.View`
  flex: 1;
  align-items: center;
  background-color:  	#ADD8E6;
  
`
const Titulo = styled.Text`
  margin-top: 40px;
  font-size: 25px;
  align-items: center;
  
`
const Input = styled.TextInput`
  width: 90%;
  background-color: #6495ED;
  font-size: 40px;
  padding-left: 20px;
  margin-top: 10px;
  align-items: center;
`

const Resultado = styled.View`
  background-color: #6495ED;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  width: 90%;
  
`
const TituloResultado = styled.Text`
  font-size: 25px;
  margin-top: 30px;
  align-items: center;
  padding-left: 20px;

`
const ItemResultado = styled.Text`
  font-size: 16px;
  margin-top: 30px;
  font-size: 30px;
  padding-left: 20px;
`

export default function App() {
  const [metros, alteram] = useState("10");
  const [centimetros, alterav] = useState("");
  
  const transformar = () => {
    const v = metros * 100;
    
    alterav((v));
  };

  useEffect(() => {transformar();}, [metros])
  
  return (

    <Tela>
        <Titulo>VALOR EM METROS</Titulo>

<Input keyboardType="numeric"  onChangeText={(v) => {alteram(v)}} value = {metros} placeholder="Metros paara centimetros"/>

        <Resultado>
        <TituloResultado>EM CENTÍMETROS</TituloResultado>
        <ItemResultado> {centimetros} </ItemResultado>
        </Resultado>
       
    </Tela>
  );
}