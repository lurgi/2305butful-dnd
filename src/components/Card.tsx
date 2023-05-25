import { Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { dataState } from "../atom";
import List from "./List";

function Card() {
  const [stores, setStores] = useRecoilState(dataState);
  return (
    <>
      <div>
        <h1>Shopping List</h1>
      </div>
      <Droppable droppableId="ROOT" type="group">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {stores.map((store, index) => (
              <List
                id={store.id}
                index={index}
                key={store.id}
                name={store.name}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}

export default Card;
