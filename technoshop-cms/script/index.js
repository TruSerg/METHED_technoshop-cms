import { modalBtn, modal, form } from "./elems.js";
import { modalController } from "./modalController.js";
import { previewController } from "./previewController.js";
import { tableController } from "./tableController.js";
import { formController } from "./formController.js";
import { sortController } from "./sortController.js";

const init = () => {
  modalController({
    modalBtn,
  });

  previewController();
  tableController();
  formController();
  sortController();
};

init();
