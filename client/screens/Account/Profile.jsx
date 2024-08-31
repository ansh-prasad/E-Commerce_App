import { View, Text , StyleSheet, ScrollView} from 'react-native'
import React , {useState} from 'react'
import CustomHeader from '../../components/Layout/CustomHeader'
import { userData } from '../../Data/UserData';

const Profile = () => {
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [name, setName] = useState(userData.name);
    const [phonenumber, setPhonenumber] = useState(userData.contact);
    const [address, setAddress] = useState(userData.address);
    const [city, setCity] = useState(userData.city);
    const [profilePic, setProfilePic] = useState(userData.profilePic);
  return (
   <>
   <CustomHeader title="Edit Profile"/>
    <View style={styles.container}>
    <ScrollView>
        <View>
            <Image source={{uri:profilePic}} />
        </View>
    </ScrollView>
    </View>
   </>
  )
}

const styles = StyleSheet.create({
    container:{

    }
})
export default Profile