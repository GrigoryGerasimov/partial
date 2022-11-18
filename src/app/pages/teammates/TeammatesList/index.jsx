import React from "react";
import TeammateCard from "../TeammateCard";
import { useSelector } from "react-redux";
import { receiveAllTeammates } from "../../../store/selectors";
import Loader from "../../../components/common/Loader";
import styles from "./index.module.scss";

const TeammatesList = () => {
    const mates = useSelector(receiveAllTeammates());

    return mates ? (
        <section className={styles.teammateslist_container}>
            {mates.map(mate => <TeammateCard key={mate.id} data={mate}/>)}
        </section>
    ) : <Loader/>;
};

export default TeammatesList;
