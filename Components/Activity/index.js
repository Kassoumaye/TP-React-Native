import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SVG_HOSPITAL from "../../assets/svg/undraw_medicine_b-1-ol.svg";

 const ActivityItem=(item) =>{
  return (
            <TouchableOpacity style= {styles.scrollableList}>
            <SVG_HOSPITAL wight={60} height={60}/>
            <Text style={styles.mainText}>{item.mainText}</Text>
            <Text style= {styles.subText}>{item.subText}</Text>
          </TouchableOpacity>
  );
}

export default ActivityItem;