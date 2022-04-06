import React, { useEffect } from 'react';
import { AppNavbar } from "./AppNavbar";
import { AppFooter } from "./AppFooter";
import { Home } from "../home/Home";
import {
    Routes,
    Route
} from "react-router-dom";
import Aparat from '../aboutus/Aparat/Aparat';
// import History from '../aboutus/history/History';
import AllNews from '../information/allnews/AllNews';
import Contacts from '../contacts/Contacts';
import Kasbxunar from '../enquiries/VocationalEducation';
import FirstPage from '../home/activity/FirstPage';
import SecondPage from '../home/activity/SecondPage';
import ThirdPage from '../home/activity/ThirdPage';
import FourthPage from '../home/activity/FourthPage';
import Fifthpage from '../home/activity/Fifthpage';
import OpenNews from '../information/allnews/OpenNews';
// import Regions from '../aboutus/regions/Regions';
import Cooperation from '../aboutus/cooperation/Cooperation';
import Central from '../aboutus/central/Central';
import Leaders from '../aboutus/leaders/Leaders';
import PhotoGallery from '../information/photoGallery/PhotoGallery';
import Subsidiaries from '../aboutus/subsidiaries/Subsidiaries';
import Documents from '../d-ocuments/Documents';
import ToDrivingSchool from '../enquiries/ToDrivingSchool';
import OnlineEnquiries from '../enquiries/OnlineEnquiries';
import Error from './Error';
import { api } from '../../host';
import { Xarita } from '../../Xarita';
import SixPage from '../home/activity/SixPage';


export function AppContainer() {
 
    return (
        <div className="wrapper app">
            <AppNavbar />
            <main className="main"> <Routes>
            <Route path='*' element={<Error />} />
  
                <Route path="/allnews/:id" element={<OpenNews />} />
                <Route path="/" element={<Home />}></Route>
                <Route path="/markaziy-kengash" element={<Central />} />
                <Route path="/rahbariyat" element={<Leaders />} />
                <Route path="/markaziy-aparat" element={<Aparat />} />
                <Route path="/filiallar" element={<Subsidiaries />} />
                {/* <Route path="/hududiy-kengashlar" element={<Regions />} /> */}
                {/* <Route path="/tashkilot-tarixi" element={<History />} /> */}
                <Route path="/tashkilot/:id" element={<Cooperation />} />
                <Route path="/error" element={<Error />} />
                <Route path="/allnews" element={<AllNews />} />
                <Route path="/fotogalareya" element={<PhotoGallery />} />
                <Route path="/hujjatlar" element={<Documents />} />
                <Route path="/kontaktlar" element={<Contacts />} />
                <Route path="/onlayn-murojat" element={<OnlineEnquiries />} />
                <Route path="/haydovchilik-maktabiga-yozilish" element={<ToDrivingSchool />} />
                <Route path="/kasb-hunar-maktabiga-yozilish" element={<Kasbxunar />} />
                <Route path="/yoshlar-va-fuqarolarni-manaviy-axloqiy" element={<FirstPage />} />
                <Route path="/sportning-texnik-va-amaliy-turlarini" element={<SecondPage />} />
                <Route path="/bolalar-o‘smirlar-va-chaqiruvgacha" element={<ThirdPage />} />
                <Route path="/yoshlar-va-fuqarolarni-mudofaa" element={<FourthPage />} />
                <Route path="/avtomototransport-vositalari-haydovchilarini" element={<Fifthpage />} />
                <Route path="/xalqaro-tashkilotlar-bilan-faol-hamkorlik-qilish" element={<SixPage />} />
                <Route path="/xarita" element={<Xarita />} />
            </Routes></main>
            <AppFooter />
        </div>
    );
}

