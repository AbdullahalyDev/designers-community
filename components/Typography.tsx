import { ReactNode, CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

type AProps = {
  href: string;
};

export function H1({ className, style, children }: Props) {
  return (
    <h1 className={className} style={style}>
      {children}
    </h1>
  );
}

export function H2({ className, style, children }: Props) {
  return (
    <h2 className={className} style={style}>
      {children}
    </h2>
  );
}

export function A({ className, style, href, children }: Props & AProps) {
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}

export function P({ className, style, children }: Props) {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}

export function Span({ className, style, children }: Props) {
  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
}
