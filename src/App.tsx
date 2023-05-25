import styled from "styled-components";
import Card from "./components/Card";
import { DragDropContext } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { dataState } from "./atom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [stores, setStores] = useRecoilState(dataState);
  const handleDragEnd = ({ destination, source, draggableId, type }: any) => {
    console.log(destination, source, draggableId);
    if (!destination) {
      return;
    }
    if (type == "group") {
      setStores((oldStores) => {
        const move = oldStores[source.index];
        const temp = [...oldStores];
        temp.splice(source.index, 1);
        temp.splice(destination.index, 0, move);
        return temp;
      });
    }
  };
  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Card />
      </DragDropContext>
    </Wrapper>
  );
}

export default App;
