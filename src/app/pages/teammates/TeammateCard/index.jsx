import React from "react";
import { useNavigate } from "react-router-dom";
import TeammatePic from "./TeammatePic.jsx";
import { TeammateInfo } from "./TeammateInfo.jsx";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const TeammateCard = ({ data }) => {
    const navigate = useNavigate();

    return (
        <section className={styles.card} onClick={() => navigate(`/teammates/${data.id}`)}>
            <TeammatePic imgClass={styles.card__img} imgPath={data.imgPath} imgParams="?fit=crop&w=350&q=200"/>
            <TeammateInfo infoClass={styles.card__info} data={data}/>
        </section>
    );
};

export default TeammateCard;

TeammateCard.propTypes = {
    data: PropTypes.object
};
