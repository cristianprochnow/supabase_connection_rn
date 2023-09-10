import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsWrapper: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  headingWrapper: {
    marginHorizontal: 16,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});

export default styles;
