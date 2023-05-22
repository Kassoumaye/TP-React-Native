import { View, Text, ScrollView,Image, FlatList} from 'react-native';
import React from 'react';
import dashboardStyles from  "./style.js";
import { FakeActivity } from '../../FakeData/FakeActivity.js';
import ActivityItem from '../../Components/Activity/index.js';



 const Home =() =>{

  return (
    <ScrollView>
     {/* Dèbut de Header*/}
      <View style={styles.header}>
        <Text style= {styles.useName}>AMISI Annie</Text>
        <Image source={require("./../../assets/f4ba946f-94b2-4ad1-aa6d-f890cc900a28_43.png")} style={dashboardStyles.useImg}/>
      </View>
       {/* Fin de Header*/}


       {/* Listes des activités*/}

         

         
       {/* Fin de  listes des activités*/}
       
       {/* listes des symptomes */}
       <View style= {dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>Quels symptomes avez-vous?</Text>
       </View>

       <FlatList data={FakeActivity} keyExtractor={item => item.id} 
         horizontal={true} 
         showsHorizontalScrollIndicator={false} style={DashboardStyles.scrollableList}
          renderItem={({item})=>{
          return <ActivityItem item ={item} />; 
         }}
         />
    </ScrollView>
  );
}

export default Home;