import React, { useState, useRef } from 'react';

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageSourcePropType,
  NativeSyntheticEvent,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SafeAreaContainerView from '../../components/SafeAreaContainerView';
import { styles as globalStyles } from '../../global/styles';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../global/constants';
import Button from '../../components/Button';
import { FILTERS, IFilterProps } from './Filters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppStackParamList } from '../../navigation';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux';
import AppText from '../../UI/AppText/AppText';
import FilterModal from '../../modals/FilterModal/FilterModal';

type Props = NativeStackScreenProps<AppStackParamList, 'Filter'>;

export const SelectStyleScreen = ({ navigation, route }: Props) => {
  const [selectedFilterIndex, setIndex] = useState(0);

  const postImages = useSelector(selectors.posts.selectImagesForPost);

  const [filterImage, setFilterImage] = useState(postImages[0]);

  const [image, SetImage] = useState('');

  const onExtractImage = ({
    nativeEvent,
  }: NativeSyntheticEvent<{
    uri: string;
  }>) => {
    SetImage(nativeEvent.uri);
    extractedUri.current = nativeEvent.uri;
  };

  const onSelectFilter = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const extractedUri = useRef(image);

  const multipleImages = postImages.length > 1;

  const renderFilterComponent = ({
    item,
    index,
  }: {
    item: IFilterProps;
    index: number;
  }) => {
    const FilterComponent = item.filterComponent;
    const image = (
      <Image
        style={styles.filterSelector}
        source={{
          uri:
            !filterImage.fromCamera && !filterImage.croppedUri
              ? Image.resolveAssetSource(filterImage.uri as ImageSourcePropType)
                .uri
              : filterImage.croppedUri
                ? (filterImage.croppedUri as string)
                : (filterImage.uri as string),
        }}
      // defaultSource={require('../../Assests/Pick.png')}
      />
    );
    return (
      <TouchableOpacity onPress={() => onSelectFilter(index)}>
        <AppText family="regular" style={styles.filterTitle}>
          {item.title}
        </AppText>
        <FilterComponent image={image} />
      </TouchableOpacity>
    );
  };

  const SelectedFilterComponent = FILTERS[selectedFilterIndex].filterComponent;

  return (
    <SafeAreaContainerView>
      <FilterModal isFilterShowed={false} />
    </SafeAreaContainerView>
  );
};

const styles = StyleSheet.create({
  default_Img: {
    flex: 1,
    width: wp('100%'),
    height: SCREEN_HEIGHT / 2 - 50,
    alignSelf: 'center',
    alignContent: 'center',
  },

  keyboardContainer: {
    width: wp('90%'),
  },
  buttonView: {
    marginTop: wp('7%'),
    marginBottom: wp('3%'),
  },
  safeView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterSelector: {
    width: 100,
    height: 100,
    margin: 5,
  },
  filterTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
});
