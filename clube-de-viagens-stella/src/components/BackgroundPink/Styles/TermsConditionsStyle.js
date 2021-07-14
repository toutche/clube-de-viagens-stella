import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: 'center',  
        marginTop: '-10px',
        marginBottom: 200
    },
    item: {
        textAlign: 'left',
        marginHorizontal: 40,
        marginVertical: 10,
        backgroundColor: "#c70c34", 
        marginBottom: 20
    },
    titleItem: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold'
    }, 
    text: {
        color: '#FFFFFF',
        fontSize: 14
    }, 
    boxTerms: {
        flex: 1,
        flexDirection: "row",  
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginTop: 10,
    },
    iconTerms: {
        color: '#FFFFFF',
        fontSize: 12,
        marginRight: 10,
        marginVertical: 'auto'
    }
});