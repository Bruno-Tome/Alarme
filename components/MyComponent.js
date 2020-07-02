import React, { PureComponent } from 'react'
import { View , Text, Button,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    botao: {
      width: 200,
      height:300,
      alignItems: 'center',
    },
    container:{
        alignItems: 'center',

    },
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
  });




class MyComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = { 
            flag: 0,
            mytext :this.props.text
            
        }
    }
    

    handleClicker(event){
        console.log(event)
        this.setState({ flag: !this.state.flag})
    }
    render() {
        return (
            <View style={styles.container} className={"container"}>
                <TextInput onChange={(event) => {this.handleClicker(event.target.value)} }></TextInput>
                <Text>Eu renderizo o texto</Text>
                <Text style={styles.bigBlue}>{this.props.mytext}</Text>

                <View style={styles.botao}>
                <Button title ={"me pressione"} onPress={(event) => {this.handleClicker(event)}}></Button>
                </View>
                

                {this.state.flag ? <Text>{this.props.text}</Text> : <Text>Não apertei o botão ainda</Text>}
            </View>
        )
    }
}

export default MyComponent
