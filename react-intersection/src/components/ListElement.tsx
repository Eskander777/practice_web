import { ReactNode } from "react";

export default function ListEl({
  children,
  refConnect,
  propsStyle,
}: {
  children: ReactNode;
  refConnect?: React.Dispatch<React.SetStateAction<HTMLLIElement | null>>;
  propsStyle?: { marginBottom: string };
}): JSX.Element {
  if (propsStyle) {
    return (
      <li ref={refConnect} style={propsStyle}>
        {children} + 1
      </li>
    );
  }

  return <li>{children}</li>;
}
