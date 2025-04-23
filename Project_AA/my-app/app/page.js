import Regular from './components/ui/Regular';

export default function Page() {
    return (
        <div>
            <h1>Regular 버튼 테스트</h1>
            <Regular text="확인" icon="확인버튼_클릭전.svg" />
            <Regular text="확인" icon="확인버튼_클릭후.svg" />
            <Regular text="확인" icon="확인버튼_클릭전.svg" disabled={true} />
            <Regular text="확인" icon="확인버튼_클릭후.svg" disabled={true} />
            <Regular text="확인" icon="확인버튼_클릭전.svg" stretch={true} />
            <Regular text="확인" icon="확인버튼_클릭후.svg" stretch={true} />
            <Regular text="확인" icon="확인버튼_클릭전.svg" shrink={true} />
            <Regular text="확인" icon="확인버튼_클릭후.svg" shrink={true} />
            <Regular text="확인"/>
        </div>
    );
}
