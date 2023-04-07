import { useEffect, useState } from "react";
import { Ad } from "../types/Ad";
import { fetchData } from "../utils/functions";
import AdComponent from "../components/AdComponent";

const baseApi = 'http://localhost:3000/api';

const Home = () => {

    const [ads, setAds] = useState<Ad[]>();

    useEffect(() => {
        fetchData<Ad[]>(`${baseApi}/ad`).then((data) => {
            setAds(data);
        });
    }, []);

    if(ads === undefined){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Home</h1>
            <ul className="p-5">
                {ads.map((ad) => (
                    <AdComponent key={ad.id} ad={ad}/>
                ))}
            </ul>
        </div>
    );
}

export default Home;