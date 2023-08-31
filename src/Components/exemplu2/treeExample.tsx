import React from 'react';
import RecursiveComponent, { RecursiveComponentProps } from './recursiveComp';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const TheApp: React.FC = () => {

  const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid red;
`;
  const data: RecursiveComponentProps = {
    id: 1,
    name: 'Parent',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [
          {
            id: 3,
            name: 'Grandchild 1',
            children: [],
          },
          {
            id: 4,
            name: 'Grandchild 2',
            children: [],
          },
        ],
      },
      {
        id: 5,
        name: 'Child 2',
        children: [],
      },
    ],
  };



  return (

    <Tree
    label={<StyledNode>Recursive Component Example</StyledNode>}
    >
       
        <RecursiveComponent {...data} />
    </Tree>
    
  )
};

export default TheApp;