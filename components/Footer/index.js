import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<div className={styles.footerContainer}>
			<footer>
				<div className={styles.footer}>
					<Link href={"/"} className={styles.meta}>
						Meta
					</Link>
					<Link href={"/"} className={styles.about}>
						About
					</Link>
					<Link href={"/"} className={styles.blog}>
						Blog
					</Link>
					<Link href={"/"} className={styles.jobs}>
						Jobs
					</Link>
					<Link href={"/"} className={styles.help}>
						Help
					</Link>
					<Link href={"/"} className={styles.api}>
						API
					</Link>
					<Link href={"/"} className={styles.privacy}>
						Privacy
					</Link>
					<Link href={"/"} className={styles.terms}>
						Terms
					</Link>
					<Link href={"/"} className={styles.locations}>
						Locations
					</Link>
					<Link href={"/"} className={styles.lite}>
						Instagram Lite
					</Link>
					<Link href={"/"} className={styles.threads}>
						Threads
					</Link>
					<Link href={"/"} className={styles.contact}>
						Contact Uploading & Non-Users
					</Link>
					<Link href={"/"} className={styles.metaVerified}>
						Meta Verified
					</Link>
				</div>
				<div className={styles.footer}>
					<select name={"/"} id={"/"} className={styles.options}>
						<option value={"English"}>English</option>
						<option value={"Spanish"}>Spanish</option>
						<option value={"French"}>French</option>
						<option value={"Mandarin"}>Mandarin</option>
						<option value={"Punjabi"}>Punjabi</option>
					</select>
					<span>© 2024 Instagram from Meta</span>
				</div>
			</footer>
		</div>
	);
}
