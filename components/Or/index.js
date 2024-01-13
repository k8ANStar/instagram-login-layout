import styles from "./Or.module.css";

export default function Or() {
	return (
		<div className={styles.orContainer}>
			<div className={styles.line}></div>
			<div className={styles.or}>OR</div>
			<div className={styles.line}></div>
		</div>
	);
}
