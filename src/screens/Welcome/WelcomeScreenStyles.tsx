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
  subtitle: {
    fontSize: 16,
    fontWeight: 400,
    color: '#FFFFFF',
  },
  blockButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  }
});