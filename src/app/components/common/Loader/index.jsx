import React from "react";
import styles from "./index.module.scss";

const Loader = () => {
    return (
        <article className={styles.ldr}>
            {[{}, {}, {}].map((_, index) => (
                <div key={index} className={styles.ldr_item}></div>
            ))}
        </article>
    );
};

export default Loader;
