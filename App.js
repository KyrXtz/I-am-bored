

import React, { Component } from 'react'
import { Button,FlexBox,ActivityIndicator,AppRegistry, Alert, TouchableOpacity, Image, StyleSheet, Text, View, Picker } from 'react-native'
import { Linking } from 'react-native'
import WebView from 'react-native-webview'
import * as WebBrowser from 'expo-web-browser';
//import {YellowBox} from 'react-native';
//import InAppBrowser from 'react-native-inappbrowser-reborn' 
//YellowBox.ignoreWarnings(['Warning: callFunctionReturnFlushedQueue']);
console.disableYellowBox = true;
import Swiper from 'react-native-swiper'
import { BackHandler } from 'react-native';
import SwipePicker from './SwipePicker'

import * as Font from 'expo-font'
//import { FlatGrid } from 'react-native-super-grid';

//import YouTube from 'react-native-youtube';




const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontFamily:'Unbockend'
  },container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#000000'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  ImageIconStyle:{
    scaleX:0.8 , 
    scaleY:0.8
  },swipepicker:{
    alignContent:'flex-end' ,
    backgroundColor:'#000000'

  },swipePickerStyle:{
    backgroundColor:'#fc56f3',
    borderRadius:80
  },
})



// const _smthToSee = async () => {
// // var x =  Math.random().toString(36).substring(2, 11);

//  //Alert.alert(result)

// let ok = true;
// try{
//   let response = await fetch(

//     'http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v='+result+'&format=json'
//   );

// let responseJson = await response.json();
// console.log(responseJson);
// }catch{
// ok = false;
// }
// if (ok){
//   let result2 = await WebBrowser.openBrowserAsync('https://www.youtube.com/watch?v='+result);
// }else{
//   console.log('hi')
//   _smthToSee();
// }

//};
export default class SwiperComponent extends Component {
  async getJsonData() {
    //console.log('gamwtipaanga')
    try {
       var count = 1;
      var API_KEY = "AIzaSyBzT-RfjDpDIczchUonyFB5EyI_UzVQfog";

      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var q = '';
      for (var i = 0; i < 3; i++) {
        q += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      var url = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&maxResults=" + count + "&part=snippet&type=video&q=" + q;
     //console.log(url);
      // console.log({getJsonData});
      //var x = await this.getJsonData(url);
      //console.log(x);
      let response = await fetch(

        url
      );

      let responseJson = await response.json();
     // console.log(responseJson);
      const asyncData = responseJson;
      this.setState({ asyncData });
    } catch{
      //ok = false;
     // console.log('γαμισετε')
    }
   
   

  }
   DATAFirstCateg = DATA0;
   FirstIndexHolder = 0;
   DATASecondCateg = DATA00;
   WikiCategoryChoice = '';
   WikichoiceSet = '';
   Wikichoice='';

  state = {
    showWebView: -1
  }
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
   // this.state = {fontloaded : false};
  }

  // UNSAFE_componentWillMount() {
  // }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  async componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    await Font.loadAsync({'Unbockend': require('./assets/fonts/Unbockend.ttf')});
    this.setState({fontloaded:true})
  }
  handleBackButtonClick() {


    if (this.state.showWebView != -1) {
      
      const ind = this.state.showWebView;
      this.setState({ind:this.state.showWebView});
      this.setState({ showWebView: -1 })
      this.setState({ asyncData:null });
     
      
      this.DATAFirstCateg = DATAarrFirstCateg[0];
      this.setState({ DATAREF:  DATAarrFirstCateg[0] })

      this.DATASecondCateg = DATAarrSecondCateg[0][0];
      this.setState({ DATAREF:  DATAarrSecondCateg[0][0] })
      

      this.Wikichoice = this.WikiCategoryChoice;
      this.setState({ Wikichoice:  this.WikiCategoryChoice })

      this.WikichoiceSet = 'yes';
      this.setState({ WikichoiceSet:  'yes' })

      // console.log(this.state.showWebView)
      //this.render();
      return true;
    } else {

    }
  }
  onNavigationStateChange = navState => {
    if (navState.url.indexOf('https://www.google.com') === 0) {
      const regex = /#access_token=(.+)/;
      const accessToken = navState.url.match(regex)[1];
      //console.log(accessToken);
    }
  };
  onChangeCateg1(index,item){
    console.log( `Selected index: ${ index }` );
    console.log( `Selected item: ${ item }` );
    if (item=0){

    }else{
    // if (index <2){
     

    this.DATAFirstCateg = DATAarrFirstCateg[index];
    this.setState({ DATAREF:  DATAarrFirstCateg[index] })
   
    this.DATASecondCateg = DATAarrSecondCateg[index][0];
  this.setState({ DATAREF:  DATAarrSecondCateg[index][0] })
  
  this.FirstIndexHolder = index;   
  this.WikiCategoryChoice = this.DATASecondCateg[0].searchkey 
  this.WikiChoice = this.DATASecondCateg[0].label 

    //}
  
  }
  }
