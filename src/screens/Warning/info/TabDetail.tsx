import { Text } from "native-base";
import React from "react";
import { theme } from "../../../theme/theme";

function Container(){
 return <TabDetailWarning/>
}
function TabDetailWarning(){
    return<Text style={{color: theme.colors.text}}>Hello</Text>
};
export default Container;