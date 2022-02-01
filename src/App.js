import logo from './logo.svg';
import './App.css';
import BaiTapThucHanhLayout from './components/BaiTapThucHanhLayout/BaiTapThucHanhLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingRFC from './DataBinding/DataBindingRFC';
import HandleEvent from './HandleEvent/HandleEvent';
import RenderingCondition from './RenderingConditions/RenderingCondition';

function App() {
  return (
    <div className="App">
      {/* <BaiTapThucHanhLayout /> */}
      {/* <DataBinding />
      <DataBindingRFC /> */}

      {/* <HandleEvent /> */}

      <RenderingCondition />
    </div>
  );
}

export default App;
