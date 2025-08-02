import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerContent: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '20%',
    gap: 10
  },
  imageLogo: {
    width: 262,
    height: 90
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
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
  blockButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  }
});