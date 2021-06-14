import React, { useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import HeaderProfile from '../../Components/organism/SellerGig/HeaderProfile'
import Gig from '../../Components/organism/SellerGig/Gig'
import ExtraTimeCheck from '../../Components/organism/SellerGig/ExtraTimeCheck'
import Button from '../../Components/Profile_screen_components/Button'
import Reviews from '../../Components/organism/SellerGig/Reviews'
import Categories from '../../Components/organism/home/categories'

const SellerGig = (props) => {

    const [basic, setBasic] = useState(true);
    const [gold, setGold] = useState(false);
    const [premium, setPremium] = useState(false);

    const BasicCategory = () => {
        setBasic(true)
        setGold(false)
        setPremium(false)
    }
    const GoldCategory = () => {
        setGold(true)
        setBasic(false)
        setPremium(false)
    }
    const PremiumCategory = () => {
        setPremium(true)
        setBasic(false)
        setGold(false)
    }

    const basicGig = {
        title: 'Fully Functionally cross-platform app',
        description: 'Upto 4 static screens in any arrangements e.g, 4 main tab screens or 2 screens',
        revisions: '0',
        delivery_days: '7 days',
        operating_system: '2',
        app_icon: true,
        splash_screen: true,
        source_code: true
    }
    const goldGig = {
        title: 'Fully Functionally complete mobile app',
        description: 'Upto 10 static screens in any arrangements with complete navigation',
        revisions: '2',
        delivery_days: '14 days',
        operating_system: '2',
        app_icon: true,
        splash_screen: true,
        source_code: true
    }
    const premiumGig = {
        title: 'Fully Functionally complete mobile app',
        description: 'Upto 25 static screens in any arrangements with complete navigation',
        revisions: '3',
        delivery_days: '25 days',
        operating_system: '2',
        app_icon: true,
        splash_screen: true,
        source_code: true
    }
    var list = [
        {
            title: 'Social Media Design',
            image: require('../../Assets/images/mediadesign.jpeg'),
            key: 1
        },
        {
            title: 'Photoshop Editing',
            image: require('../../Assets/images/photoshop.jpeg'),
            key: 2
        },
        {
            title: 'Social Media Marketing',
            image: require('../../Assets/images/socialmedia.jpeg'),
            key: 3
        },
        {
            title: 'Short Ads',
            image: require('../../Assets/images/ads.png'),
            key: 4
        },
        {
            title: 'Animations',
            image: require('../../Assets/images/animation.jpeg'),
            key: 5
        },
    ]

    const didPressed = () => {
        
    }

    return (

        <View style={styles.container}>
            <View style={styles.profile_container}>
                <HeaderProfile name={'Zack Rider'} buttonPressed={() => props.navigation.navigate('sellerprofile')} />
            </View>
            <ScrollView>
                <View style={styles.title}>
                    <Text style={styles.title_text}>Develop a cross platform app using react native</Text>
                </View>
                <View style={styles.payment_categories_container}>
                    <TouchableOpacity
                        style={[styles.category_container, { borderBottomColor: basic ? '#5568FE' : 'gray', borderBottomWidth: basic ? 3 : 0 }]}
                        onPress={() => BasicCategory()}
                    >
                        <View>
                            <Text style={[styles.category_text, { color: basic ? '#5568FE' : 'gray' }]}>$155</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.category_container, { borderBottomColor: gold ? '#5568FE' : 'gray', borderBottomWidth: gold ? 3 : 0 }]}
                        onPress={() => GoldCategory()}
                    >
                        <View>
                            <Text style={[styles.category_text, { color: gold ? '#5568FE' : 'gray' }]}>$850</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.category_container, { borderBottomColor: premium ? '#5568FE' : 'gray', borderBottomWidth: premium ? 3 : 0 }]}
                        onPress={() => PremiumCategory()}
                    >
                        <View>
                            <Text style={[styles.category_text, { color: premium ? '#5568FE' : 'gray' }]}>$2,500</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.gig_container}>
                    {basic && <Gig data={basicGig} />}
                    {gold && <Gig data={goldGig} />}
                    {premium && <Gig data={premiumGig} />}
                </View>
                <View style={styles.extra_days_container}>
                    <ExtraTimeCheck />
                </View>
                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Button title='Continue ($145)' />
                </TouchableOpacity>
                <View>
                    <Reviews />
                </View>
                <View style={styles.first_category_container}>
                    <Categories title="Recommended For You" data={list} />
                </View>
                <View style={styles.first_category_container}>
                    <Categories title="People also Viewed" data={list} />
                </View>
                <View style={styles.first_category_container}>
                    <Categories title="Recently Viewed Gigs" data={list} />
                </View>
                <View style={styles.first_category_container}>
                    <Categories title="Related to your fields" data={list} />
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    profile_container: {
        width: '100%',
        height: 70,
        backgroundColor: '#255ed6',
    },
    title: {
        width: '100%',
        height: 70,
        backgroundColor: '#255ed6',
        justifyContent: 'center',
    },
    title_text: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
        marginLeft: 10,
    },
    payment_categories_container: {
        width: '96%',
        height: 70,
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        flexDirection: 'row'
    },
    category_container: {
        height: "100%",
        width: '33.3%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    category_text: {
        fontSize: 24,
        fontWeight: '700',
    },
    gig_container: {
        width: '96%',
        height: 500,
        alignSelf: 'center'
    },
    extra_days_container: {
        width: '96%',
        height: 70,
        alignSelf: 'center'
    },
    first_category_container: {
        width: "98%",
        height: 220,
        alignSelf: 'center',
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 5,
    },
})

export default SellerGig;