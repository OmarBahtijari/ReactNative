import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import StudentDetails from './StudentDetails';

const StudentScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Arion" description="Arion Instruktor"/>
            <StudentDetails name="Endrit" description="Endrit Instruktor"/>
            <StudentDetails name="Arber" description="Arber Nxenes Shembullor"/>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
});
export default StudentScreen;