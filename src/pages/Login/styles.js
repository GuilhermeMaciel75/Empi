import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6'
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
    alignSelf: 'center'
  },
  containerLogo: {
    flex: .25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    height: '100%',
  },
  message: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#000',
  },
  containerForm: {
    backgroundColor: '#FAF9F6',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#10E873',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegisterSocial: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#FAF9F6',
    width: '100%',
    borderRadious: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },
  registerText: {
    color: '#000'
  }
});

export default styles;