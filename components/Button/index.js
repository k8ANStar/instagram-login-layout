import styles from "./Button.module.css";

export default function Button() {
	return (
		<div className={styles.button}>
			<button className={styles.buttonBox}>Log in</button>
		</div>
	);
}
