import Vue from "vue";
import { Button, Select } from "element-ui";
import locale from "element-ui/lib/locale/lang/en";

export default () => {
  Vue.use(Button, { locale });
  Vue.use(Select, { locale });
};
