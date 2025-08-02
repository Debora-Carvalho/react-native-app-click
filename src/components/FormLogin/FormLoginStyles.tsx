import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 364,
    height: 235,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  containerInput : {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 4,
  },
  input: {
    width: 280,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});