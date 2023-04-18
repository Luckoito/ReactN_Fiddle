import {Button} from 'react-native';

const normalButton = (props) => {
    return <Button 
        title={props.title}
        style={props.style}
        onPress={props.onPress}
    />
}

export {normalButton};