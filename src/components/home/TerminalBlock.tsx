import styles from "./TerminalBlock.module.scss";

export type TerminalLine = {
  input: string;
  output: string;
};

type TerminalBlockProps = {
  lines: TerminalLine[];
  user?: string;
};

export function TerminalBlock({ lines, user = "michael@portfolio" }: TerminalBlockProps) {
  return (
    <div className={styles.terminal} aria-label="Terminal-style profile">
      {/* Mac-style top bar */}
      <div className={styles.topBar}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.barTitle}>{user}:~</span>
      </div>
      <div className={styles.body}>
        {lines.map((line) => (
          <div key={line.input}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>{user}:~$ </span>
              <span>{line.input}</span>
            </div>
            <pre className={styles.output}>{line.output}</pre>
          </div>
        ))}
        <span className={styles.cursor}>_</span>
      </div>
    </div>
  );
}