onChangeCateg2(index,item) {
  console.log( `Selected index: ${ index }` );
  console.log( `Selected item: ${ item }` );
 // if (this.FirstIndexHolder <2 && index <2){
  this.DATASecondCateg = DATAarrSecondCateg[this.FirstIndexHolder][index];
  this.setState({ DATAREF:  DATAarrSecondCateg[this.FirstIndexHolder][index] })
  this.WikiCategoryChoice = this.DATASecondCateg[0].searchkey 
  this.WikiChoice = this.DATASecondCateg[0].label 


 // }
 // console.log(this.DATASecondCateg);
}
onChangeCateg3(index,item){
  {
    console.log( `Selected index: ${ index }` );
    console.log( `Selected item: ${ item }` );
    this.WikiCategoryChoice = item.searchkey;
    this.WikiChoice = item.label ;

    console.log(this.WikiCategoryChoice);
    //this.onChangeCateg1(0,0)
  }
}
ResetWikiChoice(){
  this.WikichoiceSet = '';
  this.setState({ Wikichoice: '' })
  this.Wikichoice = '';
  this.setState({ Wikichoice: '' })

  
}
   render() {
    //console.log('bastards234')
    //console.log(this.state.showWebView)
    if (this.state.showWebView == -1) {
     // console.log('OHAI')
      return (
        <Swiper index={this.state.ind} style={styles.wrapper} showsButtons={true}>

         
          <View style={styles.slide1}>
          <Text height={200}></Text>
          <Text height={200}></Text>


            {this.state.fontloaded?
            <Text style={styles.text}>Give me something to read  </Text>
            :<ActivityIndicator></ActivityIndicator>}
            <TouchableOpacity  /*onPress={_smthToRead}*/ onPress={() => this.setState({ showWebView: 0 })} alignContent='Center' >
              <Image  source={require('./Red-Button-Transparent-Image.png')}
                style={styles.ImageIconStyle} >

              </Image>
            </TouchableOpacity>
            {this.WikichoiceSet ==''?
 <View style = {{alignSelf:'flex-end'}}> 
 <View style={styles.swipePickerStyle}>
            <SwipePicker 
              items={DATAorig}
              onChange={({index,item}) => this.onChangeCateg1(index,item)}
              height={ 50 }
              width={ 220 }
            /> 
            </View>
            <View style={styles.swipePickerStyle}>
            <SwipePicker  
              items={this.DATAFirstCateg}
              onChange={({index,item}) => this.onChangeCateg2(index,item)}
              height={ 50 }
              width={ 220 }
            /> 
            </View>
            <View style={styles.swipePickerStyle}>
            <SwipePicker  
              items={this.DATASecondCateg}
              onChange={({index,item}) => this.onChangeCateg3(index,item)}
              height={ 50 }
              width={ 220 }
            /> 
            </View>
 </View>:
     <View>
       <Text style = {styles.text}>Chosen Category: {this.WikiChoice}  </Text>
       <Button title='Change Category' onPress={()=>this.ResetWikiChoice()}></Button>
     </View>}
          </View>
          {/* <View style={styles.slide2}>
          <Text height={200}></Text>
          <Text height={200}></Text>
          {this.state.fontloaded?
            <Text style={styles.text}>Give me something to listen  </Text>
            :<ActivityIndicator></ActivityIndicator>}
            <TouchableOpacity  onPress={() => this.setState({ showWebView: 1 })} alignContent='Center' >
              <Image source={require('./Green-Button-Transparent-Image.png')}
                style={styles.ImageIconStyle} >

              </Image>
            </TouchableOpacity>
          </View>
          <View style={styles.slide3}>
          <Text height={200}></Text>
          <Text height={200}></Text>
          {this.state.fontloaded?
            <Text style={styles.text}>Give me something to watch  </Text>
            :<ActivityIndicator></ActivityIndicator>}
            <TouchableOpacity onPress={() => this.setState({ showWebView: 2 })} alignContent='Center' >
              <Image source={require('./Yellow-Button-Transparent-Image.png')}
                style={styles.ImageIconStyle} >

              </Image>
            </TouchableOpacity>
          </View> */}
       
       
        </Swiper>

      )
    } else if (this.state.showWebView == 0) {
     // https://en.wikipedia.org/wiki/Special:RandomInCategory
     let wikiurl = '';
     if (this.WikiCategoryChoice == ''){
      wikiurl = 'https://wikipedia.org/wiki/Special:Random';
     }else{
      wikiurl = ' https://en.wikipedia.org/wiki/Special:RandomInCategory/'+this.WikiCategoryChoice;
     }
      return (


        <WebView
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={()=>{return(<ActivityIndicator style = {{position: 'absolute',left: 0,right: 0, top: 0,bottom: 0,alignItems: 'center',justifyContent: 'center' ,scaleX:5,scaleY:5}}/>)}}    
          startInLoadingState
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{ uri: wikiurl }}
        />




      )

    } else if (this.state.showWebView == 1) {
      if(this.state.asyncData){
      
      return (
        <WebView
          onNavigationStateChange={this.onNavigationStateChange}

          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{ uri: 'https://music.youtube.com/watch?v=ok7sHZBUWDw' }}
        />
      )
      }else{
        this.getJsonData();
        return(
          <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator  size={150} color="#0000ff" />
         
        </View>
        )
      }
    } else if (this.state.showWebView == 2) {
      if(this.state.asyncData){
        var id = this.state.asyncData.items[0].id.videoId;
        //console.log(id);
      return (

        <WebView
          onNavigationStateChange={this.onNavigationStateChange}

          style={{ flex: 1 }}
          javaScriptEnabled={true}
          source={{ uri: 'https://www.youtube.com/watch?v='+id }}
        />
      )
      }else{
        //console.log('poutanessssssssssssssssssssssssssssss')
        this.getJsonData();
        return(
          <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size={100} color="#0000ff" />
         
        </View>
           )
      }
    } else {
      //console.log('gamimenoi')
      return (null)
    }
  }

}

