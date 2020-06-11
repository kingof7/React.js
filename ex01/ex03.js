//props는 속성들의 집합
function Show(props) {
    return (
    <h3>
      Name is {props.name}
    </h3>
    );
  }
  
  function App() {
    return (
      <main>
         <Show name="이종화"/>
         <Show name="이순신"/>
         <Show name="홍길동"/>
      </main>
    )
  }
  
  //name이 전달되지 않았다면 디폴트값을 보냄
  Show.defaultProps = {
    name: '홍길동'
  }
  
  
  
  //name 전달, element를 html 태그처럼 사용가능
  //const element = <Show name="이종화"/>
  ReactDOM.render(<App/>, //재사용성
  document.getElementById('root'));