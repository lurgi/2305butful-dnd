import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { dataState } from "../atom";

interface IListProps {
  id: string;
  index: number;
  name: string;
}

function List({ id, index, name }: IListProps) {
  const [stores, setStores] = useRecoilState(dataState);
  return (
    <Draggable draggableId={id + ""} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={id}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h2>{name}</h2>
                {stores[index].items.map((item, index) => (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        {item.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default React.memo(List);
