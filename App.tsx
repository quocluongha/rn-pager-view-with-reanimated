import React from 'react';
import PagerView from 'react-native-pager-view';
import Animated, {useAnimatedRef} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function App(): React.JSX.Element {
  const ref = useAnimatedRef();

  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatedPagerView ref={ref} />
    </SafeAreaView>
  );
}
