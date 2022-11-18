import React from "react";
import { useNavigate } from "react-router-dom";
import TeammatePic from "../../TeammateCard/TeammatePic.jsx";
import TeammatePageInfo from "./TeammatePageInfo.jsx";
import TeammatePageContactsList from "./TeammatePageContactsList.jsx";
import TeammatePageInterestsBlock from "./TeammatePageInterestsBlock.jsx";
import TeammatePageWorkingExperience from "./TeammatePageWorkingExperience.jsx";
import TeammatePageFeedback from "./TeammatePageFeedback.jsx";
import Button from "../../../../components/common/Button";
import styles from "../index.module.scss";
import PropTypes from "prop-types";

const TeammatePageBody = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.teammate_page__main_section}>
            <TeammatePic imgClass={styles.teammate_page__profile_img} imgPath={data.imgPath}/>
            <TeammatePageInfo infoClass={styles.teammate_page__info} data={data}/>
            <TeammatePageContactsList contactsListClass={styles.teammate_page__contacts} contacts={data.contacts}/>
            <TeammatePageInterestsBlock interestsBlockClass={styles.teammate_page__interests} hobbiesList={data.hobbies}/>
            <TeammatePageWorkingExperience workingExperienceClass={styles.teammate_page__work}/>
            <Button onClick={() => navigate(-1)}>К команде разработки</Button>
            <TeammatePageFeedback feedbackClass={styles.teammate_page__feedback}/>
        </div>
    );
};

export default TeammatePageBody;

TeammatePageBody.propTypes = {
    data: PropTypes.object
};
