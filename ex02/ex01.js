//한명의 사용자가 이미지를 갖고있다.
// 꾸며주는 부분
function User(props) {
    return (
      <div>
        <img src={props.user.imageUrl}/>
        &nbsp;
        <strong>{props.user.name}</strong>      
      </div>
    );
  }
  
  //게시판의 내용 (출력부분)
  function Board(props) {
    return (
    <section>
      <User user={props.user}/>
      {props.title}
      <hr/>
      {props.content}
    </section>
    );
  }
  
  //넘어오는 데이터 (데이터 부분)
  const board = {
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다. 반갑습니다.',
    user: {
      name: '이종화',
      imageUrl: 'https://placeimg.com/32/32/any'
    }
  }
  
  //Board 컴포넌트 그리기
  ReactDOM.render(
    <Board
      title={board.title}
      content={board.content}
      user={board.user}
      />,
    document.getElementById('root')
  );