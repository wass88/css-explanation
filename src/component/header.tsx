import Link from "next/link";

export function Anchor({
  anchor,
  children,
}: {
  anchor: string;
  children: any;
}) {
  return (
    <Link href={`#${anchor}`} id={anchor}>
      {children}
    </Link>
  );
}

export function Header({
  name,
  value,
  desc,
}: {
  name: string;
  value: string;
  desc: string;
}) {
  return (
    <h3>
      <Anchor anchor={name}>
        <span className="css-name">
          {name}: {value}
        </span>
      </Anchor>
      <span className="css-desc">{desc}</span>
    </h3>
  );
}

export function TopicHeader({
  name,
  anchor,
  desc,
}: {
  name: string;
  anchor: string;
  desc: string;
}) {
  return (
    <h3>
      <Anchor anchor={anchor}>
        <span className="css-topic">{name}</span>
      </Anchor>
      <span className="css-desc">{desc}</span>
    </h3>
  );
}
