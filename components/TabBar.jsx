import { styles,StyleSheet,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const TabBar = ({ state, descriptors, navigation}) => {
    const icons = {
        index: (props) => <AntDesign name="home" size={26} {...props}/>,
        explore: (props) => <Ionicons name="journal" size={26} {...props}/>,
        profile: (props) => <AntDesign name="profile" size={26} {...props}/>,
        event : (props) => <AntDesign name="calendar" size={26} {...props}/>

    }

    const primaryColor ='red';
    const greyColor='#737373';
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={route.name}
          style={styles.tabbarItem}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{color: isFocused? primaryColor:greyColor}}>
                {label}
            </Text>
            {
                icons[route.name]({
                    color: isFocused? primaryColor:greyColor
                })
            }
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    tabbar:{
        position: 'absolute',
        bottom: 25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        marginHorizontal:20,
        paddingVertical:15,
        borderRadius:25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {width:0, height:10},
        shadowRadius:10,
        shadowOpacity:0.1
        
    },
    tabbarItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }

})

export default TabBar