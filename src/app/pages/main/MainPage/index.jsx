import React from "react";
// import { Navigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import { useMockapiService } from "../../../hooks/useMockapiService.jsx";
import styles from "./index.module.scss";

const Main = () => {
    const { handleUploadMockData, progressInPercents, progressStatus } = useMockapiService();

    return (
        <main className={styles.main_container}>
            <Button onClick={handleUploadMockData}>Init</Button>
            <div>
                <span>Процесс загрузки данных:{" "}</span>
                <span>{progressInPercents}</span>
            </div>
            <div>
                <span>Статус:{" "}</span>
                <span>{progressStatus}</span>
            </div>
            {/* <Navigate to="teammates"/> */}
        </main>
    );
};

export default Main;
