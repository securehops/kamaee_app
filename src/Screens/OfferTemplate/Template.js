import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import SelectGig from '../../Components/Profile_screen_components/SelectGig';
import IconName1 from 'react-native-vector-icons/FontAwesome';
import Button from '../../Components/Profile_screen_components/Button'
const Template = () => {

    const [toggle, setToggle] = useState(false);
    const [offerDescription, setOfferDescription] = useState();
    const [price, setPrice] = useState();
    const [deliveryTime, setDeliveryTime] = useState();
    const [revisions, setRevisions] = useState();
    const [expireTime, setExpireTime] = useState();
    const [templateName, setTemplateName] = useState();


    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>Create an Offer</Text>
            </View>
            <ScrollView>
                <View style={styles.select_gig_container}>
                    <SelectGig />
                </View>
                <View style={styles.describe_offer_container}>
                    <View style={styles.describe_text_container}>
                        <Text style={styles.describe_text}>Describe Your Offer</Text>
                    </View>
                    <View style={styles.describe_input_container}>
                        <TextInput
                            placeholder="e.g. deliverables, timelines and more."
                            placeholderTextColor="gray"
                            marginLeft={10}
                            value={offerDescription}
                            fontWeight='300'
                            onChangeText={offerDescription => setOfferDescription(offerDescription)}
                            maxLength={300}
                            fontSize={18}
                            marginTop={5}
                            multiline={true || false}
                            autoCorrect={true}
                        />
                    </View>
                </View>
                <View style={styles.payment_container}>
                    <View style={styles.payment_text_container}>
                        <Text style={styles.describe_text}>Single Payment</Text>
                    </View>
                    <View style={styles.payment_option_container}>
                        <View style={styles.payment_sub_field_container}>
                            <View style={styles.price_text_container}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Total price. ($)</Text>
                            </View>
                            <View style={styles.price_input_container}>
                                <TextInput
                                    marginLeft={10}
                                    marginTop={5}
                                    fontSize={16}
                                    value={price}
                                    onChangeText={price => setPrice(price)}
                                    maxLength={10}
                                    width="100%"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={styles.payment_sub_field_container}>
                            <View style={styles.price_text_container}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Delivery Time. (days)</Text>
                            </View>
                            <View style={styles.price_input_container}>
                                <TextInput
                                    marginLeft={10}
                                    marginTop={5}
                                    maxLength={2}
                                    value={deliveryTime}
                                    onChangeText={deliveryTime => setDeliveryTime(deliveryTime)}
                                    fontSize={16}
                                    width="100%"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={styles.payment_sub_field_container}>
                            <View style={styles.price_text_container}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Number of revisions</Text>
                            </View>
                            <View style={styles.price_input_container}>
                                <TextInput
                                    marginLeft={10}
                                    marginTop={5}
                                    maxLength={2}
                                    value={revisions}
                                    onChangeText={revisions => setRevisions(revisions)}
                                    fontSize={16}
                                    width="100%"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.offer_setting_container}>
                    <View style={styles.payment_text_container}>
                        <Text style={styles.describe_text}>Define Offer Settings</Text>
                    </View>
                    <View style={styles.payment_option_container}>
                        <View style={styles.payment_sub_field_container}>
                            <View style={styles.price_text_container}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Expiration Time. (days)</Text>
                            </View>
                            <View style={styles.price_input_container}>
                                <TextInput
                                    marginLeft={10}
                                    marginTop={5}
                                    maxLength={2}
                                    value={expireTime}
                                    onChangeText={expireTime => setExpireTime(expireTime)}
                                    fontSize={16}
                                    width="100%"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={styles.payment_sub_field_container}>
                            <View style={styles.price_text_container}>
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>Request Requirements</Text>
                            </View>
                            <View style={styles.toggle_container}>
                                <IconName1 name={toggle ? "toggle-on" : "toggle-off"} size={25} color={toggle ? "dodgerblue" : "gray"} onPress={() => setToggle(prevToggle => !prevToggle)} />
                            </View>
                        </View>
                        <View style={styles.template_name_container}>
                            <TextInput
                                placeholder="Name your template. (Max 40 char)"
                                placeholderTextColor="gray"
                                marginTop={5}
                                fontSize={18}
                                value={templateName}
                                onChangeText={templateName => setTemplateName(templateName)}
                                width="100%"
                                maxLength={40}
                                autoCorrect={true}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Button title="Save" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
export default Template;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
    },
    header_container: {
        width: '100%',
        height: '15%',
        backgroundColor: '#255ed6',
        borderBottomLeftRadius: 70,
        borderBottomRightRadius: 70,
        justifyContent: 'center'
    },
    header_text: {
        color: "white",
        fontSize: 26,
        fontWeight: "700",
        marginLeft: 20,
    },
    select_gig_container: {
        width: "100%",
        height: 180,
        flex: 1,
    },
    describe_offer_container: {
        width: "100%",
        height: 130,
        marginTop: 10,
        // flex: 1,
        flexDirection: 'column',
    },
    describe_text_container: {
        width: "100%",
        height: "30%",
        justifyContent: 'center',
        marginLeft: 10,
        
    },
    describe_text: {
        color: "black",
        fontSize: 24,
        fontWeight: "600",
    },
    describe_input_container: {
        width: "96%",
        height: "70%",
        alignSelf: "center",
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.45,
        shadowRadius: 11.14,
        elevation: 17,
    },
    payment_setting_container: {
        width: "100%",
        height: '100%',
        flexDirection: 'column'
    },
    payment_container: {
        width: '100%',
        height: 200,
        flex: 1,
        marginTop: 10,
        flexDirection: 'column',
    },
    payment_text_container: {
        width: "100%",
        height: "25%",
        marginLeft: 10,
        justifyContent: 'center',
        
    },
    payment_option_container: {
        width: '96%',
        height: '80%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'lightgray',
        shadowColor: "gray",
        borderRadius: 10,
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.45,
        shadowRadius: 11.14,
        elevation: 17,
    },
    payment_sub_field_container: {
        width: "95%",
        height: '33.5%',
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        borderBottomColor: 'lightgray'
    },
    price_text_container: {
        width: "70%",
        height: '100%',
        justifyContent: 'center'
    },
    price_input_container: {
        width: "30%",
        height: '70%',
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'gray',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    offer_setting_container: {
        width: '100%',
        height: 200,
        flex: 1,
        marginTop: 20,
        flexDirection: 'column',
        marginBottom: 10,
    },
    toggle_container: {
        width: "30%",
        height: '70%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'center',
    },
    template_name_container: {
        width: "95%",
        height: '33.5%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})