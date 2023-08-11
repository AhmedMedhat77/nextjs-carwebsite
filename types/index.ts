import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface customFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: Number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
