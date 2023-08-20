import * as React from "react";

type HyperlinkProps = {
  href: string;
  externalSite?: boolean;
};

function Hyperlink({
  children,
  externalSite = false,
  href,
}: React.PropsWithChildren<HyperlinkProps>) {
  return (
    <a
      className="underline text-blue hover:text-pink visited:text-purple dark:visited:text-orange dark:hover:text-pink"
      href={href}
      target="_blank"
    >
      {children}
      {externalSite ? (
        <span className="sr-only">This link opens in a new window.</span>
      ) : null}
    </a>
  );
}

export default Hyperlink;
