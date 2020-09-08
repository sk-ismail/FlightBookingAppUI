import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class X3 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="231d7822-d2fe-4ed2-99b0-ea2622b598fe" style={styles.x3}>
        <View data-layer="49091c64-ab0c-4511-b0b0-c50bd0ece679" style={styles.x3_group85}>
            <View data-layer="4a9d0060-5f9d-473c-8cd7-585ecdca53c9" style={styles.x3_group85_rectangle3188019a06}></View>
            <View data-layer="628ba008-5b6d-40b1-a1ad-f6376754292f" style={styles.x3_group85_rectangle3255762f86}></View>
        </View>
        <View data-layer="e4507ef3-7449-49ea-aa19-a2a3dd65c3b0" style={styles.x3_group86}>
            <View data-layer="58c18c51-8469-466d-bb02-a9906df179e3" style={styles.x3_group86_rectangle31}></View>
            <View data-layer="cd14a7ac-8d91-47c9-99d0-39efb838d9db" style={styles.x3_group86_rectangle32}></View>
        </View>
        <ReactImage data-layer="7374fc8e-a971-4b75-b420-4af2685ba800" source={require('./assets/maskGroup3.png')} style={styles.x3_maskGroup3} />
        <View data-layer="38ff0aa8-39c2-4a16-b593-3e4ed19b5eda" style={styles.x3_rectangle2Copy2}></View>
        <View data-layer="cc19aab2-a854-4e0e-9aae-52f9c85c73aa" style={styles.x3_rectangle2Copy}></View>
        <Svg data-layer="01e33310-20d7-4d4d-88d8-b14848f7569c" style={styles.x3_base924aeaf1} preserveAspectRatio="none" viewBox="-0.7499903727211858 -0.7500222981761908 364.500244140625 553.5626220703125" fill="rgba(246, 249, 255, 1)"><SvgPath d="M 330.0003356933594 526.0626220703125 L 9.999942779541016 526.0626220703125 C 4.48600959777832 526.0626220703125 7.62939453125e-05 521.5767211914062 7.62939453125e-05 516.0626831054688 L 7.62939453125e-05 383.9879150390625 C 11.42774295806885 380.3289184570312 19.10520935058594 369.8024291992188 19.10520935058594 357.7932434082031 C 19.10520935058594 345.7837829589844 11.42740917205811 335.256591796875 9.627278814150486e-06 331.5975646972656 L 7.62939453125e-05 9.999911308288574 C 7.62939453125e-05 4.485910892486572 4.48600959777832 -2.229817619081587e-05 9.999942779541016 -2.229817619081587e-05 L 330.0003356933594 -2.229817619081587e-05 C 335.5143432617188 -2.229817619081587e-05 340.0002746582031 4.485910892486572 340.0002746582031 9.999911308288574 L 340.0002746582031 333.8519897460938 C 331.3898620605469 338.7330322265625 326.0412902832031 347.9065246582031 326.0412902832031 357.7932434082031 C 326.0412902832031 367.6791687011719 331.3900756835938 376.8525695800781 340.0002746582031 381.7335815429688 L 340.0002746582031 516.0626831054688 C 340.0002746582031 521.5767211914062 335.5143432617188 526.0626220703125 330.0003356933594 526.0626220703125 Z"  /></Svg>
        <Svg data-layer="86666620-60d0-44dd-89e3-10d51aa7d5ba" style={styles.x3_base} preserveAspectRatio="none" viewBox="-0.7499903727211858 -0.7500222981761908 344.500244140625 528.5626220703125" fill="rgba(246, 249, 255, 1)"><SvgPath d="M 330.0003356933594 526.0626220703125 L 9.999942779541016 526.0626220703125 C 4.48600959777832 526.0626220703125 7.62939453125e-05 521.5767211914062 7.62939453125e-05 516.0626831054688 L 7.62939453125e-05 383.9879150390625 C 11.42774295806885 380.3289184570312 19.10520935058594 369.8024291992188 19.10520935058594 357.7932434082031 C 19.10520935058594 345.7837829589844 11.42740917205811 335.256591796875 9.627278814150486e-06 331.5975646972656 L 7.62939453125e-05 9.999911308288574 C 7.62939453125e-05 4.485910892486572 4.48600959777832 -2.229817619081587e-05 9.999942779541016 -2.229817619081587e-05 L 330.0003356933594 -2.229817619081587e-05 C 335.5143432617188 -2.229817619081587e-05 340.0002746582031 4.485910892486572 340.0002746582031 9.999911308288574 L 340.0002746582031 333.8519897460938 C 331.3898620605469 338.7330322265625 326.0412902832031 347.9065246582031 326.0412902832031 357.7932434082031 C 326.0412902832031 367.6791687011719 331.3900756835938 376.8525695800781 340.0002746582031 381.7335815429688 L 340.0002746582031 516.0626831054688 C 340.0002746582031 521.5767211914062 335.5143432617188 526.0626220703125 330.0003356933594 526.0626220703125 Z"  /></Svg>
        <View data-layer="3d12679a-0ea6-4034-877e-6c068d1e6538" style={styles.x3_group2Copya7b95c49}>
            <Text data-layer="084166c3-a46e-4b88-927d-ab36f3cfcc5c" style={styles.x3_group2Copya7b95c49_datefd32a07a}>Date</Text>
            <Text data-layer="2920322e-fde1-4a50-9a32-eb7d1e535f71" style={styles.x3_group2Copya7b95c49_x24122018b972a4ce}>12 Feb, 2020</Text>
        </View>
        <View data-layer="94b1d098-27f9-4162-857d-b5bcca13d9c3" style={styles.x3_group2Copy}>
            <Text data-layer="3dccace8-3c34-422c-b3e4-8ce186455f68" style={styles.x3_group2Copy_date0899e066}>Time</Text>
            <Text data-layer="bcc98b64-ce2a-48c7-9270-91c7240e8f2b" style={styles.x3_group2Copy_x2412201862796634}>08:00 pm</Text>
        </View>
        <View data-layer="6a42f5ed-5014-49da-ab91-484e01d0beda" style={styles.x3_group2Copy2}>
            <Text data-layer="479cb228-f700-41a7-a56c-c463fd191514" style={styles.x3_group2Copy2_flight}>Flight No.</Text>
            <Text data-layer="e0291d58-0dc0-4469-b71c-5fd0bd61f133" style={styles.x3_group2Copy2_x76836a45}>CX 138</Text>
        </View>
        <View data-layer="97fb8035-1be5-428d-9605-959f364d3982" style={styles.x3_group2Copy3}>
            <Text data-layer="9b54e9c9-0882-4888-8802-a09984581b8a" style={styles.x3_group2Copy3_gate}>Terminal</Text>
            <Text data-layer="e4eb50d4-cbd7-40eb-8594-5808c9e11745" style={styles.x3_group2Copy3_x66B}>66 B</Text>
        </View>
        <View data-layer="73f23ded-cbe0-4b60-9287-a9f1d11fad8c" style={styles.x3_group89}>
            <Text data-layer="8f08456d-4f62-44bd-8ac1-e424a4efc74d" style={styles.x3_group89_class}>Class</Text>
            <Text data-layer="b5cea4df-ec56-46f7-a9f8-6fb5891898f7" style={styles.x3_group89_business}>Business</Text>
        </View>
        <Svg data-layer="73ba480c-bb8c-4c6f-a5bc-8bec9a38837e" style={styles.x3_line2893aa04f} preserveAspectRatio="none" viewBox="-0.25 0.75 303.5 1.5" fill="transparent"><SvgPath d="M 0.5 1.5 L 302.5 1.5"  /></Svg>
        <View data-layer="d0897347-725e-4803-90da-40ec57a0db69" style={styles.x3_group8}>
            <View data-layer="63f88fca-e5a0-4b32-a9df-027016ba79cc" style={styles.x3_group8_group14}>
                <Svg data-layer="d0dc9119-0589-4851-a349-734572b32376" style={styles.x3_group8_group14_barcode} preserveAspectRatio="none" viewBox="-0.75 -0.75 267.0107421875 75.64739990234375" fill="rgba(0, 80, 166, 1)"><SvgPath d="M 263.6054992675781 74.14737701416016 L 263.6054992675781 0 L 265.5108032226562 0 L 265.5108032226562 74.14737701416016 L 263.6054992675781 74.14737701416016 Z M 259.1585998535156 74.14737701416016 L 259.1585998535156 0 L 261.0648193359375 0 L 261.0648193359375 74.14737701416016 L 259.1585998535156 74.14737701416016 Z M 252.8073120117188 74.14737701416016 L 252.8073120117188 0 L 257.2532958984375 0 L 257.2532958984375 74.14737701416016 L 252.8073120117188 74.14737701416016 Z M 246.4551086425781 74.14737701416016 L 246.4551086425781 0 L 250.9011077880859 0 L 250.9011077880859 74.14737701416016 L 246.4551086425781 74.14737701416016 Z M 242.6436004638672 74.14737701416016 L 242.6436004638672 0 L 244.5498046875 0 L 244.5498046875 74.14737701416016 L 242.6436004638672 74.14737701416016 Z M 236.2914123535156 74.14737701416016 L 236.2914123535156 0 L 238.1976013183594 0 L 238.1976013183594 74.14737701416016 L 236.2914123535156 74.14737701416016 Z M 228.6693115234375 74.14737701416016 L 228.6693115234375 0 L 234.3861083984375 0 L 234.3861083984375 74.14737701416016 L 228.6693115234375 74.14737701416016 Z M 224.8587036132812 74.14737701416016 L 224.8587036132812 0 L 226.7640075683594 0 L 226.7640075683594 74.14737701416016 L 224.8587036132812 74.14737701416016 Z M 218.5065002441406 74.14737701416016 L 218.5065002441406 0 L 220.4118041992188 0 L 220.4118041992188 74.14737701416016 L 218.5065002441406 74.14737701416016 Z M 214.0605010986328 74.14737701416016 L 214.0605010986328 0 L 215.9658050537109 0 L 215.9658050537109 74.14737701416016 L 214.0605010986328 74.14737701416016 Z M 207.7082977294922 74.14737701416016 L 207.7082977294922 0 L 212.1543121337891 0 L 212.1543121337891 74.14737701416016 L 207.7082977294922 74.14737701416016 Z M 201.3561096191406 74.14737701416016 L 201.3561096191406 0 L 205.8030090332031 0 L 205.8030090332031 74.14737701416016 L 201.3561096191406 74.14737701416016 Z M 197.5455017089844 74.14737701416016 L 197.5455017089844 0 L 199.4508056640625 0 L 199.4508056640625 74.14737701416016 L 197.5455017089844 74.14737701416016 Z M 191.1932983398438 74.14737701416016 L 191.1932983398438 0 L 193.0986022949219 0 L 193.0986022949219 74.14737701416016 L 191.1932983398438 74.14737701416016 Z M 183.5711975097656 74.14737701416016 L 183.5711975097656 0 L 189.287109375 0 L 189.287109375 74.14737701416016 L 183.5711975097656 74.14737701416016 Z M 179.7597045898438 74.14737701416016 L 179.7597045898438 0 L 181.6650085449219 0 L 181.6650085449219 74.14737701416016 L 179.7597045898438 74.14737701416016 Z M 174.0429077148438 74.14737701416016 L 174.0429077148438 0 L 175.9482116699219 0 L 175.9482116699219 74.14737701416016 L 174.0429077148438 74.14737701416016 Z M 169.5969085693359 74.14737701416016 L 169.5969085693359 0 L 171.502197265625 0 L 171.502197265625 74.14737701416016 L 169.5969085693359 74.14737701416016 Z M 163.2447052001953 74.14737701416016 L 163.2447052001953 0 L 167.6907043457031 0 L 167.6907043457031 74.14737701416016 L 163.2447052001953 74.14737701416016 Z M 156.8925018310547 74.14737701416016 L 156.8925018310547 0 L 161.3394012451172 0 L 161.3394012451172 74.14737701416016 L 156.8925018310547 74.14737701416016 Z M 153.0819091796875 74.14737701416016 L 153.0819091796875 0 L 154.9871978759766 0 L 154.9871978759766 74.14737701416016 L 153.0819091796875 74.14737701416016 Z M 146.7297058105469 74.14737701416016 L 146.7297058105469 0 L 148.635009765625 0 L 148.635009765625 74.14737701416016 L 146.7297058105469 74.14737701416016 Z M 139.1076049804688 74.14737701416016 L 139.1076049804688 0 L 144.8244018554688 0 L 144.8244018554688 74.14737701416016 L 139.1076049804688 74.14737701416016 Z M 135.2960968017578 74.14737701416016 L 135.2960968017578 0 L 137.2014007568359 0 L 137.2014007568359 74.14737701416016 L 135.2960968017578 74.14737701416016 Z M 128.9439086914062 74.14737701416016 L 128.9439086914062 0 L 130.85009765625 0 L 130.85009765625 74.14737701416016 L 128.9439086914062 74.14737701416016 Z M 124.4979019165039 74.14737701416016 L 124.4979019165039 0 L 126.403205871582 0 L 126.403205871582 74.14737701416016 L 124.4979019165039 74.14737701416016 Z M 118.1457061767578 74.14737701416016 L 118.1457061767578 0 L 122.5926055908203 0 L 122.5926055908203 74.14737701416016 L 118.1457061767578 74.14737701416016 Z M 111.7944030761719 74.14737701416016 L 111.7944030761719 0 L 116.2404022216797 0 L 116.2404022216797 74.14737701416016 L 111.7944030761719 74.14737701416016 Z M 107.9829025268555 74.14737701416016 L 107.9829025268555 0 L 109.8882064819336 0 L 109.8882064819336 74.14737701416016 L 107.9829025268555 74.14737701416016 Z M 101.6306991577148 74.14737701416016 L 101.6306991577148 0 L 103.5369033813476 0 L 103.5369033813476 74.14737701416016 L 101.6306991577148 74.14737701416016 Z M 94.00860595703125 74.14737701416016 L 94.00860595703125 0 L 99.72540283203125 0 L 99.72540283203125 74.14737701416016 L 94.00860595703125 74.14737701416016 Z M 90.19710540771484 74.14737701416016 L 90.19710540771484 0 L 92.10330200195312 0 L 92.10330200195312 74.14737701416016 L 90.19710540771484 74.14737701416016 Z M 83.84580230712891 74.14737701416016 L 83.84580230712891 0 L 85.7510986328125 0 L 85.7510986328125 74.14737701416016 L 83.84580230712891 74.14737701416016 Z M 79.39890289306641 74.14737701416016 L 79.39890289306641 0 L 81.30509948730469 0 L 81.30509948730469 74.14737701416016 L 79.39890289306641 74.14737701416016 Z M 73.04759979248047 74.14737701416016 L 73.04759979248047 0 L 77.49359893798828 0 L 77.49359893798828 74.14737701416016 L 73.04759979248047 74.14737701416016 Z M 66.69540405273438 74.14737701416016 L 66.69540405273438 0 L 71.14140319824219 0 L 71.14140319824219 74.14737701416016 L 66.69540405273438 74.14737701416016 Z M 62.8838996887207 74.14737701416016 L 62.8838996887207 0 L 64.79010009765625 0 L 64.79010009765625 74.14737701416016 L 62.8838996887207 74.14737701416016 Z M 56.53260040283203 74.14737701416016 L 56.53260040283203 0 L 58.43790054321289 0 L 58.43790054321289 74.14737701416016 L 56.53260040283203 74.14737701416016 Z M 48.90959930419922 74.14737701416016 L 48.90959930419922 0 L 54.62639999389648 0 L 54.62639999389648 74.14737701416016 L 48.90959930419922 74.14737701416016 Z M 45.09900283813477 74.14737701416016 L 45.09900283813477 0 L 47.00430297851562 0 L 47.00430297851562 74.14737701416016 L 45.09900283813477 74.14737701416016 Z M 38.74679946899414 74.14737701416016 L 38.74679946899414 0 L 40.652099609375 0 L 40.652099609375 74.14737701416016 L 38.74679946899414 74.14737701416016 Z M 34.30080032348633 74.14737701416016 L 34.30080032348633 0 L 36.20610046386719 0 L 36.20610046386719 74.14737701416016 L 34.30080032348633 74.14737701416016 Z M 27.94860076904297 74.14737701416016 L 27.94860076904297 0 L 32.39459991455078 0 L 32.39459991455078 74.14737701416016 L 27.94860076904297 74.14737701416016 Z M 21.59640121459961 74.14737701416016 L 21.59640121459961 0 L 26.04330062866211 0 L 26.04330062866211 74.14737701416016 L 21.59640121459961 74.14737701416016 Z M 17.78580093383789 74.14737701416016 L 17.78580093383789 0 L 19.69110107421875 0 L 19.69110107421875 74.14737701416016 L 17.78580093383789 74.14737701416016 Z M 11.43360042572021 74.14737701416016 L 11.43360042572021 0 L 13.33890056610107 0 L 13.33890056610107 74.14737701416016 L 11.43360042572021 74.14737701416016 Z M 3.811500072479248 74.14737701416016 L 3.811500072479248 0 L 9.528300285339355 0 L 9.528300285339355 74.14737701416016 L 3.811500072479248 74.14737701416016 Z M 0 74.14737701416016 L 0 0 L 1.90530002117157 0 L 1.90530002117157 74.14737701416016 L 0 74.14737701416016 Z"  /></Svg>
            </View>
        </View>
        <Text data-layer="f7fbd669-0b84-479c-b71f-59bce5b2ddff" style={styles.x3_searchFlights3001c039}>SYD</Text>
        <Text data-layer="55dc1e84-b391-4856-a3f6-b95dbe8e0ae6" style={styles.x3_searchFlightsd298d9ac}>Del</Text>
        <View data-layer="b78b801c-ae52-4763-8bd0-cdfd41b7936d" style={styles.x3_group79}>
            <Svg data-layer="2b67a562-cee0-4eda-8cf6-0327d705dacb" style={styles.x3_group79_line2} preserveAspectRatio="none" viewBox="-0.5 -0.5 132 1" fill="transparent"><SvgPath d="M 0 0 L 131 0"  /></Svg>
            <Svg data-layer="c869d9b4-2bc0-43b2-b3f9-22c50c0eaa46" style={styles.x3_group79_ellipse2} preserveAspectRatio="none" viewBox="-0.75 -0.75 7.5 7.5" fill="transparent"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            <Svg data-layer="645f25e9-748f-4380-a6ac-689d352770dd" style={styles.x3_group79_ellipse3} preserveAspectRatio="none" viewBox="-0.75 -0.75 7.5 7.5" fill="transparent"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
        </View>
        <Svg data-layer="0eddfd0a-4312-4dca-9d98-3ed766aa6863" style={styles.x3_path99} preserveAspectRatio="none" viewBox="-0.00001531839370727539 -0.00019794702529907227 28.41015625 20.584716796875" fill="rgba(0, 80, 166, 1)"><SvgPath d="M 26.70883178710938 4.909604549407959 C 25.64367294311523 4.251344203948975 24.3389720916748 4.192748069763184 23.21876907348633 4.75279426574707 L 18.67486953735352 7.024661064147949 L 6.126972675323486 0.3323005735874176 C 4.854176998138428 -0.3457692265510559 3.134698629379272 -0.004681231454014778 2.503128290176392 1.520920276641846 C 2.119147777557373 2.446801900863647 2.329116106033325 3.503192186355591 3.038203954696655 4.2122802734375 L 10.12530899047852 11.2993860244751 L 4.683327674865723 14.02043151855469 L 3.307877779006958 11.95725727081299 C 3.15350866317749 11.72570323944092 2.893600463867188 11.58659362792969 2.615325450897217 11.58659362792969 L 0.8323126435279846 11.58659362792969 C 0.3726456463336945 11.58659362792969 -1.52587890625e-05 11.95925521850586 -1.52587890625e-05 12.41892242431641 L -1.52587890625e-05 15.73447132110596 C -1.52587890625e-05 17.42559432983398 0.8587251901626587 18.96601295471191 2.297487258911133 19.85543823242188 C 4.616130352020264 21.28726387023926 6.764979362487793 20.18997764587402 7.010571956634521 20.06729316711426 L 27.15251922607422 9.995847702026367 C 27.32969284057617 9.90728759765625 28.41011047363281 9.333924293518066 28.41011047363281 7.960972309112549 C 28.41011047363281 6.708651542663574 27.77410125732422 5.567974090576172 26.70883178710938 4.909602642059326 Z M 4.21533727645874 3.035202026367188 C 3.984282970428467 2.804147720336914 3.915810108184814 2.460119009017944 4.040992736816406 2.158150434494019 C 4.246022701263428 1.662859916687012 4.826931953430176 1.525858640670776 5.343918800354004 1.80124831199646 L 16.84918594360352 7.937501907348633 L 11.69480228424072 10.51466751098633 L 4.21533727645874 3.035202026367188 Z M 26.40802764892578 8.507037162780762 L 6.266303062438965 18.57831573486328 C 5.273335456848145 19.07438278198242 4.116677284240723 19.02227973937988 3.172429084777832 18.43926048278809 C 2.228291988372803 17.85563278198242 1.664639234542847 16.8444652557373 1.664639234542847 15.73447322845459 L 1.664639234542847 13.25125026702881 L 2.169862508773804 13.25125026702881 L 3.705784559249878 15.55519008636475 C 3.938614368438721 15.90454578399658 4.395174026489258 16.02562141418457 4.770553588867188 15.8379602432251 L 23.96308898925781 6.241774559020996 C 24.56358528137207 5.941581249237061 25.26285362243652 5.9729323387146 25.8336067199707 6.32567310333252 C 26.39609527587891 6.673197746276855 26.74545097351074 7.299829483032227 26.74545097351074 7.960975646972656 C 26.74545097351074 7.984780311584473 26.75188827514648 8.335023880004883 26.40802574157715 8.507038116455078 Z"  /></Svg>
        <View data-layer="1d5f728e-8576-42cf-8e66-d9ff4f0c87f2" style={styles.x3_group2Copy4}>
            <Text data-layer="1274de3a-d8b6-44b8-b1b7-fc73bf15d956" style={styles.x3_group2Copy4_seat}>Seat</Text>
            <Text data-layer="f222b0c7-a290-451a-a8a7-32093cd41afc" style={styles.x3_group2Copy4_x21B}>12 A, 12 B</Text>
        </View>
        <Svg data-layer="e467dd12-6db4-46a3-b3d2-b74f4214fc18" style={styles.x3_ellipse7} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse7" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/ellipse7.png')} x="0" y="0" width="35.00px" height="35.00px" /></Pattern></Defs><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" fill="url(#img-ellipse7)" /></Svg>
        <Svg data-layer="b81f8a36-22ac-4a1b-ae13-a1eb2f6c4b0a" style={styles.x3_ellipse8} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-ellipse8" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/ellipse8.png')} x="0" y="0" width="35.00px" height="35.00px" /></Pattern></Defs><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z" fill="url(#img-ellipse8)" /></Svg>
        <Text data-layer="9271762e-1a75-477d-88c6-58b32a75371b" style={styles.x3_searchFlights}>Booking Confirmed</Text>
        <View data-layer="11fd9ee0-e043-4b62-916f-f637c68d2bfb" style={styles.x3_group92}>
            <Text data-layer="5778dc67-06d9-4ead-99c3-8455c13fb956" style={styles.x3_group92_x24122018d1575746}>Renee Kerluke</Text>
            <Text data-layer="6a749daf-7422-469c-b882-f030c9b445bb" style={styles.x3_group92_x241220180387982f}>Female, 26 years</Text>
        </View>
        <View data-layer="8d208b5a-9e2d-4fdc-a971-4f5dae08e8e0" style={styles.x3_group91}>
            <Text data-layer="0077dc0b-4797-4579-972a-388f363e4065" style={styles.x3_group91_x24122018b7cac352}>Payton Berge</Text>
            <Text data-layer="89095bb4-c288-4278-967d-4459a9a8ea87" style={styles.x3_group91_x24122018}>Male, 27 years</Text>
        </View>
        <Text data-layer="f49a6845-78b3-4784-9e6a-7982dd2f4a29" style={styles.x3_date}>Passengers</Text>
        <Text data-layer="796c5a4e-72dd-4217-ae4a-1e40e6bed1c4" style={styles.x3_x9824097217421298}>a5s8f510gt8d1c 9d6d5g5d6</Text>
        <View data-layer="9daaf9b9-eb32-4499-a54b-2a5feb4226d4" style={styles.x3_iconFeatherShare}>
            <Svg data-layer="d3552811-e140-45e7-87b6-a70221a564b7" style={styles.x3_iconFeatherShare_path104} preserveAspectRatio="none" viewBox="4.5 16.5 24.7742919921875 13" fill="transparent"><SvgPath d="M 6 18 L 6 26 C 6 27.10456848144531 7.218585014343262 28 8.721786499023438 28 L 25.05250549316406 28 C 26.55570793151855 28 27.7742919921875 27.10456848144531 27.7742919921875 26 L 27.7742919921875 18"  /></Svg>
            <Svg data-layer="df289782-959b-40cc-9c6d-e0be3191b2f4" style={styles.x3_iconFeatherShare_path105} preserveAspectRatio="none" viewBox="10.5 1.5 11 7" fill="transparent"><SvgPath d="M 20 7 L 16 3 L 12 7"  /></Svg>
            <Svg data-layer="3aa54cd1-c1d7-4a4d-b6d3-3a39a034fa77" style={styles.x3_iconFeatherShare_path106} preserveAspectRatio="none" viewBox="16.5 1.5 3 16" fill="transparent"><SvgPath d="M 18 3 L 18 15.99999904632568"  /></Svg>
        </View>
    </ScrollView>
    );
  }
}

