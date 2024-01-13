import styles from "./Account.module.css";

export default function Account() {
	return (
		<div className={styles.accountBox}>
			<div className={styles.accountText}>Don't have an account?</div>
			<div className={styles.signUp}>Sign up</div>
		</div>
	);
}
