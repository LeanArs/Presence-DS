import React, { useState, useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable } from "react-native";
import PressablesConf from "../../components/pressablesConf";
import PressableBtnBack from "../../components/PressableBtnBack";
import PressableCircle from "../../components/pressableCircle";
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconO from 'react-native-vector-icons/Octicons';
import IconLo from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from "expo-linear-gradient";
import PressablesModal from "../../components/pressablesModalS";
import PressablesModal2 from "../../components/pressableModalN";
import IconX from 'react-native-vector-icons/Ionicons';
import Inputs from "../../components/inputs";
import { Context } from '../../context/Provider';

export default function ValidarChamada({ navigation }) {

  
  const handleCloseAndRoute = () => {
    setModalActive2(false);
    navigation.navigate('MainAlun')
  }

  const [modalActive4, setModalActive4] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive1, setModalActive1] = useState(false);
  const {nomeCurso, setNomeCurso} = useContext(Context);
  const [faltas, setfaltas] = useState('2');


  return (
    <SafeAreaView style={style.container}>

        <View style={style.header}>
            <View>
                <Text style={{ fontFamily: "poppinsb", fontSize: 18 }}>{nomeCurso}</Text>
            </View>
            <View style={style.voltar}>
                <PressableBtnBack
                    click={() => navigation.navigate("MainAlun")}
                    iconeIo="chevron-back"
                />
            </View>
        </View>

      <View style={style.footer}>
        <View style={{width: 24, height: 24,}}>
          <IconO style={{alignSelf: 'center', color: 'black'}} name='megaphone' size={23.5} onPress={() => setModalActive1(true)}/>
        </View>
        <View style={{paddingBottom: 20}}>
          <PressableCircle
            click={() => setModalActive4(true)}
            iconeMCI="calendar-multiple-check"
          >
          </PressableCircle>
        </View>
        <View style={{width: 27, height: 27}}>
          <IconLo style={{alignSelf: 'center', color: '#DB4E4E'}} name='logout' size={27} onPress={() => setModalActive2(true)}/>
        </View>
      </View>

      <Modal visible={modalActive2} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal2}
          >
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white", paddingBottom: 50 }}
            >
              Deseja sair dessa turma?
            </Text>
            <View style={style.alinhamento}>
              <PressablesModal
                texto="Sim"
                click={() => handleCloseAndRoute()}
              />
              <PressablesModal2
                texto="Não"
                click={() => setModalActive2(false)}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>
      <Modal visible={modalActive1} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal1}>
            <IconX
                style={style.close}
                name="close-circle"
                size={20}
                onPress={() => setModalActive1(false)}
              />
            <Text style={{ fontFamily: "poppinsm", fontSize: 14, color: "white", alignSelf:'center', paddingTop:45, marginBottom:-5}}>Você possui</Text>
            <Text style={{ fontFamily: "poppinsm", fontSize: 48, color: "white", alignSelf:'center', marginBottom:-15 }}>{faltas}</Text>
            <Text style={{ fontFamily: "poppinsm", fontSize: 14, color: "white", alignSelf:'center'}}>Faltas!</Text>
          </LinearGradient>
        </View>
      </Modal>
      <Modal visible={modalActive3} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive3(false)}
            />
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white" }}
            >
              Insira o código da chamada
            </Text>
            <Inputs place="Código" iconeF="check" />

            <PressablesModal
              texto="Validar"
              click={() => setModalActive3(false)}
            />
          </LinearGradient>
        </View>
      </Modal>
      <Modal visible={modalActive4} animationType="fade" transparent={true}>
        <View style={style.fundoModal}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#2C5E7A", "#338995"]}
            start={[1.0, 0.5]}
            style={style.modal}
          >
            <IconX
              style={style.close}
              name="close-circle"
              size={30}
              onPress={() => setModalActive4(false)}
            />
            <Text
              style={{ fontFamily: "poppinsb", fontSize: 15, color: "white" }}
            >
              Insira o código da chamada
            </Text>
            <Inputs place="Código da chamada" iconeF="check"/>
            <PressablesModal
                texto="Validar"
            />
          </LinearGradient>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    width: "100%",
    height: 110,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  voltar: {
    position:"absolute",
    zIndex: 2,
    top: 55,
    left: 20,
  },
  code: {
    width: 319,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DFF5EB',
    position: 'absolute',
    top: 130,
  },
  footer:{
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: 450,
    height: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 0,
    borderRadius: 2,
    borderColor: 'rgba(221,221,221)',
    borderTopWidth: 0.2,
    shadowColor: 'rgb(221,221,221)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 0.3,
  },

  fundoModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    },  

  modal1: {
      width: 148,
      height: 183,
      borderRadius: 22,
      alignItems: "center",
    },  

  modal2: {
    width: 275,
    height: 173,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "space-around", 
  },

  alinhamento: {
    position: 'absolute',
    bottom: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  close: {
    position: 'absolute',
    right: 15,
    top: 15,
    color: "#ffffff",
  },

  modal: {
    borderRadius: 22,
    padding: 35,
    width: 335,
    height: 220,
    alignItems: "center",
    justifyContent: "space-around",
  },
  
});
