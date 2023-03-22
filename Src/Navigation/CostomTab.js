import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ImagePath } from '../Camponates/Index';
import Colors from '../Camponates/Colors';

  const CostomTab = ({state, descriptors, navigation}) => {
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          let icon = null;
          let txt=null;
          if (index === 0) {
            icon = ImagePath.home;
            txt=<Text>home</Text>
          } else if (index === 1) {
            icon = ImagePath.category;
            txt= <Text>Categories</Text>
          } else if (index === 2) {
            icon =  ImagePath.pluse;
    
          } 
          else if (index === 3) {
            icon =  ImagePath.mortarboard;
            txt=  <Text>Training</Text>
          }
          else if (index === 4) {
            icon = ImagePath.user;
           txt= <Text>My leads</Text>
          } 
  
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };
  
          return (
            <View>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                activeOpacity={0.5}
                style={styles.button
                (index)
                }>
                {isFocused ? (
                  <View style={{alignItems:'center',}}>
                  <Image
                    style={[
                      styles.focusedIcon,
                      {tintColor: index === 2 ? '#fff' : Colors.primary2,},
                    ]}
                    source={icon}
                  />
                 <Text style={{color:Colors.primary2}}>{txt}</Text>
                </View>
                ) : (
                  <>
                  <View style={{alignItems:'center',}}>
                  <Image style={styles.unfocusedIcon} source={icon} />
                  </View>
                  <View>
                      <Text>{txt}</Text>
                    </View>
                    </>
                )}
              </TouchableOpacity>
          
            </View>
          );
        })}
        </View>
      //  </ImageBackground>
    );
  };

export default CostomTab

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    borderTopWidth:0.8
  },
  focusedIcon: {
    width: 24,
    height: 22,
    resizeMode: 'contain',
  },
  unfocusedIcon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: 'gray',

  },
  button: (index = false) => ({
    position: index === 2 ? 'absolute' : null,
    top: index === 2 ? -50 : 0,
    backgroundColor: index === 2 ? Colors.primary2 : '',
     justifyContent:index===2?'center':null,
    alignSelf: index === 2 ? 'center' : 'auto',
    borderRadius: index === 2 ?50: 0,
    width:index === 2 ?50:null,
    height:index === 2 ?50:null,
    padding:index===2?24:null,   
  }),
})