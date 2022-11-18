import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { receiveTeammateById } from "../../../store/selectors.js";
import { ContainerWrapper } from "../../../components/common/ContainerWrapper.jsx";
import TeammatePageBody from "./pageComponents/TeammatePageBody.jsx";
import Loader from "../../../components/common/Loader";
import styles from "./index.module.scss";

const TeammatePage = () => {
    const { mateId } = useParams();
    const teammate = useSelector(receiveTeammateById(mateId));

    return (
        <ContainerWrapper
            wrapperClass={styles.teammate_page__container}
        >
            {teammate ? <TeammatePageBody data={teammate}/> : <Loader/>}
        </ContainerWrapper>
    );
};

export default TeammatePage;
