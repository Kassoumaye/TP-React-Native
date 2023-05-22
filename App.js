import React from "react";
import {View} from "react-native";
import Routers from "./routers";


const App = () => {
    return(
        <View style= {{ flex:1, backgroundColor:"grey"}}>;
            <Routers />
        </View>
    );
};

export default App;