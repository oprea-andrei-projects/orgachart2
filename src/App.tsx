import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TreeApp from './Components/exemplu2/treeExample';
import { Tree } from 'react-organizational-chart';
import Aside from './Components/exemplu2/Aside';
import { TreeContextWrapper } from './context/tree.context';



function App() {

  return (
   <>
      <TreeContextWrapper>
        <DndProvider backend={HTML5Backend}>
          <Aside />
          <TreeApp/>
        </DndProvider>
      </TreeContextWrapper>
   </>
  );
}

export default App;