//WIKIDATA
const DATAorig = [
  {
    value: 0,
    label: 'General'
  },
  {
    value: 1,
    label: 'Culture and Arts'
  },
  {
    value: 2,
    label: 'Geography and Places'
  },
  {
    value: 3,
    label: 'Health and Fitness'
  },
  // {
  //   value: 4,
  //   label: 'History and Events'
  // },
  // {
  //   value: 5,
  //   label: 'Human Activities'
  // },{
  //   value: 6,
  //   label: 'Mathematics and Logic'
  // },{
  //   value: 7,
  //   label: 'Natural and Physical Sciences'
  // },{
  //   value: 8,
  //   label: 'People and Self'
  // },{
  //   value: 9,
  //   label: 'Philosophy and Thinking'
  // },{
  //   value: 10,
  //   label: 'Religion and Belief Systems'
  // },{
  //   value: 11,
  //   label: 'Society and Social Sciences'
  // },{
  //   value: 12,
  //   label: 'Technology and Applied Sciences'
  // }
];
const DATA0 = [
  
    {
      value: 0,
      label: 'Reference Works'
    },
    {
      value: 1,
      label: 'Further research tools and topics'
    },
  
];
const DATA00 = [
  {
    value: 0,
    label: 'Almanacs',
    searchkey: 'Almanacs'
  },
  {
    value: 1,
    label: 'Atlases',
    searchkey: 'Atlases'
  },
  {
    value: 2,
    label: 'Biographical Dictionaries',
    searchkey: 'Biographical_dictionaries'
  },
  {
    value: 3,
    label: 'Glossaries',
    searchkey: 'Glossaries'
  },
  {
    value: 4,
    label: 'Handbooks and Manuals',
    searchkey: 'Handbooks_and_manuals'
  },
  {
    value: 5,
    label: 'Lists',
    searchkey: 'Lists'
  },{
    value: 6,
    label: 'Medical Manuals',
    searchkey: 'Medical_manuals'
  },{
    value: 7,
    label: 'Book Stubs',
    searchkey: 'Reference_book_stubs'
  },{
    value: 8,
    label: 'Works in the Public Domain',
    searchkey: 'Reference_works_in_the_public_domain'
  },{
    value: 9,
    label: 'Web Sites',
    searchkey: 'Web_sites'
  },{
    value: 10,
    label: 'Style Guides',
    searchkey: 'Style_guides'
  },{
    value: 11,
    label: 'Trivia Books',
    searchkey: 'Trivia_books'
  }
];
const DATA01 = [
  {
    value: 0,
    label: 'Academic Desciplines',
    searchkey: 'Academic_disciplines'
  },
  {
    value: 1,
    label: 'Archives',
    searchkey: 'Archives'
  },
  {
    value: 2,
    label: 'Books',
    searchkey: 'Books'
  },
  {
    value: 3,
    label: 'Clients',
    searchkey: 'Clients'
  },
  {
    value: 4,
    label: 'Curricula',
    searchkey: 'Curricula'
  },
  {
    value: 5,
    label: 'Databases',
    searchkey: 'Databases'
  },{
    value: 6,
    label: 'Distance Education',
    searchkey: 'Distance_education'
  },{
    value: 7,
    label: 'Grammar',
    searchkey: 'Grammar'
  },{
    value: 8,
    label: 'Goverment Agencies',
    searchkey: 'Goverment_agencies'
  },{
    value: 9,
    label: 'Indices',
    searchkey: 'Indices'
  },{
    value: 10,
    label: 'Information',
    searchkey: 'Information'
  },{
    value: 11,
    label: 'Knowledge',
    searchkey: 'Knowledge'
  },{
    value: 12,
    label: 'Libraries',
    searchkey: 'Libraries'
  },{
    value: 13,
    label: 'Library Cataloging and Classification',
    searchkey: 'Library_cataloging_and_classification'
  },{
    value: 14,
    label: 'News agencies',
    searchkey: 'News_agencies'
  },{
    value: 15,
    label: 'Periodic Table',
    searchkey: 'Periodic_table'
  },{
    value: 16,
    label: 'Prefixes',
    searchkey: 'Prefixes'
  },{
    value: 17,
    label: 'Reading',
    searchkey: 'Reading'
  },{
    value: 18,
    label: 'Research',
    searchkey: 'Research'
  },{
    value: 19,
    label: 'Search Engines',
    searchkey: 'Search_engines'
  },{
    value: 20,
    label: 'Suffixes',
    searchkey: 'Suffixes'
  },{
    value: 21,
    label: 'Universities and Colleges',
    searchkey: 'Universities_and_colleges'
  },{
    value: 22,
    label: 'Writing',
    searchkey: 'Writing'
  }
];
const DATA1 = [
  {
    value: 0,
    label: 'Culture and Humanities'
  },
  {
    value: 1,
    label: 'Arts and Entertainment'
  },
  {
    value: 2,
    label: 'Performing Arts'
  },
  {
    value: 3,
    label: 'Visual Arts'
  },
  {
    value: 4,
    label: 'Games and Toys'
  },
  {
    value: 5,
    label: 'Sports and Recreation'
  },
  {
    value: 6,
    label: 'Mass Media'
  },
];
const DATA10 = [
  {
    value: 0,
    label: 'Classics',
    searchkey: 'Classical_studies'
  },
  {
    value: 1,
    label: 'Critical Theory',
    searchkey: 'Critical_theory'
  },
  {
    value: 2,
    label: 'Cultural Anthropology',
    searchkey: 'Cultural_anthropology'
  },
  {
    value: 3,
    label: 'Folklore',
    searchkey: 'Folklore'
  },{
    value: 4  ,
    label: 'Food Culture',
    searchkey: 'Food_culture'
  },{
    value: 5 ,
    label: 'Food and Drink',
    searchkey: 'Food_and_drink'
  },{
    value:  6,
    label: 'Languages',
    searchkey: 'Languages'
  },{
    value:  7,
    label: 'Literature',
    searchkey: 'Literature'
  },{
    value:  8,
    label: 'Museology',
    searchkey: 'Museology'
  },{
    value:  9,
    label: 'Mythology',
    searchkey: 'Mythology'
  },{
    value: 10 ,
    label: 'Philosophy',
    searchkey: 'Philosophy'
  },{
    value:  11,
    label: 'Popular Culture',
    searchkey: 'Popular_culture'
  },{
    value:  12,
    label: 'Science and Culture',
    searchkey: 'Science_and_culture'
  },{
    value:  13,
    label: 'Traditions',
    searchkey: 'Traditions'
  },
];
const DATA11 = [
  {
    value: 0,
    label: 'Arts and Crafts',
    searchkey: 'Handicrafts'
  },
  {
    value: 1,
    label: 'Celebrity',
    searchkey: 'Celebrity'
  },
  {
    value: 2,
    label: 'Censorship in the arts',
    searchkey: 'Censorship_in_the_arts'
  },
  {
    value: 3,
    label: 'Festivals',
    searchkey: 'Festivals'
  },{
    value:  4,
    label: 'Humor',
    searchkey: 'Humor'
  },{
    value:  5,
    label: 'Literature',
    searchkey: 'Literature'
  },{
    value:  6,
    label: 'Museums',
    searchkey: 'Museums'
  },{
    value:  7,
    label: 'Parties',
    searchkey: 'Parties'
  },{
    value:  8,
    label: 'Poetry',
    searchkey: 'Poetry'
  },
];
const DATA12 = [
  {
    value:  0,
    label: 'Circus',
    searchkey: 'Circus'
  },{
    value:  1,
    label: 'Dance',
    searchkey: 'Dance'
  },{
    value:  2,
    label: 'Film',
    searchkey: 'Film'
  },{
    value:  3,
    label: 'Music',
    searchkey: 'Music'
  },{
    value:  4,
    label: 'Opera',
    searchkey: 'Opera'
  },{
    value:  5,
    label: 'Storytelling',
    searchkey: 'Storytelling'
  },{
    value:  6,
    label: 'Theatre',
    searchkey: 'Theatre'
  },
];
const DATA13 = [
  {
    value:  0,
    label: 'Architecture',
    searchkey: 'Architecture'
  },{
    value:  1,
    label: 'Comics',
    searchkey: 'Comics'
  },{
    value: 2 ,
    label: 'Crafts',
    searchkey: 'Crafts'
  },{
    value: 3 ,
    label: 'Design',
    searchkey: 'Design'
  },{
    value:  4,
    label: 'Drawing',
    searchkey: 'Drawing'
  },{
    value:  5,
    label: 'Film (Animation)',
    searchkey: 'Animation'
  },{
    value: 6,
    label: 'New Media Art',
    searchkey: 'New_media_art'
  },{
    value:  7,
    label: 'Painting',
    searchkey: 'Painting'
  },{
    value: 8 ,
    label: 'Photography',
    searchkey: 'Photography'
  },{
    value: 9 ,
    label: 'Sculpture',
    searchkey: 'Sculpture'
  },
  ];
  const DATA14 = [
    {
      value:  0,
      label: 'Board Games',
      searchkey: 'Board_games'
    },{
      value: 1 ,
      label: 'Card Games',
      searchkey: 'Card_games'
    },{
      value: 2 ,
      label: 'Dolls',
      searchkey: 'Dolls'
    },{
      value: 3 ,
      label: 'Puppetry',
      searchkey: 'Puppetry'
    },{
      value: 4 ,
      label: 'Puzzles',
      searchkey: 'Puzzles'
    },{
      value: 5 ,
      label: 'Role Playing Games',
      searchkey: 'Role-playing_games'
    },{
      value:  6,
      label: 'Video Games',
      searchkey: 'Video_games'
    },
    ];
