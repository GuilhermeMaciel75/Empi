import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  optionsContainer: {
    marginVertical: 10,
  },
  option: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default styles;
