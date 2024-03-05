interface BadeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadeProps) {
  return (
    <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
}