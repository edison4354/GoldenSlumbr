import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import qs from 'qs';
import config from './config.js';
// import { writeFile } from "react-native-fs";

function OAuth(client_id, cb) {
  Linking.addEventListener('url', handleUrl);
  
  function handleUrl(event) {
    console.log(event.url);
    Linking.removeEventListener('url', handleUrl);
    const [, query_string] = event.url.match(/\#(.*)/);
    console.log(query_string);
    const query = qs.parse(query_string);
    console.log(`query: ${JSON.stringify(query)}`);
    cb(query.access_token);
  }

  const oauthurl = `https://www.fitbit.com/oauth2/authorize?${qs.stringify({
    client_id,
    response_type: 'token',
    scope: 'heartrate activity activity profile sleep',
    redirect_uri: 'fitbit://fit',
    expires_in: '31536000',
  })}`;

  console.log(oauthurl);
  Linking.openURL(oauthurl).catch(err => console.error('Error processing linking', err));
}


function getData(access_token) {
fetch('https://api.fitbit.com/1.2/user/-/sleep/date/2020-11-02/2021-01-09.json', {
method: 'GET',
headers: {
 Authorization: `Bearer ${access_token}`,
},
// body: `root=auto&path=${Math.random()}`
})
.then(res => res.json())
.then(async (res) => {
  console.log(`${JSON.stringify(res)}`);
  // storeData(res, path.resolve('tmp', 'flavio.txt'))
  // await writeFile('hello.json', res)
})
.catch(err => {
  console.error('Error: ', err);
});
}
export default class App extends Component {
componentDidMount() {
    OAuth(config.client_id, getData);
 }
 
 render() {
  return (
  <View style={styles.container}>
    <Text style={styles.welcome}>
     Welcome to Fitbit Integration
    </Text>
  </View>
  );
 }
}


const styles = StyleSheet.create({
container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#00a8b5',
},
welcome: {
 fontSize: 25,
 textAlign: 'center',
 color: '#fff',
 margin: 10,
},
});