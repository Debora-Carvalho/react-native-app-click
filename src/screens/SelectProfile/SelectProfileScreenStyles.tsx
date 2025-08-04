import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    backgroundColor: '#383936',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10
  },
  containerHeader: {
    alignItems: 'center',
    gap: 10
  },
  imageLogo: {
    width: 262,
    height: 90
  },
  imagePhotographer: {
    width: 204, 
    height: 238, 
    alignSelf: 'flex-end'
  },
    imageClient: {
    width: 190, 
    height: 248, 
    alignSelf: 'flex-end'
  },
  textSimple: {
    fontSize: 18,
    fontWeight: 400,
    color: '#FFFFFF',
  },
  textProfile: {
    fontSize: 22,
    fontWeight: 600,
    color: '#FFFFFF',
  },
  containerLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
  textLink: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
  },
  link: {
    fontWeight: 800, 
    color: '#F9A450'
  },
  containerProfile: {
    backgroundColor: '#E24939',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: 362,
    height: 178,
    borderRadius: 20,
  }
});