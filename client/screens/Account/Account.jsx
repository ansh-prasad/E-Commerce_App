import { View, Text , Image , StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/Layout/CustomHeader'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../Data/UserData'

const Account = () => {
  return (
    <>
    <CustomHeader title="Account" />
    <Layout>
        <View style={styles.continer}>
          <Image source={{uri:userData.profilePic}} />
            <Text>HI</Text>
        </View>
    </Layout>
    </>
  )
}

const styles = StyleSheet.create({
  continer:{
    marginVertical:20
  }
})



export default Account  