const DATA15 = [
      {
        value: 0 ,
        label: 'Air Sports',
        searchkey: 'Air_sports'
      },{
        value: 1 ,
        label: 'American Football',
        searchkey: 'American_football'
      },{
        value: 2 ,
        label: 'Association Football',
        searchkey: 'Association_football'
      },{
        value:  3,
        label: 'Auto Racing',
        searchkey: 'Auto_racing'
      },{
        value: 4 ,
        label: 'Baseball',
        searchkey: 'Baseball'
      },{
        value: 5 ,
        label: 'Basketball',
        searchkey: 'Basketball'
      },{
        value: 6 ,
        label: 'Boating',
        searchkey: 'Boating'
      },{
        value: 7 ,
        label: 'Boxing',
        searchkey: 'Boxing'
      },{
        value:  8,
        label: 'Canoening',
        searchkey: 'Canoening'
      },{
        value: 9 ,
        label: 'Cricket',
        searchkey: 'Cricket'
      },{
        value: 10 ,
        label: 'Cycling',
        searchkey: 'Cycling'
      },{
        value: 11 ,
        label: 'Exercise',
        searchkey: 'Exercise'
      },{
        value: 12 ,
        label: 'Fishing',
        searchkey: 'Fishing'
      },{
        value: 13 ,
        label: 'Golf',
        searchkey: 'Golf'
      },{
        value: 14 ,
        label: 'Gymnastics',
        searchkey: 'Gymnastics'
      },{
        value: 15 ,
        label: 'Hobbies',
        searchkey: 'Hobbies'
      },{
        value: 16 ,
        label: 'Horse Racing',
        searchkey: 'Horse_racing'
      },{
        value:17  ,
        label: 'Ice Hockey',
        searchkey: 'Ice_hockey'
      },{
        value: 18 ,
        label: 'Lacrosse',
        searchkey: 'Lacrosse'
      },{
        value: 19 ,
        label: 'Olympic Games',
        searchkey: 'Olympic_games'
      },{
        value: 20 ,
        label: 'Rugby League',
        searchkey: 'Rugby_league'
      },{
        value: 21 ,
        label: 'Rugby Union',
        searchkey: 'Rugby_union'
      },{
        value: 22 ,
        label: 'Sailing',
        searchkey: 'Sailing'
      },{
        value: 23 ,
        label: 'Skiing',
        searchkey: 'Skiing'
      },{
        value: 24 ,
        label: 'Swimming',
        searchkey: 'Swimming'
      },{
        value: 25 ,
        label: 'Tennis',
        searchkey: 'Tennis'
      },{
        value: 26 ,
        label: 'Track and Field',
        searchkey: 'Track_and_field'
      },{
        value:27  ,
        label: 'Walking Trails',
        searchkey: 'Walking_trails'
      },{
        value: 28 ,
        label: 'Water Sports',
        searchkey: 'Water_sports'
      },{
        value: 29 ,
        label: 'Whitewater Sports',
        searchkey: 'Whitewater_sports'
      },
      ];
