import { ReactNode, useState } from "react";
import { Flex } from "../flex";
import { Drawer } from "../drawer";
import { Toolbar } from "../toolbar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
	// const [open, setOpen] = useState(true);

return <Flex>
	<Toolbar />
  component/layout
	{children}
</Flex>
}
