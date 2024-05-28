import defaultProfile from '../img/emptyProfile.png'

function SpecCard(){
    const tempSpec = ['스펙 위험', '스펙 양호','스펙 우수']


    const getRandomIndex = (length) =>{
        return parseInt(Math.random() * length);
    }

    return <>
        <div>
            {/* 하얀 부분 */}
            <div>
                {/* 왼쪽에 마진 넣어놓기 */}
                <div>
                    {/* 프로필 사진, 이름 */}
                    <div>
                        <img src={defaultProfile} alt='대충 아무것도 없는 이미지'/>
                        <div>닉네ㅇㅇㅇㅇㅇ임</div>
                    </div>

                    {/* 나이 성별 */}
                    <div>
                        <div>나이: 만 00세</div>
                        <div>성별: 00</div>
                    </div>
                </div>
                {/* 스펙 뜨는 곳 */}
                <div>
                    {/* 현재는 랜덤으로 띄워놓기 */}
                    {tempSpec[getRandomIndex(tempSpec.length)]}
                </div>
            </div>

            {/* 소견서 작성하기 부분 */}
            <div>
                소견서  작성하기
            </div>
        </div>
    </>;
}
export default SpecCard;