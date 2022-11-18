import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncTeammatesActions, asyncHobbiesActions } from "../store/actions.js";
import { teammatesLoadingStatus } from "../store/selectors.js";
import Loader from "../components/common/Loader";

const withPreLoader = Component => props => {
    const dispatch = useDispatch();
    const isLoading = useSelector(teammatesLoadingStatus());

    useEffect(() => {
        dispatch(asyncTeammatesActions.receiveAsyncTeammates());
        dispatch(asyncHobbiesActions.receiveAsyncHobbies());
    }, []);

    return !isLoading ? <Component {...props}/> : <Loader/>;
};

export default withPreLoader;
