import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import qs from 'qs';
import config from 'fitbitAuthentication/config.js';
import Button from 'lib/components/Button.js';

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
fetch('https://api.fitbit.com/1.2/user/-/sleep/list.json?beforeDate=2020-11-27&sort=desc&offset=0&limit=1', {
method: 'GET',
headers: {
  Authorization: `Bearer ${access_token}`,
},
// body: `root=auto&path=${Math.random()}`
})
.then(res => res.json())
.then(res => {
console.log(`res: ${JSON.stringify(res)}`);
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
      <Button screenName='Data' text='Show My Sleeping Data' />
    </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff',
},
welcome: {
  fontSize: 25,
  textAlign: 'center',
  color: '#000',
  margin: 10,
},
});