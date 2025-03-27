import './App.css';
import Form from './component/Form';
import TaskApp from './component/TaskApp';
import LabelApp from './component/LabelApp';
import ChatApp from './component/ChatApp';
import ModalApp from './component/ModalApp';
import MapApp from './component/MapApp';
import Page from './component/Page';
import Counter from './component/Conter';
import CounterRef from './component/CounterRef';
import Stopwatch from './component/Stopwatch';
import FormFocus from './component/FormFocus';
import CatFriends from './component/CatFriends';

function App() {

  return (
    <>
      {/* useState */}
      <Form/>
      <TaskApp/>
      <LabelApp/>

      {/* useEffect */}
      <ChatApp/>
      <ModalApp/>
      <MapApp/>
      <br />
      <Page/>
      <Counter/>

      {/* useRef */}
      <CounterRef/>
      <Stopwatch/>
      <br />
      <FormFocus/>
      <CatFriends/>
    </>
  )
}

export default App
