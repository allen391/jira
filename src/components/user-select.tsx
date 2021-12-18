import React from "react";
import { useUser } from "../utils/user";
import IdSelector from "./id-selector";

const UserSelect = (props: React.ComponentProps<typeof IdSelector>) => {
  const { data: users } = useUser();
  return <IdSelector options={users || []} {...props} />;
};

export default UserSelect;
