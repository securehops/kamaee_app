import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import IconName from 'react-native-vector-icons/Ionicons';
import IconName1 from 'react-native-vector-icons/FontAwesome';

export default BuyerInfo = (props) => {

    const Kamaeefields = (index) => {
        if(index==0)
        {
            props.navigation.navigate("codinggigs")
        }
        else if(index==1)
        {
            props.navigation.navigate("looking")
        }
    }

    const buyingfields = (index) => {
        if(index==0)
        {
            props.navigation.navigate("home")
        }
        if(index==1)
        {
            props.navigation.navigate("newrequest")
        }
        if(index==2)
        {
            props.navigation.navigate("myrequests")
        }
    }

    const genralfields = (index) => {
        if(index==0)
        {
            props.navigation.navigate("payment")
        }
    }

    const [toggle, setToggle] = useState(false);

    const [data, setData] = useState([ 
        { icon: "heart-outline", icon_description: "Saved gigs", key: 1 },
        { icon: "file-tray-full-outline", icon_description: "My Interests", key: 2 },

    ]);

    const [data1, setData1] = useState([ 
        { icon: "ios-options", icon_description: "Manage Orders", key: 1 },
        { icon: "ios-pencil", icon_description: "Post a request", key: 2 },
        { icon: "ios-reader-outline", icon_description: "Manage Requests", key: 3 },
    ]);

    const [data2, setData2] = useState([
        { icon: "card", icon_description: "Payments", key: 1 },
        { icon: "arrow-redo-circle-sharp", icon_description: "Invite friends", key: 2 },
        { icon: "help-buoy", icon_description: "Support", key: 3 },

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
                        <TouchableOpacity onPress={() => { Kamaeefields(index) }}>
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
            <View style={styles.kamaee_text_container}>
                <Text style={styles.kamaee_text}>Buying</Text>
            </View>
            <View style={styles.kamaee_flatlist_container}>
                <FlatList
                    data={data1}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => { buyingfields(index) }}>
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
                        <TouchableOpacity onPress={() => { genralfields(index) }}>
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
