import { useDrag } from 'react-dnd';
import { useAppState } from './AppStateContext';
import { DragItem } from './DragItem';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item, // contains the data about the dragged item
    begin: () =>
      // is called when we start dragging an item
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item,
      }),
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined }), // is called when we release the item
  });

  return { drag };
};
