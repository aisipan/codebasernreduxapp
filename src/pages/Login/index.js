import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { 
    Text, 
    Image, 
    View, 
    StyleSheet, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
    Alert, 
    ToastAndroid, 
    ScrollView, 
    Platform, 
    Dimensions
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { setLogin } from '../../redux/actions';


const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIcon, setPasswordIcon] = useState("eye-off");
    const [booleanSecure, setBooleanSecure] = useState(true);

    const dispatch = useDispatch()

    // const _onChangeToken = (token, language) => {
    //     var data = {
    //         'device_token': token,
    //         'device_type': Platform.OS,
    //     };
    
    //     // console.log('test', data)
    
    //     _loadDeviceInfo(data).done();
    //   }
    
    // const _loadDeviceInfo = async (deviceData) => {
    //     // load the data in 'local storage'.
    //     // this value will be used by login and register components.
    //     var value = deviceData;
        
    //     try {
    //         console.log('_loadDeviceInfo token', value.device_token)
    //         // set REDUX state fcmToken
    //         await dispatch(setFcmToken(value.device_token));
    //     } catch (error) {
    //         console.log('_loadDeviceInfo error token', error)
    //     }
    // }

    const handleLogin = async () => {

        console.log('handleLogin username', username);
        console.log('handleLogin password', password);
        
        if(username !== "" && password !== "") {
           
                dispatch(setLogin(true))
                ToastAndroid.show('Berhasil Masuk', ToastAndroid.LONG)
           
            
        }
        else {
            Alert.alert(
                "Ups! Ada yang tidak beres",
                "Pengguna tidak ada. Silakan mendaftar terlebih dahulu untuk melanjutkan.",
                [
                    {
                        text: "OK",
                    }
                ],
                { cancelable: true }
            );
        }
    }
    const showAlert = () => {
        Alert.alert(
            "Ups! Ada yang tidak beres",
            "Silahkan menghubungi admin vendor, untuk melakukan pendaftaran!",
            [
                {
                    text: "OK",
                }
            ],
            { cancelable: true }
        );

    }

    useEffect(() => {
     
    }, []);

    return (
        <ScrollView keyboardShouldPersistTaps="handled">
            <View style={styles.container}>
                {/* <View>
                    <Image
                        source={truck}
                    />
                </View> */}
                <View style={styles.containerItem}>
                    <Text style={styles.title}>BIDD ORDER</Text>
                    <Text style={styles.subTitle}>Sistem Lelang Order</Text>
                </View>
                <View style={styles.containerItem}>
                    <TextInput style={styles.inputText} onChangeText={(value) => setUsername(value)} value={username} placeholder="Username"  />
                </View>
                <View style={styles.containerItem}>
                    <TextInput secureTextEntry={booleanSecure} style={styles.inputText}  onChangeText={(value) => setPassword(value)} value={password} placeholder="Password" />
                    <MaterialCommunityIcons name={passwordIcon} size={25} onPress={() => {
                        setPasswordIcon(passwordIcon === 'eye' ? 'eye-off' : 'eye');
                        setBooleanSecure(!booleanSecure);
                    }} style={{position: 'absolute', right: 15, marginTop: 12 }}/>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity onPress={showAlert} style={styles.containerRegister}>
                        <Text style={styles.registerStyle} >Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin} style={styles.containerBtn}>
                        <Text style={styles.btnStyle} >Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.lastView}>
                    <Text style={styles.footerStyle}>Versi 1.0</Text>
                    <Text>Hak Cipta Integrasia Utama</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      display:'flex',
      alignItems:'center',
      flexDirection: 'column',
      backgroundColor: "#73C6F5",
      paddingTop:  Dimensions.get('window').height * 0.13,
      paddingBottom:Dimensions.get('window').height * 0.1
    },
    title: {
        fontSize:36,
        fontWeight:"bold",
        margin:0
    },
    subTitle:{
        textAlign:'center',
        margin:0
    },
    containerItem: {
        marginBottom:20,
    },
    inputText: {
        width: Dimensions.get('window').width * 0.8,
        minWidth: Dimensions.get('window').width * 0.8,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        backgroundColor: "white"
    },
    containerBtn :{
        width:Dimensions.get('window').width * 0.4,
        borderRadius:8,
        alignItems:"center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "black",
        height:45,
        
    },
    containerRegister :{
        width: Dimensions.get('window').width * 0.4,
        alignItems:"center",
        textAlign: "center",
        justifyContent: "center",
        height:45,
    },
    btnStyle:{
        color: "white"
    },
    registerStyle:{
        color: "black",
        textDecorationLine:'underline'
    },  
    viewBtn:{
        width: Dimensions.get('window').width,
        display:'flex',
        flexDirection:"row",
        justifyContent:'center',
        marginBottom: Dimensions.get('window').height * 0.05,
    },
    lastView:{
        marginTop: Dimensions.get('window').height * 0.15,
        bottom:0
    },
    footerStyle: {
        textAlign:'center',
    }
  })

export default LoginScreen;