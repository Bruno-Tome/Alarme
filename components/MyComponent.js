import React, { PureComponent } from 'react'
import { View , Text} from 'react-native'

class MyComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = { mytext :"Edite o campo my text em this.state para mudar"
            
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.mytext}</Text>
            </View>
        )
    }
}

export default MyComponent