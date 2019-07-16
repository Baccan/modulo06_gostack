import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '172.25.44.178' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
