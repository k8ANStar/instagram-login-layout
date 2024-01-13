import styles from "./Facebook.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Facebook() {
	return (
		<form className={styles.facebookContainer}>
			<div className={styles.facebookLogo}>
				<Image
					className={styles.facebookIcon}
					src={"/images/facebook.png"}
					alt="facebook icon"
					width={20}
					height={20}
					priority
				/>
			</div>
			<Link href={"/"} className={styles.facebookText}>
				Log in with Facebook
			</Link>
		</form>
	);
}