const DATA16 = [
        {
          value: 0 ,
          label: 'Broadcasting',
          searchkey: 'Broadcasting'
        },{
          value: 1 ,
          label: 'Film',
          searchkey: 'Film'
        },{
          value: 2 ,
          label: 'Internet',
          searchkey: 'Internet'
        },{
          value: 3 ,
          label: 'Magazines',
          searchkey: 'Magazines'
        },{
          value: 4 ,
          label: 'Newspapers',
          searchkey: 'Newspapers'
        },{
          value: 5 ,
          label: 'Publications',
          searchkey: 'Publications'
        },{
          value: 6 ,
          label: 'Publishing',
          searchkey: 'Publishing'
        },{
          value: 7 ,
          label: 'Television',
          searchkey: 'Television'
        },{
          value: 8 ,
          label: 'Radio',
          searchkey: 'Radio'
        },
];
const DATA2 = [
  {
    value: 0 ,
    label: 'Geography',
    
  },
  {
    value:  1,
    label: 'Places',
    
  },
  ];

  const DATA20 = [
    {
      value: 0 ,
      label: 'Earth',
      searchkey: 'Earth'
    },
    {
      value:  1,
      label: 'World',
      searchkey: 'World'
    },
     {
      value: 2 ,
      label: 'Bodies of Water',
      searchkey: 'Bodies_of_water'
    },
    {
      value: 3 ,
      label: 'Continents',
      searchkey: 'Continents'
    },
    {
      value:  4,
      label: 'Deserts',
      searchkey: 'Deserts'
    },
    {
      value: 5 ,
      label: 'Lakes',
      searchkey: 'Lakes'
    },{
      value: 6 ,
      label: 'Landforms',
      searchkey: 'Landforms'
    },
    {
      value:  7,
      label: 'Mountains',
      searchkey: 'Mountains'
    },{
      value:  8,
      label: 'Oceans',
      searchkey: 'Oceans'
    },
    {
      value:  9,
      label: 'Navigation',
      searchkey: 'Navigation'
    },
    {
      value: 10 ,
      label: 'Rivers',
      searchkey: 'Rivers'
    },
    {
      value: 11 ,
      label: 'Subterranea',
      searchkey: 'Subterranea_(geography)'
    },
    {
      value: 12 ,
      label: 'Territories',
      searchkey: 'Territories'
    },

  ];
  const DATA21 = [
    {
      value: 0 ,
      label: 'Cities',
      searchkey: 'Cities'
    },
    {
      value:  1,
      label: 'Communities',
      searchkey: 'Communities'
    },
     {
      value: 2 ,
      label: 'Countries',
      searchkey: 'Countries'
    },
    {
      value: 3 ,
      label: 'Populated Places',
      searchkey: 'Populated_places'
    },{
      value:  4,
      label: 'Protected Areas',
      searchkey: 'Protected_areas'
    },{
      value:  5,
      label: 'Regions',
      searchkey: 'Regions'
    },
    {
      value:  6,
      label: 'Towns',
      searchkey: 'Towns'
    },
    {
      value:  7,
      label: 'Villages',
      searchkey: 'Villages'
    },


  ];
  const DATA3 = [
    {
      value: 0 ,
      label: 'Self Care',
      
    },
    {
      value:  1,
      label: 'Nutrition',
      
    },
    {
      value:  2,
      label: 'Excersise',
      
    },
    {
      value:  3,
      label: 'Hygiene',
      
    },
    {
      value:  4,
      label: 'Psychology',
      
    },
    {
      value:  5,
      label: 'Public Health',
      
    },
    {
      value:  6,
      label: 'Health Science',
      
    },
    {
      value:  7,
      label: 'Medicine',
      
    },
    {
      value:  8,
      label: 'Dentistry',
      
    }
    ];
