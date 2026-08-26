export default function StatusDot({ ok = true }: { ok?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={
          "absolute inline-flex h-full w-full rounded-full opacity-60 motion-reduce:hidden " +
          (ok ? "animate-ping bg-emerald-400" : "animate-ping bg-amber-400")
        }
      />
      <span
        className={
          "relative inline-flex h-2 w-2 rounded-full " +
          (ok ? "bg-emerald-400" : "bg-amber-400")
        }
      />
    </span>
  );
}