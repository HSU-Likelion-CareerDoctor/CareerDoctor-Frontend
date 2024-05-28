// 소견서 작성하는 곳
// 스펙 진단 결과서와 합쳐져서 사용 가능하다.
function CreateOpinion(){
    return <>
        <div>
            <div>소견서</div>
            <input type="text" placeholder="스펙 진단서를 보고 난 후 소견서를 작성해주세요."></input>

            <div><p>지금 가장 필요한 스펙</p> <p>다중 선택 가능합니다.</p></div>
            <div>
                <button>학력</button>
                <button>자격증</button>
                <button>대외활동</button>
                <button>언어</button>
                <button>경력</button>
                <button>기타</button>
            </div>

            {/* 오른쪽 정렬 */}
            <div><button>작성완료</button></div>
        </div>
    </>;
}

export default CreateOpinion;