const DATA30 = [
      {
        value: 0 ,
        label: 'Health Promotion',
        searchkey: 'Health_promotion'
      },
      {
        value: 1 ,
        label: 'Life Extension',
        searchkey: 'Life_extension'
      },
      {
        value: 2 ,
        label: 'Prevention',
        searchkey: 'Prevention'
      },
      {
        value: 3 ,
        label: 'Sexual Health',
        searchkey: 'Sexual_health'
      },
      {
        value: 4 ,
        label: 'Sleep',
        searchkey: 'Sleep'
      },
      {
        value: 5 ,
        label: 'Skin Care',
        searchkey: 'Skin_care'
      },
];
const DATA31 = [
  {
    value: 0 ,
    label: 'Dietary Supplements',
    searchkey: 'Dietary_supplements'
  },{
    value: 1 ,
    label: 'Dietetics',
    searchkey: 'Dietetics'
  },{
    value: 2 ,
    label: 'Nutrients',
    searchkey: 'Nutrients'
  },{
    value: 3 ,
    label: 'Amino Acids',
    searchkey: 'Amino_acids'
  },{
    value: 4 ,
    label: 'Minerals',
    searchkey: 'Minerals'
  },{
    value:  5,
    label: 'Nootropics',
    searchkey: 'Nootropics'
  },{
    value: 6 ,
    label: 'Phytochemicals',
    searchkey: 'Phytochemicals'
  },{
    value: 7 ,
    label: 'Vitamins',
    searchkey: 'Vitamins'
  },{
    value: 8 ,
    label: 'Nutritional Advice Pyramids',
    searchkey: 'Nutritional_advice_pyramids'
  },
];
const DATA32 = [
  {
    value:  0,
    label: 'Aerobics',
    searchkey: 'Aerobics'
  },{
    value:  1,
    label: 'Bodyweight Exercise',
    searchkey: 'Bodyweight_exercise'
  },{
    value:  2,
    label: 'Cycling',
    searchkey: 'Cycling'
  },{
    value:  3,
    label: 'Exercise Equipment',
    searchkey: 'Exercise_equipment'
  },{
    value:  4,
    label: 'Exercise Instructors',
    searchkey: 'Exercise_instructors'
  },{
    value:  5,
    label: 'Dancing',
    searchkey: 'Dancing'
  },{
    value:  6,
    label: 'Exercise Physiology',
    searchkey: 'Exercise_physiology'
  },{
    value:  7,
    label: 'Hiking',
    searchkey: 'Hiking'
  },{
    value:  8,
    label: 'Pilates',
    searchkey: 'Pilates'
  },{
    value:  9,
    label: 'Running',
    searchkey: 'Running'
  },{
    value:  10,
    label: 'Sports',
    searchkey: 'Sports'
  },{
    value:  11,
    label: 'Swimming',
    searchkey: 'Swimming'
  },{
    value:  12,
    label: 'Tai Chi',
    searchkey: 'Tai_chi'
  },{
    value:  13,
    label: 'Walking',
    searchkey: 'Walking'
  },{
    value:  14,
    label: 'Weight Training',
    searchkey: 'Weight_training'
  },{
    value:  15,
    label: 'Weight Training Exercises',
    searchkey: 'Weight_training_exercises'
  },{
    value:  16,
    label: 'Yoga',
    searchkey: 'Yoga'
  },

];

