import React from "react";
import TeammateCard from "../TeammateCard";
import Loader from "../../../components/common/Loader";
import { useReceiveTeammatesQuery } from "../../../store/api.js";

const TeammatesList = () => {
    const { isLoading, isSuccess, data } = useReceiveTeammatesQuery();

    return !isLoading && isSuccess ? (
        <section className="grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-16 justify-center items-baseline w-full h-full p-12">
            {data.map(teammate => <TeammateCard key={teammate.id} data={teammate}/>)}
        </section>
    ) : <Loader/>;
};

export default TeammatesList;
