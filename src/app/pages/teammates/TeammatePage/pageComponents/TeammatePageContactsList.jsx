import React from "react";
import { Link } from "react-router-dom";
import { BoldText, RegularText, UnorderedList } from "../../../../components/ui/typography";
import PropTypes from "prop-types";

const TeammatePageContactsList = ({ contactsListClass, contacts }) => {
    return (
        <article className={contactsListClass}>
            <RegularText>
                Чаще всего меня можно найти здесь{" "}
                <BoldText>здесь:</BoldText>
            </RegularText>
            <UnorderedList>
                {Object.keys(contacts).map(contactName => (
                    <Link key={contacts[contactName].svgPath.slice(0, 21)} to={contacts[contactName].urlPath} title={contacts[contactName].name}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d={contacts[contactName].svgPath}/>
                        </svg>
                    </Link>
                ))}
            </UnorderedList>
        </article>
    );
};

export default TeammatePageContactsList;

TeammatePageContactsList.propTypes = {
    contactsListClass: PropTypes.string,
    contacts: PropTypes.object
};