const DATA33 = [
  {
    value: 0 ,
    label: 'Cleaning',
    searchkey: 'Cleaning'
  },
  {
    value: 1 ,
    label: 'Oral Hygiene',
    searchkey: 'Oral_hygiene'
  },
];
  const DATA34 = [
    {
      value: 0 ,
      label: 'Mental Health',
      searchkey: 'Mental_health'
    },
    {
      value: 1 ,
      label: 'Psychotherapy',
      searchkey: 'Psychotherapy'
    },
];

const DATA35 = [
  {
    value: 0 ,
    label: 'Health by Country',
    searchkey: 'Health_by_country'
  },  {
    value: 1 ,
    label: 'Healthcare',
    searchkey: 'Healthcare'
  },  {
    value: 2 ,
    label: 'Health Law',
    searchkey: 'Health_law'
  },  {
    value: 3 ,
    label: 'Health Promotion',
    searchkey: 'Health_promotion'
  },  {
    value: 4 ,
    label: 'Health Standards',
    searchkey: 'Health_standards'
  },  {
    value: 5 ,
    label: 'Hospitals',
    searchkey: 'Hospitals'
  },  {
    value: 6 ,
    label: 'Occupational Safety and Health',
    searchkey: 'Occupational_safety_and_health'
  },  {
    value: 7 ,
    label: 'Pharmaceutical Industry',
    searchkey: 'Pharmaceutical_industry'
  },  {
    value: 8 ,
    label: 'Pharmaceuticals Policy',
    searchkey: 'Pharmaceuticals_policy'
  },  {
    value: 9 ,
    label: 'Safety',
    searchkey: 'Safety'
  },
];
const DATA36 = [
  {
    value: 0 ,
    label: 'Clinical Research',
    searchkey: 'Clinical_research'
  },{
    value:  1,
    label: 'Diseases',
    searchkey: 'Diseases'
  },{
    value:  2,
    label: 'Epidemiology',
    searchkey: 'Epidemiology'
  },{
    value: 3 ,
    label: 'Midwifery',
    searchkey: 'Midwifery'
  },{
    value: 4 ,
    label: 'Nursing',
    searchkey: 'Nursing'
  },{
    value: 5 ,
    label: 'Nutrition',
    searchkey: 'Nutrition'
  },{
    value:6 ,
    label: 'Optometry',
    searchkey: 'Optometry'
  },{
    value: 7 ,
    label: 'Pharmacy',
    searchkey: 'Pharmacy'
  },{
    value: 8 ,
    label: 'Public Health',
    searchkey: 'Public_health'
  },
];
const DATA37 =  [ 
  {
    value:  0,
    label: 'Alternative Medicine',
    searchkey: 'Alternative_medicine'
  },{
    value:  1,
    label: 'Cardiology',
    searchkey: 'Cardiology'
  },{
    value:  2,
    label: 'Endocrinology',
    searchkey: 'Endocrinology'
  },{
    value:  3,
    label: 'Forensics',
    searchkey: 'Forensics'
  },{
    value: 4 ,
    label: 'Gastroenterology',
    searchkey: 'Gastroenterology'
  },{
    value:  5,
    label: 'Human Genetics',
    searchkey: 'Genetics'
  },{
    value:  6,
    label: 'Geriatrics',
    searchkey: 'Geriatrics'
  },{
    value: 7 ,
    label: 'Gerontology',
    searchkey: 'Gerontology'
  },{
    value:  8,
    label: 'Gynecology',
    searchkey: 'Gynecology'
  },{
    value: 9 ,
    label: 'Hematology',
    searchkey: 'Hematology'
  },{
    value: 10 ,
    label: 'Nephrology',
    searchkey: 'Nephrology'
  },{
    value: 11 ,
    label: 'Neurology',
    searchkey: 'Neurology'
  },{
    value:  12,
    label: 'Obstetrics',
    searchkey: 'Obstetrics'
  },{
    value: 13 ,
    label: 'Oncology',
    searchkey: 'Oncology'
  },{
    value: 14 ,
    label: 'Ophthalmology',
    searchkey: 'Ophthalmology'
  },{
    value: 15 ,
    label: 'Orthopedic Surgical Procedures',
    searchkey: 'Orthopedic_surgical_procedures'
  },{
    value: 16 ,
    label: 'Pathology',
    searchkey: 'Pathology'
  },{
    value: 17 ,
    label: 'Pediatrics',
    searchkey: 'Pediatrics'
  },{
    value:  18,
    label: 'Psychiatry',
    searchkey: 'Psychiatry'
  },{
    value: 19 ,
    label: 'Rheumatology',
    searchkey: 'Rheumatology'
  },{
    value:  20,
    label: 'Surgery',
    searchkey: 'Surgery'
  },{
    value:  21,
    label: 'Urology',
    searchkey: 'Urology'
  },
];
const DATA38 =  [ 
  {
    value: 0 ,
    label: 'Dental Hygiene',
    searchkey: 'Oral_hygiene'
  },{
    value:  1,
    label: 'Orthodontics',
    searchkey: 'Orthodontics'
  },
];
const DATAarrFirstCateg = [DATA0,DATA1,DATA2,DATA3];

const DATAarrSecondCateg = [[DATA00,DATA01],
[DATA10,DATA11,DATA12,DATA13,DATA14,DATA15,DATA16],
[DATA20,DATA21],
[DATA30,DATA31,DATA32,DATA33,DATA34,DATA35,DATA36,DATA37,DATA38],

];

//WIKIDATA END
// const DATAXX = [
// {
//   value:  ,
//   label: '',
//   searchkey: ''
// },
// ];
AppRegistry.registerComponent('myproject', () => SwiperComponent)
