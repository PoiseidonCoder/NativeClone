import { ImageSourcePropType } from "react-native";


export default interface Icon {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: Boolean;
}
