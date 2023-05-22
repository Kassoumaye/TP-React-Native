import {StyleSheet} from " react-native";
import { PADDING } from "../../Tools/constants";


const DashboardStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal: PADDING.horizontal,
        paddingVertical:PADDING.vertical,
        backgroundColor:"white",
    },
    useImg:{
        width: 50,
        height:50,
        borderRadius:50 / 2,
    },
    useName:{
        fontSize:16,
    },
    //styliser la FlatList

    
    scrollableList: {
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,

    },
    title:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
    },
    titleBold:{
        fontWeight:"bold",
    }
});

export default DashboardStyles;