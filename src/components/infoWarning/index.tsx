import {Box, HStack, ScrollView, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput, ViewStyle} from 'react-native';
import Animated, { ZoomInEasyDown } from 'react-native-reanimated';
import {backgroundLinear, rotateBg, theme} from '../../theme/theme';
import {Feather} from '../../assets/icons';
interface PropsTypes {
  styleContainer?: ViewStyle;
  item: any;
  bgColors?: string[];
  rotateLnBg?: {
    start?: number[];
    end?: number[];
  };
}
function InfoWarning(props: PropsTypes) {
  const {item, styleContainer} = props;
  const values = Object.values<any>(item);
  const commonKV = Object.keys(item).map((key, index) => {
    if (
      values[index] !== undefined &&
      values[index] !== null &&
      typeof values[index] !== 'object'
    ) {
      return {key, value: values[index]};
    } else return null;
  });
  return (
    <View flex={1} style={{...styleContainer}}>
      <HStack justifyContent={'space-evenly'}>
        <TabItems title={'Source'} items={item.source} {...props} />
        <TabItems title={'Destination'} items={item.destination} {...props} />
      </HStack>
      <View
        flex={1}
        backgroundColor={theme.colors.card}
        pt={5}
        mt={5}
        borderRadius={10}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            marginBottom: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={theme.colors.border}
          />
        </View>
        <Animated.View style={{flex: 1}}>
          <ScrollView>
            {commonKV.map(kv => {
              if (kv) {
                return (
                  <View
                    style={{
                      backgroundColor: 'rgba(20,20,60,.2)',
                      marginVertical: 2,
                      padding: 10,
                      borderBottomWidth: 0.2,
                      borderColor: theme.colors.border,
                    }}>
                    <HStack>
                      <Box
                        bgColor={item.color}
                        width={10}
                        height={10}
                        borderRadius={100}
                        justifyContent="center"
                        alignItems="center">
                        <Text style={styles.index}>
                          {kv.key[0] ? kv.key[0].toUpperCase() : '--'}
                        </Text>
                      </Box>
                      <VStack ml={3}>
                        <Text style={styles.index}>{kv.key || '--'}</Text>
                        <Text style={styles.contentIndex}>
                          {kv.value || '--'}
                        </Text>
                      </VStack>
                    </HStack>
                  </View>
                );
              }
            })}
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}
export default InfoWarning;
const TabItems = ({
  items,
  title = '--',
  bgColors,
  rotateLnBg = rotateBg,
  item,
}: any) => {
  return (
    <Animated.View entering={ZoomInEasyDown.delay(10)} style={{flex: 1}}>
      <VStack  style={{paddingHorizontal: 5}}>
      <Box
        bg={{
          linearGradient: {
            colors: bgColors || [
              theme.colors.green,
              item ? item.color || theme.colors.hight : theme.colors.green,
            ],
            start: rotateLnBg.start,
            end: rotateLnBg.end,
          },
        }}
        style={[styles.item]}>
        <Text style={styles.index}>{title}</Text>
        <Text>Ip Address</Text>
        <Text>{items.ip}</Text>
        <Text>City</Text>
        <Text>{items.cityName}</Text>
      </Box>
    </VStack>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  index: {
    color: theme.colors.text,
    fontWeight: 'bold',
    ...theme.fontSize.h3,
  },
  contentIndex: {
    color: theme.colors.text,
    fontWeight: '200',
    ...theme.fontSize.h4,
  },
  item: {
    maxWidth: 200,
    borderRadius: 10,
    padding: 10,
  },
});
