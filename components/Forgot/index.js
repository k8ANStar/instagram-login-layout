import Link from "next/link";
import styles from "./Forgot.module.css";

export default function Forgot() {
	return (
		<div className={styles.passwordContainer}>
			<Link href={"/"} className={styles.password}>
				Forgot password?
			</Link>
		</div>
	);
}
