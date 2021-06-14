import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import IconName from 'react-native-vector-icons/Ionicons';
import IconName1 from 'react-native-vector-icons/FontAwesome';
import IconName2 from 'react-native-vector-icons/FontAwesome5';

export default SellerInfo = (props) => {

    const onPressKamaee = (index) => {
        if(index==0)
        {
            props.navigation.navigate("earnings")
        }else if(index==2)
        {
            props.navigation.navigate("template")
        }else if(index==4)
        {
            props.navigation.navigate("codinggigs")
        }
    }
    const onPressGeneral = (index) => {
        if(index==0)
        {
            props.navigation.navigate("about")
        }else if(index==1)
        {
            props.navigation.navigate("payment")
        }   
    }
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState([
        { icon: "dollar-sign", icon_description: "Earnings", key: 1 },
        { icon: "clipboard-list", icon_description: "Buyers requests", key: 2 },
        { icon: "gifts", icon_description: "Offer templates", key: 3 },
        { icon: "share", icon_description: "Share my gigs", key: 4 },
        { icon: "book", icon_description: "My gigs", key: 5 },

    ]);
    const [data2, setData2] = useState([
        { icon: "person-sharp", icon_description: "My profile", key: 1 },
        { icon: "card", icon_description: "Payments", key: 2 },
        { icon: "arrow-redo-circle-sharp", icon_description: "Invite friends", key: 3 },
        { icon: "help-buoy", icon_description: "Support", key: 4 },
    ]);
    return (
        <View>
            <View style={styles.kamaee_text_container}>
                <Text style={styles.kamaee_text}>My Kamaee</Text>
            </View>
            <View style={styles.kamaee_flatlist_container}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => { onPressKamaee(index) }}>
                            <View style={styles.sub_heading_container}>
                                <View style={styles.heading_icon_container}>
                                    <IconName2 name={item.icon} size={23} color={"gray"} />
                                </View>
                                <View style={styles.heading_description_container}>
                                    <Text style={styles.heading_description_text}>{item.icon_description}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
            <View style={styles.kamaee_text_container}>
                <Text style={styles.kamaee_text}>General</Text>
            </View>
            <View style={styles.kamaee_flatlist_container}>
                <TouchableWithoutFeedback onPress={() => setToggle(prevToggle => !prevToggle)}>
                <View style={styles.sub_heading_container}>
                    <View style={styles.heading_icon_container}>
                        <IconName name={"ios-disc-outline"} size={23} color={"gray"} />
                    </View>
                    <View style={styles.heading_description_container}>
                        <Text style={styles.heading_description_text}>Online Status</Text>
                    </View>
                    <View style={styles.heading_icon_container}>
                    <IconName1 name={toggle ? "toggle-on" : "toggle-off"} size={25} color={"dodgerblue"} onPress={() => setToggle(prevToggle => !prevToggle)} />
                    </View>
                </View>
                </TouchableWithoutFeedback>
                <FlatList
                    data={data2}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => { onPressGeneral(index) }}>
                            <View style={styles.sub_heading_container}>
                                <View style={styles.heading_icon_container}>
                                    <IconName name={item.icon} size={23} color={"gray"} />
                                </View>
                                <View style={styles.heading_description_container}>
                                    <Text style={styles.heading_description_text}>{item.icon_description}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

    kamaee_text_container: {
        width: "100%",
        height: "auto",
        marginLeft: 20,
        marginTop: 20,
    },
    kamaee_text: {
        fontSize: 28,
        fontWeight: "700",
    },
    sub_heading_container: {
        width: "100%",
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: "row",
        marginBottom: 5,
    },
    heading_icon_container: {
        height: 40,
        width: "15%",
        justifyContent: "center",
    },
    heading_description_container: {
        width: "70%",
        height: 40,
        justifyContent: "center",
    },
    heading_description_text: {
        fontSize: 20,
    },
    kamaee_flatlist_container: {
        width: "100%",
        height: "auto",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,

    },
});
