import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#383936',
    width: '80%',
    height: 235,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 24,
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});