X3.propTypes = {

}

X3.defaultProps = {

}


const styles = StyleSheet.create({
  "x3": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(246, 249, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 414,
    "height": 896,
    "left": 0,
    "top": 0
  },
  "x3_renderedImageReducedNoise": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 576,
    "height": 1246,
    "left": -58,
    "top": -154
  },
  "x3_group85": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 60,
    "height": 60,
    "left": 24,
    "top": 61
  },
  "x3_group85_rectangle3188019a06": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 249, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10196078431372549,
    "shadowOffset": {
      "width": 5,
      "height": 5
    },
    "shadowRadius": 15,
    "width": 60,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "x3_group85_rectangle3255762f86": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 249, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(255,  255,  255)",
    "shadowOpacity": 0.9098039215686274,
    "shadowOffset": {
      "width": -10,
      "height": -18
    },
    "shadowRadius": 15,
    "width": 60,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "x3_group86": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 60,
    "height": 60,
    "left": 330,
    "top": 61
  },
  "x3_group86_rectangle31": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 249, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.10196078431372549,
    "shadowOffset": {
      "width": 5,
      "height": 5
    },
    "shadowRadius": 15,
    "width": 60,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "x3_group86_rectangle32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 249, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 16,
    "borderTopRightRadius": 16,
    "borderBottomLeftRadius": 16,
    "borderBottomRightRadius": 16,
    "shadowColor": "rgb(255,  255,  255)",
    "shadowOpacity": 0.9098039215686274,
    "shadowOffset": {
      "width": -10,
      "height": -18
    },
    "shadowRadius": 15,
    "width": 60,
    "height": 60,
    "left": 0,
    "top": 0
  },
  "x3_maskGroup3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 30,
    "height": 30,
    "left": 39,
    "top": 76
  },
  "x3_maskGroup3_path100": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 26,
    "height": 11.76,
    "left": 2.5,
    "top": 9.5
  },
  "x3_maskGroup3_rectangle2915": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 80, 166, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 80, 166, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 80, 166, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 80, 166, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 30,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "x3_rectangle2Copy2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(20, 95, 175, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 271,
    "height": 44,
    "left": 68.5,
    "top": 727.06
  },
  "x3_rectangle2Copy": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(37, 112, 193, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 304,
    "height": 55,
    "left": 53.5,
    "top": 706.06
  },
  "x3_base924aeaf1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(45,  31,  80)",
    "shadowOpacity": 0.14901960784313725,
    "shadowOffset": {
      "width": 5,
      "height": 8
    },
    "shadowRadius": 18,
    "width": 365,
    "height": 554.06,
    "left": 36,
    "top": 223.5
  },
  "x3_base": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "shadowColor": "rgb(255,  255,  255)",
    "shadowOpacity": 1,
    "shadowOffset": {
      "width": -7,
      "height": -9
    },
    "shadowRadius": 10,
    "width": 345,
    "height": 529.06,
    "left": 36,
    "top": 223.5
  },
  "x3_group2Copya7b95c49": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 81,
    "height": 43,
    "left": 49,
    "top": 319
  },
  "x3_group2Copya7b95c49_datefd32a07a": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 16,
    "left": 1,
    "top": 0
  },
  "x3_group2Copya7b95c49_x24122018b972a4ce": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 81,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_group2Copy": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 43,
    "left": 180,
    "top": 319
  },
  "x3_group2Copy_date0899e066": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 16,
    "left": 2,
    "top": 0
  },
  "x3_group2Copy_x2412201862796634": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_group2Copy2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 79,
    "height": 43,
    "left": 49,
    "top": 243
  },
  "x3_group2Copy2_flight": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76,
    "height": 16,
    "left": 3,
    "top": 0
  },
  "x3_group2Copy2_x76836a45": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 45,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_group2Copy3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 43,
    "left": 286,
    "top": 243
  },
  "x3_group2Copy3_gate": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 68,
    "height": 16,
    "left": 2,
    "top": 0
  },
  "x3_group2Copy3_x66B": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 28,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_group89": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 43,
    "left": 180,
    "top": 243
  },
  "x3_group89_class": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 40,
    "height": 16,
    "left": 2,
    "top": 0
  },
  "x3_group89_business": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_line2893aa04f": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 304,
    "height": 2,
    "left": 55,
    "top": 581.5
  },
  "x3_group8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 265.51,
    "height": 74.15,
    "left": 74,
    "top": 622.35
  },
  "x3_group8_group14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 265.51,
    "height": 74.15,
    "left": 0,
    "top": 0
  },
  "x3_group8_group14_barcode": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 267.51,
    "height": 76.15,
    "left": -1,
    "top": -1
  },
  "x3_searchFlights3001c039": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38,
    "height": 27,
    "left": 58,
    "top": 179
  },
  "x3_searchFlightsd298d9ac": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 36,
    "height": 27,
    "left": 310,
    "top": 179
  },
  "x3_group79": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 143,
    "height": 6,
    "left": 133,
    "top": 193.5
  },
  "x3_group79_line2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 132,
    "height": 1,
    "left": 5,
    "top": 2.5
  },
  "x3_group79_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "x3_group79_ellipse3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 6,
    "height": 6,
    "left": 137,
    "top": 0
  },
  "x3_path99": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 28.41,
    "height": 20.58,
    "left": 190.12,
    "top": 163
  },
  "x3_group2Copy4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 64,
    "height": 43,
    "left": 286,
    "top": 319
  },
  "x3_group2Copy4_seat": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 32,
    "height": 16,
    "left": 1,
    "top": 0
  },
  "x3_group2Copy4_x21B": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 64,
    "height": 19,
    "left": 0,
    "top": 24
  },
  "x3_ellipse7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 35,
    "height": 35,
    "left": 49,
    "top": 427
  },
  "x3_ellipse8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 35,
    "height": 35,
    "left": 49,
    "top": 488
  },
  "x3_searchFlights": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 186,
    "height": 27,
    "left": 115,
    "top": 77
  },
  "x3_group92": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 91,
    "height": 34,
    "left": 102,
    "top": 427
  },
  "x3_group92_x24122018d1575746": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 91,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "x3_group92_x241220180387982f": {
    "opacity": 0.5,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 87,
    "height": 16,
    "left": 0,
    "top": 18
  },
  "x3_group91": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 34,
    "left": 102,
    "top": 488
  },
  "x3_group91_x24122018b7cac352": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "x3_group91_x24122018": {
    "opacity": 0.5,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76,
    "height": 16,
    "left": 0,
    "top": 18
  },
  "x3_date": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 85,
    "height": 16,
    "left": 49,
    "top": 395
  },
  "x3_x9824097217421298": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 80, 166, 1)",
    "fontSize": 8,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "TT Norms",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 202,
    "height": 11,
    "left": 102,
    "top": 707.5
  },
  "x3_iconFeatherShare": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 21.77,
    "height": 20,
    "left": 349,
    "top": 80
  },
  "x3_iconFeatherShare_path104": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 25.77,
    "height": 14,
    "left": -2,
    "top": 8
  },
  "x3_iconFeatherShare_path105": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 12,
    "height": 8,
    "left": 4.89,
    "top": -2
  },
  "x3_iconFeatherShare_path106": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 4,
    "height": 17,
    "left": 8.89,
    "top": -2
  }
});