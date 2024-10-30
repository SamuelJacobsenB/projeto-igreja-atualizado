import DefaultTwoButtons from "./default";
import DeleteBtn from "./delete/delete";
import EditBtn from "./edit/edit";
import Root from "./root/root";

export const Two_buttons = {
  root: Root,
  btn: {
    delete: DeleteBtn,
    edit: EditBtn,
  },
  default: DefaultTwoButtons,
};
