import styles from "./Form.module.css";

export default function Form() {
	return (
		<>
			<form className={styles.form}>
				<input
					className={styles.box}
					placeholder="Phone number, username or email"
					type="text"
				></input>
				<input
					className={styles.box}
					placeholder="Password"
					type="password"
					required
				></input>
			</form>
		</>
	);
}
