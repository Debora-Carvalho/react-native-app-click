import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#383936',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  textSimple: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  containerInput: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  input: {
    width: 280,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
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