import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand-mark" href="/" aria-label="Café com Marketing — início">
      <span className="brand-monogram" aria-hidden="true">
        C
      </span>
      <span className="brand-name">
        CAFÉ COM
        <br />
        MARKETING
      </span>
    </Link>
  );
}
