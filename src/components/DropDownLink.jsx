import React from "react";
import Link from "next/link";

function DropDownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <p {...rest}>{children}</p>
    </Link>
  );
}

export default DropDownLink;
