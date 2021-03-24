import React, { Component } from 'react';
import { View, ScrollView, FlatList, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenWidth = Dimensions.get('window').width;

class JourneyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: true,
            items: [
                {
                    images: [
                        {
                            image: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png'
                        },
                        {
                            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YyX4komY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg'
                        },
                        {
                            image: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2015/09/code1.png'
                        },
                        {
                            image: 'https://i.pinimg.com/originals/1b/8b/95/1b8b95d51cf7bdcf9f74dbb6dd260aa6.png'
                        },
                    ]
                },
                {
                    images: [
                        {
                            image: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2015/09/code1.png'
                        },
                        {
                            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YyX4komY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg'
                        },
                        {
                            image: 'https://i.pinimg.com/originals/1b/8b/95/1b8b95d51cf7bdcf9f74dbb6dd260aa6.png'
                        },
                        {
                            image: 'https://miro.medium.com/max/1024/1*xDi2csEAWxu95IEkaNdFUQ.png'
                        },
                    ]
                },
                {
                    images: [
                        {
                            image: 'https://i.pinimg.com/originals/1b/8b/95/1b8b95d51cf7bdcf9f74dbb6dd260aa6.png'
                        },
                        {
                            image: 'https://i.pinimg.com/originals/1b/8b/95/1b8b95d51cf7bdcf9f74dbb6dd260aa6.png'
                        },
                        {
                            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YyX4komY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg'
                        },
                    ]
                },
                {
                    images: [
                        {
                            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YyX4komY--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/77oanfb0c05w88jlmc8s.jpg'
                        },
                        {
                            image: 'https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2015/09/code1.png'
                        },
                    ]
                },
            ]
        }
    }

    componentDidMount = () => { }

    componentDidUpdate = async (nextProps) => { }

    render = () => {
        return (
            <View style={styles.content}>
                <Text style={styles.text}>Posts</Text>
                {
                    this.renderContent()
                }
            </View>
        );
    }

    getImage = (oItem) => {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode={'cover'}
                    source={{ uri: oItem.image }} />
            </View>
        );
    }

    renderContent = () => {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ScrollView
                    scrollEventThrottle={1}
                    onScroll={this.handleScrollView}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.items}
                        extraData={this.state.refresh}
                        scrollEnabled={false}
                        refreshing={this.state.refresh}
                        renderItem={({ item }) => (
                            <View style={{ aspectRatio: 1, marginBottom: 50 }}>
                                <Carousel
                                    data={item.images}
                                    renderItem={(oItem) => this.getImage(oItem.item)}
                                    sliderWidth={screenWidth}
                                    itemWidth={screenWidth}
                                    lockScrollWhileSnapping={true}
                                    autoplay={false}
                                    style={styles.carouselContainer}
                                    loop={false}
                                    onSnapToItem={(index) => { item.nIndex = index; this.setState({ refresh: !this.state.refresh }); }}
                                />
                                <Pagination
                                    dotsLength={item.images.length}
                                    activeDotIndex={item.nIndex ? item.nIndex : 0}
                                    containerStyle={styles.paginationContainer}
                                    dotStyle={styles.paginationActive}
                                    inactiveDotStyle={styles.paginationInactive}
                                    inactiveDotOpacity={0.4}
                                    inactiveDotScale={1}
                                />
                            </View>
                        )} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        textAlignVertical: 'center',
        marginBottom: 50,
    },
    carouselContainer: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    image: {
        width: '100%',
        height: 500,
    },
    imageContainer: {
        width: '100%',
        height: 500,
        marginBottom: 40,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: -55,
        width: '100%',
        marginHorizontal: 'auto',
    },
    paginationActive: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: 'red',
        margin: -3,
        marginBottom: 0,
        marginTop: 0
    },
    paginationInactive: {
        backgroundColor: 'black',
        margin: -5,
        padding: 0
    },
})

export default JourneyList;