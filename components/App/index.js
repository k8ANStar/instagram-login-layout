import styles from "./App.module.css";
import Image from "next/image";

export default function Get() {
	return (
		<div className={styles.getContainer}>
			<div className={styles.getText}>Get the app.</div>
			<div className={styles.download}>
				<Image
					src={"/images/apple-google.png"}
					alt=" download through apple"
					width={423}
					height={78}
					priority
				/>
			</div>
		</div>
	);
}
