import React from 'react';
import './App.css';
import HitMeProject from './components/HitMeProject/HitMeProject';
// import DComponent from './components/DComponent';
// import QuizTimer from './components/FunctionalComponent/QuizTimer';
// import Timer from './components/Timer';
// import MousePointers from './components/ClassComponent/MousePointers';
// import MousePointer from './components/FunctionalComponent/MousePointer';
// import MousePointers from './components/ClassComponent/MousePointer';
// import ClassComponentCounter from './components/ClassComponent/ClassComponentCounter';
// import FunctionalComponentCounter from './components/FunctionalComponent/FunctionalComponentCounter';
// export const UserContext=React.createContext();

function App() {
  return (
    <div className='App'>
      <HitMeProject/>
      {/* <UserContext.Provider value={'Kusuma'}>
      <DComponent/>
      </UserContext.Provider> */}
      {/* <Timer/> */}
      {/* <QuizTimer/> */}
      {/* <MousePointers/> */}
      {/* <MousePointer/> */}
     {/* <ClassComponentCounter/> */}
    {/* <FunctionalComponentCounter/> */}
    </div>
  );
}

export default App;