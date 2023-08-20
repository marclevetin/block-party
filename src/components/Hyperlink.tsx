import * as React from "react";

type HyperlinkProps = {
  href: string;
};

function Hyperlink({
  children,
  href,
}: React.PropsWithChildren<HyperlinkProps>) {
  return (
    <a
      className="underline text-blue hover:text-pink visited:text-purple"
      href={href}
      target="_blank"
    >
      {children}
      <span className="sr-only">This link opens in a new window.</span>
    </a>
  );
}

export default Hyperlink;
