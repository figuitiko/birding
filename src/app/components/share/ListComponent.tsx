import { Exo } from "@next/font/google";
import * as React from "react";



export interface ItemProps {
    item: string;
  }
interface ListProps {
    items: string[];
    Component: React.FC<ItemProps>;
    wrapperCss?: string;
  }
  
  const ListComponent: React.FC<ListProps> = ({ items,wrapperCss, Component }) => {
    return (
      <div className={wrapperCss}>
        {items.map((item, index) => (
          <Component key={index} item={item} />
        ))}
      </div>
    );
  };
export default ListComponent;