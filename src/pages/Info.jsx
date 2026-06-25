import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Info() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    async function getById() {
        try {
            const { data } = await axios.get(
                `https://to-dos-api.softclub.tj/api/to-dos`
            );

            const foundUser = data.data.find(
                (item) => item.id === Number(id)
            );

            setUser(foundUser);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById();
    }, [id]);


    return (
        <div className="flex gap-10 ml-10!">
            <img src={user.images?.[0]?.imageName} alt="" />
            <div className="flex flex-col gap-10!">
                <h1 className="text-6xl">{user.name}</h1>
                <p className="text-2xl">{user.description}</p>
            </div>
        </div>
    )
}
