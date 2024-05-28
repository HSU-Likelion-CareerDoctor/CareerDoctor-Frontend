import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EducationResults from "../../components/EducationResults";
import CareerMarketResults from "../../components/CareerMarketResults";
import DiagnosisResult from "../../components/DiagnosisResult";
import ActivityResult from "../../components/ActivityResult";
import CreateOpinion from "./createOpinion";


function SpecResult({url}){
    const [name,setName]= useState('OO');
    const tempSpec = ['스펙 위험', '스펙 양호','스펙 우수'];


    const getRandomIndex = (length) =>{
        return parseInt(Math.random() * length);
    };

    const educationData = [
        { label: '대학원', percentage: 10 },
        { label: '대학교(4년)', percentage: 60 },
        { label: '대학교(2,3년)', percentage: 16 },
        { label: '고등학교', percentage: 8 },
        { label: '검정고시', percentage: 4 },
        { label: '기타', percentage: 2 }
      ];
    
    const careerMarketData = {
    noExperiencePercentage: 30,
    withExperiencePercentage: 70,
    ranks: [
        { position: 1, company: 'OO 인턴', percentage: 'OO' },
        { position: 2, company: 'OO 인턴', percentage: 'OO' },
        { position: 3, company: 'OO 인턴', percentage: 'OO' },
        { position: 4, company: 'OO 인턴', percentage: 'OO' },
        { position: 5, company: 'OO 인턴', percentage: 'OO' }
    ]
    };


    const aptitudeData = [
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        
        // ...
      ];
    
      const languageData = [
        { rank: 1, company: '영어', percentage: 'OO' },
        { rank: 2, company: '일본어', percentage: 'OO' },
        { rank: 3, company: '중국어', percentage: 'OO' },
        { rank: 4, company: '기타 언어', percentage: 'OO' },
        // ...
      ];
    
      const miscData = [
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        { rank: 1, company: 'OO 인턴', percentage: 'OO' },
        
        // ...
      ];
    
      const activityTabs = ['전체', '동아리', '공모전', '봉사', '사회진출', '기타'];
      const activityData = {
        '전체': [
          { rank: 1, company: 'OO 인턴', percentage: 'OO' },
          { rank: 2, company: 'OO 인턴', percentage: 'OO' },
          // ...
        ],
        '동아리': [
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
          // ...
        ],
        // 각 탭에 대한 데이터 추가
        '공모전': [
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            // ...
          ],
          '봉사': [
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            // ...
          ],
          '사회진출': [
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            // ...
          ],
          '기타': [
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            { rank: 1, company: 'OO 인턴', percentage: 'OO' },
            // ...
          ],
      };

    return <>
        <Header/>
        {/* 컨테이너 */}
        <div>
            <div>
                {name}님의 스펙 진단 결과서
            </div>

            <div>
                {name}님의 스펙레벨은
            </div>
            <div>
                {tempSpec[getRandomIndex(tempSpec.length)]} 입니다.
            </div>


            <EducationResults data={educationData} />
            <CareerMarketResults data={careerMarketData} />
            <DiagnosisResult title="자격증 진단 결과" data={aptitudeData} />
            <ActivityResult tabs={activityTabs} data={activityData} />
            <DiagnosisResult title="언어능력 진단 결과" data={languageData} />
            <DiagnosisResult title="기타스펙 진단 결과" data={miscData} />
        </div>
        {url === '/createOpinion' ? <CreateOpinion/> : <></>}
        <Footer/>
    </>;
}


export default SpecResult;