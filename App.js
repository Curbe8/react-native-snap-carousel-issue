import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import PostsList from "./PostsList";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.flex}>
        <Swiper loop={false} showsPagination={false}
          scrollEnabled={true} horizontal={true} >
          <View style={[styles.flex, styles.contentHome]}>
            {this.renderContent()}
          </View>
          <View style={styles.flex}>
            <PostsList />
          </View>
        </Swiper>
      </SafeAreaView>
    );
  }


  renderContent = () => {
    return (
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    textAlignVertical: 'center',
  },
  flex: {
    flex: 1
  },
  contentHome: {
    backgroundColor: '#CCCCCC'
  },
});
