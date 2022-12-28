import BubbleText from './component/BubbleText';
import Ripple from './component/Ripple';
function App() {
  return (
    // <BubbleText text="Hey It's Bubble text"/>
    <Ripple width={100} height={40} centerRipple={false} disabledRipple={false} />
  );
}

export default App;
